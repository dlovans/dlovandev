/**
 * @description This module represents the ds-project-wrapper web component.
 * @module ds-project-wrapper
 */

import { template as markupTemplate } from './ds-project-wrapper.html.js'

// Define custom element ds-project-wrapper.
customElements.define('ds-project-wrapper',
    /**
     * Anonymous class representing this custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Reference to left arrow button.
         */
        #prevArrowRef

        /**
         * Reference to right arrow button.
         */
        #nextArrowRef

        /**
         * Reference to a ds-project child.
         */
        #projectRef

        /**
         * Reference to all ds-project children.
         */
        #allProjectsRef

        // Initializes an instance of this class.
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))

            // Initialize fields with default values.
            this.#prevArrowRef = this.shadowRoot.querySelector('.prev-scroll')
            this.#nextArrowRef = this.shadowRoot.querySelector('.next-scroll')
            this.#projectRef = this.querySelector('ds-project')
            this.#allProjectsRef = this.querySelectorAll('ds-project')

            // Register event handler.
            this.addEventListener('ds-project-info', (event) => this.#dispatchAllProjectsEvent(event))
        }

        /**
         * Invoked after this custom element has been inserted into the DOM.
         */
        connectedCallback() {
            this.#removeNonProjectElements()
            this.#setUniqueKeyOnChildren()
        }

        /**
         * Sets a unique key attribute for each child object of this custom element.
         */
        #setUniqueKeyOnChildren() {
            let numberedKey = 1
            for (const regularDOMChild of this.children) {
                regularDOMChild.setAttribute('data-key', `${numberedKey}`)
                ++numberedKey
            }
        }

        /**
         * Collects details about each ds-project child,
         * then dispatches a custom event.
         *
         * @event ds-expand-projects
         * @param {object} eventObj - The event object fired by the clicked ds-project.
         */
        #dispatchAllProjectsEvent(eventObj) {
            const projectInfoCollection = []

            // Get project info through ds-project getter method.
            for (const projectChild of Array.from(this.#allProjectsRef)) {
                const projectInfo = projectChild.projectInfo
                projectInfo.clicked = eventObj.detail.projectKey === projectInfo.projectKey
                projectInfoCollection.push(projectInfo)
            }
            this.dispatchEvent(new CustomEvent('ds-expand-projects', {
                detail: projectInfoCollection,
                bubbles: true,
                composed: true
            }))
        }

        /**
         * Removes light DOM children that are not of type ds-project.
         */
        #removeNonProjectElements() {
            for (const child of Array.from(this.children)) {
                if (child.tagName !== 'DS-PROJECT') {
                    child.remove()
                }
            }
        }
    }
    )
