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
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))

            // Initialize fields with default values.
            this.#prevArrowRef = this.shadowRoot.querySelector('.prev-scroll')
            this.#nextArrowRef = this.shadowRoot.querySelector('.next-scroll')
            this.#projectRef = this.querySelector('ds-project')
            this.#allProjectsRef = this.querySelectorAll('ds-project')
        }

        /**
         * Invoked after this custom element has been inserted into the DOM.
         */
        connectedCallback() {
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
         *
         * @param eventObj
         */
        #dispatchAllProjectsEvent(eventObj) {
            const projectInfoCollection = []

            // Get project info through ds-project getter method.
            for (const projectChild of Array.from(this.#allProjectsRef)) {
                const projectInfo = projectChild.projectInfo
                if (eventObj.detail.clicked && eventObj.detail.projectKey === projectInfo.projectKey) {
                    projectInfo.clicked = true
                } else {
                    projectInfo.clicked = false
                }
                projectInfoCollection.push(projectInfo)
            }
            this.dispatchEvent(new CustomEvent('ds-expand-projects', {
                detail: projectInfoCollection,
                bubbles: true,
                composed: true
            }))
        }
    }
    )
