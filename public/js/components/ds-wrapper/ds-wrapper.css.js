// Create template object.
export const template = document.createElement('template')

// Populate template object with styles.
template.innerHTML = `
<style>
  :host {
    display: flex;
    overflow: hidden;
    justify-content: center;
    border-radius: 15px;
    background-color: #242f36;
  }

  :host(.direction-is-column) {
    flex-direction: column;
  }
</style>
`
