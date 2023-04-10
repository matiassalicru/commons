import '@testing-library/jest-dom';

import React from "react";

jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
}));

jest.mock(
    (() => {
        // This will mock the version of uuid belonging to react-tooltip
        // if it exists, otherwise use the top-level uuid module
        try {
            require("react-tooltip/node_modules/uuid");
            return "react-tooltip/node_modules/uuid";
        } catch (error) {
            return "uuid";
        }
    })(),
    () => ({
        v4: () => "00000000-0000-0000-0000-000000000000",
    })
);

jest.mock("framer-motion", () => {
    const AnimatePresence = jest.fn(({ children }) => <>{children}</>);
    const motion = {
        // extend with different element ej. <a>, <li>, <lu>, etc.
        div: require("react").forwardRef(({ children, ...rest }, ref) => {
          const { whileTap, animate, initial, variants, ...divProps } = rest;
          return (
            <div {...divProps} ref={ref}>
              {children}
            </div>
          );
        }),
        button: require("react").forwardRef(({ children, ...rest }, ref) => {
          return (
            <div ref={ref}>
              {children}
            </div>
          );
        }),
        ul: jest.fn().mockImplementation(({ children }) => children),
      };
    return {
        AnimatePresence,
        motion,
    };
});

jest.mock("react-dom", () => {
    const original = jest.requireActual("react-dom");
    return {
        ...original,
        createPortal: (node) => node,
    };
});
