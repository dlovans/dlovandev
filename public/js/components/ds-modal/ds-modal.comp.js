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

            this.attachShadow({ mode: 'open' })

            // Register event handler.
            this.addEventListener('ds-modal-projects', (event) => this.#renderProjects(event))
        }

        #renderProjects(eventObj) {
            console.log(eventObj.detail)
        }
    }
    )