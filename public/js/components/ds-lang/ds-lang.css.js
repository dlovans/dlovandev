// Create template object.
export const template = document.createElement('template')

template.innerHTML = `
<style>
  :host {
    justify-self: center;
  }

  .hide {
    display: none;
  }

  .center-div-content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #36454f;
    border-radius: 10px;
  }
</style>
`
