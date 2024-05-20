// Create template object.
export const template = document.createElement('template')

// Populate template.
template.innerHTML = `
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    :host {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        display: flex;
        overflow: hidden;
    }
    
    
`