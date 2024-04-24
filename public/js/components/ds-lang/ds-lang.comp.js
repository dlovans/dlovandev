/**
 * @description This module defines the ds-langs web component.
 * @module ds-langs
 */

import { template as markupTemplate } from './ds-lang.html.js'
import { template as styleTemplate } from './ds-lang.css.js'

customElements.define('ds-lang',
  /**
   * Anonymous class representing the ds-langs custom element.
   * @extends HTMLElement
   */
  class extends HTMLElement {
    /**
     * Relative source to the SVG.
     */
    #svgSource

    /**
     * Height and width of div wrapper.
     */
    #divDimensions

    /**
     * SVG height and width.
     */
    #svgDimensions

    /**
     * Background color of the div container.
     */
    #bgColor

    /**
     * Reference to the div being rendered.
     */
    #divContainer

    /**
     * Reference to the SVG object.
     */
    #svgObj

    /**
     * Initializes new instance.
     */
    constructor() {
      super()
      // Attach shadow DOM tree to this custom element, and
      // append templates to its shadow root.
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))

      // Initialize svgSource field. Defaults to Swift SVG.
      this.#svgSource = this.getAttribute('lang-language') || '../../img/icons8-swift.svg'
      // Default values and references.
      this.#divDimensions = 50
      this.#svgDimensions = 50
      this.#bgColor = '#36454f'
      this.#divContainer = this.shadowRoot.querySelector('div')
    }

    /**
     * Invoked after the custom element is inserted into the DOM.
     */
    async connectedCallback() {
      await this.#insertSVGFile(this.#svgSource)
      this.#setSvgDimensions(this.#svgDimensions)
      this.#setBgColor(this.#bgColor)
      this.#setDivDimensions(this.#divDimensions)
      this.#setSvgDimensions(this.#svgDimensions)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes() {
      return ['lang-language', 'div-dimensions', 'svg-dimensions', 'bg-color']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    async attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'lang-language' && oldValue !== newValue) {
        this.#svgSource = newValue
        await this.#insertSVGFile(this.#svgSource)
      }

      if (name === 'div-dimensions' && oldValue !== newValue) {
        this.#divDimensions = newValue
        await this.#insertSVGFile(this.#svgSource)
      }

      if (name === 'svg-dimensions' && oldValue !== newValue) {
        this.#svgDimensions = newValue
        this.#setSvgDimensions(this.#svgDimensions)
      }

      if (name === 'bg-color' && oldValue !== newValue) {
        this.#bgColor = newValue
        this.#setBgColor(this.#bgColor)
      }
    }


    /**
     * Inserts svg content to this custom element from svg file.
     * 
     * @param svgFilePath - Relative file path to SVG file.
     */
    async #insertSVGFile(svgFilePath) {
      this.classList.remove('hide')
      try {
        const response = await fetch(svgFilePath)
        if (!response) {
          throw new Error('Check SVG file source!')
        }
        const svgContent = await response.text()

        this.#divContainer.innerHTML = svgContent

        this.#svgObj = this.#divContainer.querySelector('svg')
      } catch (error) {
        console.error(error.message)
        this.classList.add('hide')
      }
    }

    /**
     * Sets the dimensions of the SVG.
     */
    #setSvgDimensions(dimensions) {
      this.#svgObj?.setAttribute('height', `${dimensions}px`)
      this.#svgObj?.setAttribute('width', `${dimensions}px`)
    }

    /**
     * Sets the background color of the referenced div.
     *
     * @param {String} backgroundColor - The background color to be set.
     */
    #setBgColor(backgroundColor) {
      this.#divContainer.style.backgroundColor = backgroundColor
    }

    /**
     * 
     * @param {String} dimensions - The dimensions of the referenced div.
     */
    #setDivDimensions(dimensions) {
      this.#divContainer.style.height = `${dimensions}px`
      this.#divContainer.style.width = `${dimensions}px`
    }
  }
)
