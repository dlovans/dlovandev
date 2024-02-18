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
  .lang-image {
    width: 40px;
    height: 40px;
  }
</style>
`