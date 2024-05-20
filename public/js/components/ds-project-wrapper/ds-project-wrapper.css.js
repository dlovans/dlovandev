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
            box-sizing: border-box;
            margin: 0;
            display: flex;
            align-items: center;
            overflow: hidden;
            gap: 3%;
            height: 100%;
            padding: 0 10px;
        }
    </style>
`