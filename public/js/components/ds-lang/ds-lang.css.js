// Create template object.
export const template = document.createElement('template')

template.innerHTML = `
<style>
  :host {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    gap: 5px;
  }

  .edit-svg {
    height: 100%;
    width: 100%;
  }

  .hide {
    display: none;
  }
</style>
`