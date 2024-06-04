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
        #mainContentRef

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
            this.#mainContentRef = this.shadowRoot.querySelector('.view-container')
            this.#overlayRef = this.shadowRoot.querySelector('.invisible-overlay')
            this.#closeModalBtn = this.shadowRoot.querySelector('#close-btn')

            // Register event handlers.
            this.addEventListener('ds-modal-projects', (event) => this.#renderModal(event))
            this.addEventListener('ds-modal-techs', (event) => this.#renderModal(event))

            this.shadowRoot.addEventListener('click', (event) => {
                if (event.target === this.#overlayRef || event.target === this.#closeModalBtn) {
                    this.classList.remove('toggle-modal')
                }
            })
        }

        /**
         * Renders the modal box.
         *
         * @param {object} eventObj - The event object with details.
         */
        async #renderModal(eventObj) {
            const dataCollection = Array.from(eventObj.detail.data)
            this.#mainContentRef.innerHTML = ''
            this.#mainHeadingRef.textContent = eventObj.detail.modalType

            if (eventObj.detail.modalType === 'Projects') {
                this.#mainContentRef.append(this.#renderProjects(dataCollection))
            } else {
                const techModal = await this.#renderTechs(dataCollection)
                    this.#mainContentRef.append(techModal)
            }
        }

        /**
         * Renders each project.
         * @param data - The data from the projects event object.
         *
         * @returns {DocumentFragment} - Rendered content in document fragment.
         */
        #renderProjects(data) {
            const fragment = document.createDocumentFragment()

            for (const projectItem of data) {
                const radioButton = document.createElement('input')
                radioButton.setAttribute('type', 'radio')
                radioButton.setAttribute('value', projectItem.projectKey)
                if (projectItem.clicked) {
                    radioButton.setAttribute('checked', '')
                }

                const projectContentWrapper = document.createElement('div')
                projectContentWrapper.classList.add('project-content-wrapper')
                projectContentWrapper.setAttribute('data-key', projectItem.projectKey)


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
                const projectDescriptionWrapper = document.createElement('div')
                projectDescriptionWrapper.classList.add('modal-project-description-wrapper')
                for (const paragraph of projectDescriptionCollection) {
                    const paragraphObject = document.createElement('p')
                    paragraphObject.textContent = paragraph
                    projectDescriptionWrapper.append(paragraphObject)
                }

                projectContentWrapper.append(projectHeader, projectImage, linksWrapper, projectDescriptionWrapper)

                fragment.append(projectContentWrapper)
            }

            this.classList.add('toggle-modal')
            return fragment
        }

        /**
         * Renders each technology.
         *
         * @param data - The data from the techs event object.
         * @returns {Promise<DocumentFragment>} - Resolves to document
         * fragment with rendered content.
         */
        async #renderTechs(data) {
            const fragment = document.createDocumentFragment()

            for (const tech of data) {
                const techContentWrapper = document.createElement('div')
                techContentWrapper.classList.add('tech-content-wrapper')

                const symbolWrapper = document.createElement('div')
                const svgWrap = document.createElement('div')
                const getSVGFile = await fetch(tech.svgRelativePath)
                if(!getSVGFile) {
                    throw new Error(`Check SVG file source for ${tech.svgRelativePath}`)
                }
                const svgContent = await getSVGFile.text()
                svgWrap.innerHTML = svgContent

                const logoTitle = document.createElement('h3')
                logoTitle.textContent = tech.name
                symbolWrapper.append(logoTitle, svgWrap)

                const textWrapper = document.createElement('div')
                textWrapper.classList.add('symbol-text-wrapper')
                const paragraphs = tech.description.split('|||')
                for (const paragraph of paragraphs) {
                    const pObject = document.createElement('p')
                    pObject.textContent = paragraph
                    textWrapper.append(pObject)
                }


                techContentWrapper.append(symbolWrapper, textWrapper)
                fragment.append(techContentWrapper)
            }
            this.classList.add('toggle-modal')
            return fragment
        }
    }
    )