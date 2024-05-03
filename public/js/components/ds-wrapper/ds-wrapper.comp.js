/**
 * @description This module defines the ds-wrapper web component.
 * @module ds-wrapper
 */

import { template as styleTemplate } from './ds-wrapper.css.js'
import { template as markupTemplate } from './ds-wrapper.html.js'

/**
 * Define custom element ds-wrapper.
 */
customElements.define('ds-wrapper',
  /**
   * Anonymous class representing ds-wrapper custom element.
   */
  class extends HTMLElement {
    /**
     * Denotes if wrapper is expandable or not.
     */
    #expandableModal

    /**
     * Reference to child div object with SVG expand symbol.
     */
    #expandableHintWrapper

    /**
     * Reference to the slot object.
     */
    #slotRef

    /**
     * Creates an instance of this class.
     */
    constructor() {
      // Invoke superclass' constructor.
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.append(styleTemplate.content.cloneNode(true))
      this.shadowRoot.append(markupTemplate.content.cloneNode(true))

      // Default values and references.
      this.#expandableModal = false
      this.#expandableHintWrapper = this.shadowRoot.querySelector('.expand-icon-wrapper')
      this.#slotRef = this.shadowRoot.querySelector('slot')

      /**
       * Register event handlers.
       */
      // Register event handler for click events, dispatches custom event.
      this.addEventListener('click', () => this.#dispatchExpandEvent())

      // Register event handler for slot changes, makes sure host only has
      // 1 child if expandable.
      this.addEventListener('slotchange', () => this.#slotChecker())
    }

    /**
     * Invoked after the custom element has been inserted into the DOM.
     */
    connectedCallback() {
      this.#toggleExpandIconWrapper(this.#expandableModal)
    }

    /**
     * Observes the specified attributes for changes.
     * 
     * @returns {String[]} - An array of attributes to be observed.
     */
    static get observedAttributes() {
      return ['ds-expandable']
    }

    /**
     * 
     * @param {String} name - The name of the attribute. 
     * @param {Boolean} oldValue - The attribute value before the change.
     * @param {Boolean} newValue - The attribute value after the change.
     */
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'ds-expandable') {
        this.#hasExpandableAttribute()
        this.#toggleExpandIconWrapper(this.#expandableModal)
      }
    }

    /**
     * Hides or displays expandable UI indicator.
     *
     * @param {Boolean} isExpandable - Indicates if ds-wrapper is expandable.
     */
    #toggleExpandIconWrapper(isExpandable) {
      if (isExpandable) {
        this.#expandableHintWrapper.classList.remove('hidden')
      } else {
        this.#expandableHintWrapper.classList.add('hidden')
      }
    }

    /**
     * Checks if ds-expandable attribute exists.
     * 
     * @throws {TypeError} - Thrown if attribute exists and is not of type boolean.
     */
    #hasExpandableAttribute() {
      const isExpandable = this.hasAttribute('ds-expandable')
      const getExpandableValue = this.getAttribute('ds-expandable')

      if (getExpandableValue && typeof (getExpandableValue) !== 'boolean') {
        throw new TypeError('ds-expandable attribute must be of type boolean.')
      }

      if (isExpandable) {
        this.#expandableModal = true
      } else {
        this.#expandableModal = false
      }
    }

    /**
     * Dispatches an event with details about the children of this custom element,
     * if this custom element is expandable.
     *
     * @event ds-expand
     * @fires ds-expand
     */
    #dispatchExpandEvent() {
      // If custom element is expandable, create a custom event and dispatch.
      if (this.#expandableModal) {
        const detailCollection = []

        // Convert to true array to loop with for of.
        const arrayOfSVGWraps = Array.from(this.children[0].children)

        for (const child of arrayOfSVGWraps) {
          const childObjectDetail = {
            svgRelativePath: child?.getAttribute('svg-source') || '../../img/icons8-swift.svg',
            description: child?.getAttribute('ds-description') || 'Being swiftly with Swift is a core principle.',
            name: child?.getAttribute('ds-svg-name') || 'Swift'
          }

          detailCollection.push(childObjectDetail)
        }

        // Include composed property to allow propagation out of shadow DOM.
        const expandEvent = new CustomEvent('ds-expand', {
          detail: {
            information: detailCollection
          },
          bubbles: true,
          composed: true
        })

        // Dispatch custom event.
        this.dispatchEvent(expandEvent)
      }
    }

    /**
     * Makes sure custom element slot children is a div and is of length 1.
     *
     * @throws {TypeError} - Thrown if slot child element is not a div and custom
     * element is expandable.
     * @returns {undefined} - If this custom element is not expandable.
     */
    #slotChecker () {
      if (!this.#expandableModal) return

      if (!slotChildNodes.length || slotChildNodes[0].tagName !== 'DIV') {
        throw new TypeError('If expandable, insert only 1 element of type div.')
      }

      const slotChildNodes = this.#slotRef.assignedNodes()
      if (slotChildNodes.length > 1) {
        for (let i = 1; i < this.#slotRef.children.length; i++) {
          slotChildNodes[i].remove()
        }
      }
    }
  }
)
