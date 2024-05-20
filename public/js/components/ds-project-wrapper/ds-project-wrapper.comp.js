/**
 * @description This module represents the ds-project-wrapper web component.
 * @module ds-project-wrapper
 */

import { template as styleTemplate } from './ds-project-wrapper.css.js'
import { template as markupTemplate } from './ds-project-wrapper.html.js'

// Define custom element ds-project-wrapper.
customElements.define('ds-project-wrapper',
    /**
     * Anonymous class representing this custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        // Initializes an instance of this class.
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))
        }
    }
    )
