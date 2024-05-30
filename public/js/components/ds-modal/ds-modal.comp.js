/**
 * @description This module represents the ds-modal web component.
 * @module ds-modal
 */

// Define custom element.
customElements.define('ds-modal',
    /**
     * Anonymous class representing this custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Initializes an instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element.
            this.attachShadow({ mode: 'open' })

            // Register event handlers.
            this.addEventListener('ds-modal-projects', (event) => this.#renderProjects(event))
            this.addEventListener('ds-modal-techs', (event) => this.renderTechs(event))
        }

        #renderProjects(eventObj) {
            console.log(eventObj.detail)
        }
    }
    )