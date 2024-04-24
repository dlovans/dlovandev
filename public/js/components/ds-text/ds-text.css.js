// Create template object.
export const template = document.createElement('template')

// Add styling for rendering.
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      align-items: center;
    }

    h2 {
      font-size: 1.2rem;
      white-space: nowrap;
    }
  </style>
`
