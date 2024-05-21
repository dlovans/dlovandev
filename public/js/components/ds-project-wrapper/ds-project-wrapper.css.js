// Create template object.
export const template = document.createElement('template')

// Populate template.
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
            overflow: hidden;
            gap: 3%;
            height: 100%;
        }
    </style>
`