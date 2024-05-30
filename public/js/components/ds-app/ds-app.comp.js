/**
 * @description This module represents the ds-app web component.
 * @module ds-app
 */

import { template as markupTemplate } from './ds-app.html.js'

/**
 * Define custome element ds-app.
 */
customElements.define('ds-app',
    /**
     * Anonymous class representing ds-app custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Reference to ds-contact custom element.
         */
        #contactComponentRef

        /**
         * Reference to ds-modal custom element.
         */
        #modalComponentRef

        /**
         * Creates an instance of this class.
         */
        constructor() {
            super()
            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))

            // Get reference.
            this.#contactComponentRef = this.querySelector('ds-contact') || this.shadowRoot.querySelector('ds-contact')
            this.#modalComponentRef = this.querySelector('ds-modal') || this.shadowRoot.querySelector('ds-modal')
            // Register event listener.
            this.addEventListener('ds-trigger-focus', () => {
                this.#triggerContactFocus()
            })
            this.addEventListener('ds-expand-techs', (event) => {
                console.log(event.detail)
            })
            this.addEventListener('ds-expand-projects', (event) => {
                this.#relayExpandProjectsEvent(event)
            })
        }

        /**
         * Adds a boolean attribute to ds-contact custom element,
         * triggering a focus action on an input.
         */
        #triggerContactFocus() {
            if (this.#contactComponentRef) {
                this.#contactComponentRef.setAttribute('ds-set-focus', '')
            }
        }

        /**
         * Relays the event data dispatched by ds-project-wrapper component.
         *
         * @event ds-modal-projects - Dispatches custom event.
         * @param {object} eventObj - The event object.
         */
        #relayExpandProjectsEvent(eventObj) {
            this.#modalComponentRef.dispatchEvent(new CustomEvent('ds-modal-projects', {
                detail: {
                    projectInfoCollection: eventObj.detail
                },
                bubbles: true,
                composed: true
            }))
        }
    }
)