import React from "react";
// UI Components
import { Priority } from "./Priority";

const translations = {
    low: 'Bajo',
    high: 'Alto',
    medium: 'Medio',
    urgent: 'Urgente',
}

export default {
    title: "Commons/Priority",
    component: Priority,
    args: {
        priority: 1,
        withLabel: true,
        ableToEdit: true,
        translations: translations,
        updatePriority: () => { },
    },
    argTypes: {
        priority: {
            control: {
                type: "select",
                options: [0, 1, 2, 3],
            },
        },
    },
};

const Template = (args) => <Priority {...args} />;

export const PRIORITY = Template.bind({});

PRIORITY.storyName = "Priority select";
