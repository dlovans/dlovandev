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
        #closeModalBtnRef

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
            this.#closeModalBtnRef = this.shadowRoot.querySelector('#close-btn')

            // Register event handlers.
            this.addEventListener('ds-modal-projects', (event) => this.#renderModal(event))
            this.addEventListener('ds-modal-techs', (event) => this.#renderModal(event))

            this.shadowRoot.addEventListener('click', (event) => {
                if (event.target === this.#overlayRef || event.target === this.#closeModalBtnRef) {
                    this.classList.remove('toggle-modal')
                }
            })
        }

        /**
         * Renders the modal box.
         *
         * @param {object} eventObj - The event object with details.
         */
        #renderModal(eventObj) {
            const dataCollection = Array.from(eventObj.detail.data)
            this.#mainContentRef.innerHTML = ''
            this.#mainHeadingRef.textContent = eventObj.detail.modalType

            if (eventObj.detail.modalType === 'Projects') {
                this.#mainContentRef.setAttribute('part', 'project-type')
                const projectModal = this.#renderProjects(dataCollection)
                this.#mainContentRef.append(projectModal)
            } else {
                this.#mainContentRef.setAttribute('part', 'tech-type')
                const techModal = this.#renderTechs(dataCollection)
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
                projectContentWrapper.setAttribute('part', 'project-content-wrapper')
                projectContentWrapper.setAttribute('data-key', projectItem.projectKey)


                const projectHeader = document.createElement('h3')
                projectHeader.textContent = projectItem.projectTitle
                projectHeader.classList.add('modal-project-title')
                projectHeader.setAttribute('part', 'modal-project-title')

                const projectImage = document.createElement('div')
                projectImage.style.backgroundImage = `url(${projectItem.projectScreenshot})`
                projectImage.setAttribute('part', 'modal-project-image')

                const linksWrapper = document.createElement('div')
                linksWrapper.setAttribute('part', 'modal-links-wrapper')
                const projectRepoURL = document.createElement('a')
                const projectLiveURL = document.createElement('a')
                projectRepoURL.href = projectItem.repoURL
                projectRepoURL.setAttribute('target', '_blank')
                projectRepoURL.setAttribute('part', 'project-urls')
                projectLiveURL.href = projectItem.liveURL
                projectLiveURL.setAttribute('target', '_blank')
                projectLiveURL.setAttribute('part', 'project-urls')

                const linkSymbol = '\u{1F517}'
                projectRepoURL.textContent = `Repository ${linkSymbol}`
                projectLiveURL.textContent = `Live Demo ${linkSymbol}`
                linksWrapper.append(projectLiveURL, projectRepoURL)

                const projectDescriptionCollection = projectItem.projectDescription.split('|||')
                const projectDescriptionWrapper = document.createElement('div')
                projectDescriptionWrapper.setAttribute('part', 'modal-project-description-wrapper')
                for (const paragraph of projectDescriptionCollection) {
                    const paragraphObject = document.createElement('p')
                    paragraphObject.textContent = paragraph
                    projectDescriptionWrapper.append(paragraphObject)
                }

                const techStackWrapper = document.createElement('div')
                techStackWrapper.setAttribute('part', 'tech-stack-wrapper')
                const techStackTitle = document.createElement('h3')
                techStackTitle.textContent = 'Project Tech Stack'
                const innerTechStackWrapper = document.createElement('div')
                innerTechStackWrapper.setAttribute('part', 'inner-tech-stack-wrapper')
                techStackWrapper.append(techStackTitle, innerTechStackWrapper)


                const techStackCollection = projectItem.projectTechStack.split('|||')
                for (const tech of techStackCollection) {
                    const svgWrapper = document.createElement('div')
                    const svgImg = document.createElement('img')
                    svgWrapper.setAttribute('part', 'img-wrapper-project')
                    svgImg.setAttribute('part', 'svg-img-project')
                    const relativeSvgPath = `./../../img/${tech}`
                    svgImg.setAttribute('src', relativeSvgPath)
                    svgWrapper.innerHTML = ''
                    svgWrapper.append(svgImg)
                    innerTechStackWrapper.append(svgWrapper)
                }

                projectContentWrapper.append(projectHeader, projectImage, linksWrapper, projectDescriptionWrapper, techStackWrapper)

                fragment.append(projectContentWrapper)
            }

            this.classList.add('toggle-modal')
            return fragment
        }

        /**
         * Renders each technology.
         *
         * @param data - The data from the techs event object.
         * @returns {DocumentFragment} - Resolves to document
         * fragment with rendered content.
         */
        #renderTechs(data) {
            const fragment = document.createDocumentFragment()
            for (const tech of data) {
                const techContentWrapper = document.createElement('div')
                techContentWrapper.setAttribute('part', 'tech-content-wrapper')

                const symbolWrapper = document.createElement('div')
                symbolWrapper.setAttribute('part', 'symbol-icon-wrapper')
                const svgWrap = document.createElement('div')
                const svgImg = document.createElement('img')
                svgWrap.setAttribute('part', 'img-wrapper')
                svgImg.setAttribute('part', 'svg-img')
                svgImg.setAttribute('src', tech.svgRelativePath)
                svgWrap.innerHTML = ''
                svgWrap.append(svgImg)
                const logoTitle = document.createElement('h3')
                logoTitle.setAttribute('part', 'logo-title')
                logoTitle.textContent = tech.name
                symbolWrapper.append(svgWrap, logoTitle)

                const textWrapper = document.createElement('div')
                textWrapper.setAttribute('part', 'symbol-text-wrapper')
                const paragraphs = tech.description.split('|||')
                for (const paragraph of paragraphs) {
                    const pObject = document.createElement('p')
                    pObject.setAttribute('part', 'project-paragraph')
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