/**
 * @description This module defines the ds-svg-wrap web component.
 * @module ds-svg-wrap
 */

import { template as markupTemplate } from './ds-svg-wrap.html.js'
import { template as styleTemplate } from './ds-svg-wrap.css.js'

customElements.define('ds-svg-wrap',
  /**
   * Anonymous class representing the ds-svg-wrap custom element.
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
     * Description of SVG.
     */
    #description

    /**
     * Descriptive name of the SVG.
     */
    #svgName

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
      this.#svgSource = this.getAttribute('svg-source') || '../../img/Swift_logo_color.svg'
      // Default values and references.
      this.#bgColor = '#36454f'
      this.#divContainer = this.shadowRoot.querySelector('div')
      this.#description = 'Being swiftly with Swift is a core principle.'
      this.#svgName = 'Swift'
    }

    /**
     * Invoked after the custom element is inserted into the DOM.
     */
    connectedCallback() {
      this.#insertSVGFile(this.#svgSource)
      this.#setBgColor(this.#bgColor)
    }

    /**
     * Observes specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes.
     */
    static get observedAttributes() {
      return ['svg-source', 'bg-color', 'ds-description', 'ds-svg-name']
    }

    /**
     * Invoked when an observed attribute value changes.
     * 
     * @param {string} name - Name of the changed attribute.
     * @param {string} oldValue - Attribute value before the change.
     * @param {string} newValue - Attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'svg-source' && oldValue !== newValue) {
        this.#svgSource = newValue
        this.#insertSVGFile(this.#svgSource)
      }

      if (name === 'bg-color' && oldValue !== newValue) {
        this.#bgColor = newValue
        this.#setBgColor(this.#bgColor)
      }

      if (name === 'ds-description' && oldValue !== newValue) {
        this.#description = newValue
      }

      if (name === 'ds-svg-name' && oldValue !== newValue) {
        this.#svgName = newValue
      }
    }


    /**
     * Inserts svg content to this custom element from svg file.
     * 
     * @param svgFilePath - Relative file path to SVG file.
     */
    #insertSVGFile(svgFilePath) {
      const img = document.createElement('img')
      img.setAttribute('src', this.#svgSource)
      img.setAttribute('alt', this.#svgName)
      img.setAttribute('part', 'ds-svg-img')
      this.#divContainer.innerHTML = ''
      this.#divContainer.append(img)
    }

    /**
     * Sets the background color of the referenced div.
     *
     * @param {String} backgroundColor - The background color to be set.
     */
    #setBgColor(backgroundColor) {
      this.#divContainer.style.backgroundColor = backgroundColor
    }
  }
)
