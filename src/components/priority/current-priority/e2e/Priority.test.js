import React from 'react'
import { mount } from "@cypress/react";
import { Priority } from "../Priority";

const setup = (mock = {}) => (
    mount(
        <Priority
          priority={1}
          withLabel
          ableToEdit
          translations={{
              low: 'Bajo',
              high: 'Alto',
              medium: 'Medio',
              urgent: 'Urgente',
          }}
          {...mock}
        />
    )
)

describe('<Priority />', () => {
    it("Should show list with available items", () => {
        setup()

        const button = cy.contains("Medio")

        button.click()

        const list = cy.get('ul')
        const item = list.get('li')

        list.should("be.visible")
        item.should('have.length', 3)
        list.should('contain.text', 'Alto')
        list.should('contain.text', 'Urgente')
        list.should('contain.text', 'Bajo')
    });


    it("Should close list when user click option list", () => {
        setup()

        const button = cy.contains("Medio")

        button.click()

        const list = cy.get('ul')
        const item = list.get('li').first()

        item.click()

        list.should('not.exist')
    });
})
