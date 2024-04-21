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

  .hide {
    display: none;
  }

  .center-div-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
`
