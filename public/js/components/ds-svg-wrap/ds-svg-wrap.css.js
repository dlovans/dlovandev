// Create template object.
export const template = document.createElement('template')

template.innerHTML = `
<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

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
    border-radius: 10px;
    height: 40px;
    width: 40px;
  }
  
  img {
    height: 30px;
    width: 30px;
  }
</style>
`
