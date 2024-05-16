/**
 * @description This module represents ds-project web component.
 * @module ds-project
 */

import { template as styleTemplate } from './ds-project.css.js'
import { template as markupTemplate } from './ds-project.html.js'

// Define custom element.
customElements.define('ds-project',
    /**
     * Anonymous class representing the ds-project custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Title of the project.
         */
        #projectTitle

        /**
         * URL to live app.
         */
        #liveURL

        /**
         * URL to GitHub repository.
         */
        #repoURL

        /**
         * Project description.
         */
        #projectDescription

        /**
         * Project screenshot URL.
         */
        #projectScreenshot

        /**
         * Reference to h3 object.
         */
        #projectTitleRef

        /**
         * Reference to live app anchor object.
         */
        #liveURLATag

        /**
         * Reference to repository anchor object.
         */
        #repoURLATag

        /**
         * Reference to the div with class expand-to-modal.
         */
        #expandToModalBox

        /**
         * Initializes a new instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))

            // Assign default values and references.
            this.#projectTitle = 'Aquity'
            this.#projectDescription = 'undefined not null'
            this.#liveURL = 'https://aquity.onrender.com/'
            this.#repoURL = 'https://github.com/dlovans/quant'
            this.#projectScreenshot = './../../../img/projects/aquity-screenshot.png'

            this.#projectTitleRef = this.shadowRoot.querySelector('.project-title')
            this.#liveURLATag = this.shadowRoot.querySelector('a:nth-of-type(1)')
            this.#repoURLATag = this.shadowRoot.querySelector('a:nth-of-type(2)')
            this.#expandToModalBox = this.shadowRoot.querySelector('.expand-to-modal')
        }

        /**
         * Invoked after the custom element has been inserted into the DOM.
         */
        connectedCallback() {
            this.#setBackgroundImage()
            this.#setTitle()
        }

        /**
         * Sets the background image of this custom element.
         */
        #setBackgroundImage() {
            this.style.backgroundImage = `url(${this.#projectScreenshot})`
        }

        /**
         * Sets the title of this custom element.
         */
        #setTitle() {
            this.#projectTitleRef.textContent = this.#projectTitle
        }
    }
)