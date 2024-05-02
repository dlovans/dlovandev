// Create template object.
export const template = document.createElement('template')

// Populate template object with styles.
template.innerHTML = `
<style>

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :host {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    height: 100%;
    background-color: #242f36;
  }

  .expand-icon-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background-color: #ffffffbe;
    transition: all 400ms ease;
    z-index: 2;
    cursor: pointer;
  }

  :host(:hover) .expand-icon-wrapper {
    opacity: 1;
  }
</style>
`
