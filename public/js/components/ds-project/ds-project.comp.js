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
         * Initializes a new instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))

            // Assign default values and references.
            this.#projectTitle = 'Aquity'
            this.#projectDescription = 'undefined not null'
            this.#liveURL = 'https://aquity.onrender.com/'
            this.#repoURL = 'https://github.com/dlovans/quant'
            this.#projectScreenshot = './../../../img/projects/aquity-screenshot.png'

            this.#projectTitleRef = this.shadowRoot.querySelector('.project-title')
        }
    }
)