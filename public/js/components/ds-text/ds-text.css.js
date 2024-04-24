// Create template object.
export const template = document.createElement('template')

// Add styling for rendering.
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    :host {
      display: flex;
      align-items: center;
    }

    h2 {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
    }
  </style>
`