// Create template object.
export const template = document.createElement('template')

// Populate template content styling.
template.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        :host {
            overflow: hidden;
            border-radius: 15px;
            height: 100%;
            background-color: #242f36;
            position: relative;
        }
        
        
        .interactive-wrapper {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            opacity: 0;
            transition: .3s ease-in;
        }
        
        :host(:hover) .interactive-wrapper {
            opacity: 1;
        }
    </style>
`