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
        #liveURLAnchorRef

        /**
         * Reference to repository anchor object.
         */
        #repoURLAnchorRef

        /**
         * Reference to the div with class expand-to-modal.
         */
        #expandToModalBoxRef

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
            this.#liveURLAnchorRef = this.shadowRoot.querySelector('a:nth-of-type(1)')
            this.#repoURLAnchorRef = this.shadowRoot.querySelector('a:nth-of-type(2)')
            this.#expandToModalBoxRef = this.shadowRoot.querySelector('.expand-to-modal')

            // Register event handler.
            this.#expandToModalBoxRef.addEventListener('click', () => this.#dispatchProjectInfoEvent())
        }

        /**
         * Invoked after the custom element has been inserted into the DOM.
         */
        connectedCallback() {
            this.#setBackgroundImage()
            this.#setTitle()
            this.#setLiveURL()
            this.#setRepoURL()
        }

        /**
         * Specifies the attribute to be observed for changes.
         *
         * @returns {string[]} - The attributes to be observed.
         */
        static get observedAttributes() {
            return ['ds-project-title', 'ds-live-url', 'ds-repo-url', 'ds-project-screenshot']
        }

        /**
         * Invoked when an observed attribute value changes.
         *
         * @param {string} name - The name of the changed attribute.
         * @param {string} oldValue - Attribute value before change.
         * @param {string} newValue - Attribute value after change.
         */
        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'ds-project-title' && oldValue !== newValue) {
                this.#projectTitle = newValue
                this.#setTitle()
            }

            if (name === 'ds-live-url' && oldValue !== newValue) {
                this.#liveURL = newValue
                this.#setLiveURL()
            }

            if (name === 'ds-repo-url' && oldValue !== newValue) {
                this.#repoURL = newValue
                this.#setRepoURL()
            }

            if (name === 'ds-project-screenshot' && oldValue !== newValue) {
                this.#projectScreenshot = newValue
                this.#setBackgroundImage()
            }
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

        /**
         * Sets the href of the Live anchor tag.
         */
        #setLiveURL() {
            this.#liveURLAnchorRef.href = this.#liveURL
        }

        /**
         * Sets the href of the Repo anchor tag.
         */
        #setRepoURL() {
            this.#repoURLAnchorRef.href = this.#repoURL
        }

       get projectInfo() {
            return {
                projectTitle: this.#projectTitle,
                liveURL: this.#liveURL,
                repoURL: this.#repoURL,
                projectDescription: this.#projectDescription,
                projectScreenshot: this.#projectScreenshot,
                projectKey: this.getAttribute('data-key'),
            }
       }

        /**
         * Dispatches custom event with details about the project.
         *
         * @event ds-project-info
         */
        #dispatchProjectInfoEvent() {
            const eventObject = new CustomEvent('ds-project-info', {
                detail: {
                    projectKey: this.getAttribute('data-key'),
                    clicked: true,
                },
                bubbles: true,
                composed: true
            })

            this.dispatchEvent(eventObject)
        }
    }
)