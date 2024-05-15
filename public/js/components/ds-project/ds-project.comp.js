/**
 * @description This module represents ds-project web component.
 * @module ds-project
 */

import { template as styleTemplate } from './ds-project.css.js'

// Define custom element.
customElements.define('ds-project',
    /**
     * Anonymous class representing the ds-project custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Initializes a new instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))
        }
    }
    )