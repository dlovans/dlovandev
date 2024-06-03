/**
 * @description This module represents the ds-modal web component.
 * @module ds-modal
 */

import { template as markupTemplate } from './ds-modal.html.js'
import { template as styleTemplate } from './ds-modal.css.js'

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
         * Reference to the projects content view container.
         */
        #projectsContentRef

        /**
         * Reference to the overlay span.
         */
        #overlayRef

        /**
         * Reference to the close button.
         */
        #closeModalBtn

        /**
         * Initializes an instance of this class.
         */
        constructor() {
            super()

            // Attach shadow DOM to this custom element,
            // and append templates to its shadow root.
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.append(markupTemplate.content.cloneNode(true))
            this.shadowRoot.append(styleTemplate.content.cloneNode(true))

            // Get references to shadow DOM children.
            this.#mainHeadingRef = this.shadowRoot.querySelector('.modal-title')
            this.#projectsContentRef = this.shadowRoot.querySelector('.projects-view-container')
            this.#overlayRef = this.shadowRoot.querySelector('.invisible-overlay')
            this.#closeModalBtn = this.shadowRoot.querySelector('#close-btn')

            // Register event handlers.
            this.addEventListener('ds-modal-projects', (event) => this.#renderProjects(event))
            // this.addEventListener('ds-modal-techs', (event) => this.renderTechs(event))

            this.shadowRoot.addEventListener('click', (event) => {
                console.log(event.target)
                if (event.target === this.#overlayRef || event.target === this.#closeModalBtn) {
                    console.log('hello')
                    this.classList.remove('toggle-projects-modal')
                }
            })
        }

        /**
         * Renders each project item in the event detail object.
         *
         * @param {object} eventObj - The event object with project details.
         */
        #renderProjects(eventObj) {
            const dataCollection = Array.from(eventObj.detail.data)

            this.#projectsContentRef.innerHTML = ''
            this.#mainHeadingRef.textContent = ''


            for (const projectItem of dataCollection) {
                const projectContentWrapper = document.createElement('div')
                projectContentWrapper.classList.add('project-content-wrapper')
                projectContentWrapper.setAttribute('data-key', projectItem.projectKey)

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

                const linksWrapper = document.createElement('div')
                linksWrapper.classList.add('modal-links-wrapper')
                const projectRepoURL = document.createElement('a')
                const projectLiveURL = document.createElement('a')
                projectRepoURL.href = projectItem.repoURL
                projectLiveURL.href = projectItem.liveURL
                projectRepoURL.textContent = 'Repository'
                projectLiveURL.textContent = 'Live Link'
                linksWrapper.append(projectLiveURL, projectRepoURL)

                const projectDescriptionCollection = projectItem.projectDescription.split('|||')
                console.log(projectDescriptionCollection)
                const projectDescriptionWrapper = document.createElement('div')
                projectDescriptionWrapper.classList.add('modal-project-description-wrapper')
                for (const paragraph of projectDescriptionCollection) {
                    const paragraphObject = document.createElement('p')
                    paragraphObject.textContent = paragraph
                    projectDescriptionWrapper.append(paragraphObject)
                }

                projectContentWrapper.append(projectHeader, projectImage, linksWrapper, projectDescriptionWrapper)

                this.#projectsContentRef.append(projectContentWrapper)
                this.#mainHeadingRef.textContent = 'Projects'

                this.#projectsContentRef.classList.add('display-view-container')
                this.classList.add('toggle-projects-modal')
            }
        }
    }
    )