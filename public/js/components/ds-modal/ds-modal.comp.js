/**
 * @description This module represents the ds-modal web component.
 * @module ds-modal
 */

import { template as markupTemplate } from './ds-modal.html.js'

// Define custom element.
customElements.define('ds-modal',
    /**
     * Anonymous class representing this custom element.
     * @extends HTMLElement
     */
    class extends HTMLElement {
        /**
         * Reference to the h2 object in shadow DOM.
         */
        #mainHeadingRef

        /**
         * Reference to the main content view container.
         */
        #mainContentRef

        /**
         * Initializes an instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))

            // Get references to shadow DOM children.
            this.#mainHeadingRef = this.shadowRoot.querySelector('.modal-title')
            this.#mainContentRef = this.shadowRoot.querySelector('.project-view-container')

            // Register event handlers.
            this.addEventListener('ds-modal-projects', (event) => this.#renderProjects(event))
            // this.addEventListener('ds-modal-techs', (event) => this.renderTechs(event))
        }

        /**
         * Renders each project item in the event detail object.
         *
         * @param {object} eventObj - The event object with project details.
         */
        #renderProjects(eventObj) {
            const dataCollection = Array.from(eventObj.detail.data)
            console.log(dataCollection)

            this.#mainContentRef.innerHTML = ''
            this.#mainHeadingRef.textContent = ''


            for (const projectItem of dataCollection) {
                const wrapper = document.createElement('div')
                wrapper.classList.add('modal-project-wrapper')

                const radioButton = document.createElement('input')
                radioButton.setAttribute('type', 'radio')
                radioButton.setAttribute('value', projectItem.projectKey)
                if (projectItem.clicked) {
                    radioButton.setAttribute('checked', '')
                }

                const projectHeader = document.createElement('h3')
                projectHeader.textContent = projectItem.projectTitle
                projectHeader.classList.add('modal-project-title')

                const projectImage = document.createElement('div')
                projectImage.style.backgroundImage = `url(${projectItem.projectScreenshot})`
                projectImage.classList.add('modal-project-image')

                const projectRepoURL = document.createElement('a')
                const projectLiveURL = document.createElement('a')
                projectRepoURL.href = projectItem.repoURL
                projectLiveURL.href = projectItem.liveURL

                const projectDescriptionCollection = projectItem.projectDescription.split('&#13')
                const projectDescriptionWrapper = document.createElement('div')
                projectDescriptionWrapper.classList.add('modal-project-description-wrapper')
                for (const paragraph of projectDescriptionCollection) {
                    const paragraphObject = document.createElement('p')
                    paragraphObject.textContent = paragraph
                    projectDescriptionWrapper.append(paragraphObject)
                }

                wrapper.append(projectHeader, projectImage, projectRepoURL, projectLiveURL, projectDescriptionWrapper)

                this.#mainContentRef.append(wrapper)
                this.#mainHeadingRef.textContent = 'Projects'
            }
        }
    }
    )