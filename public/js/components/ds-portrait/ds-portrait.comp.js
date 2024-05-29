/**
 * @description This module represents the ds-portrait web component.
 * @module ds-portrait
 */

import { template as styleTemplate } from './ds-portrait.css.js'

/**
 * Define custom element ds-portrait.
 */
customElements.define('ds-portrait',
    /**
     * Anonymous class representing ds-portrait custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * The relative path of the portrait image source.
         */
        #imageSource

        /**
         * Creates an instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))

            // Assign default values.
            this.#imageSource = '../../../img/portrait/llama.jpg'
        }

        /**
         * Invoked after this custom element is inserted into the DOM.
         */
        connectedCallback() {
            this.#setPortrait()
        }

        /**
         * Specifies the attributes to be observed for changes.
         *
         * @returns {string[]} - The attributes to be observed.
         */
        static get observedAttributes() {
            return ['ds-portrait-source']
        }

        /**
         * Invoked when an observed attribute value changes.
         *
         * @param {string} name - Name of the changed attribute.
         * @param {string} oldValue - Attribute value before the change.
         * @param {string} newValue - Attribute value after the change.
         */
        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'ds-portrait-source' && oldValue !== newValue) {
                this.#imageSource = newValue
                this.#setPortrait()
            }
        }

        /**
         * Sets the portrait image on the host.
         */
        #setPortrait() {
            this.style.backgroundImage = `url(${this.#imageSource})`
        }

    }

)