// Create template object.
export const template = document.createElement('template')

// Populate template object with styles.
template.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  :host(.direction-is-column) {
    flex-direction: column;
  }
</style>
`