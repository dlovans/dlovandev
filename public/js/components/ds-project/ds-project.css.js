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
            display: flex;
            justify-content: center;
            overflow: hidden;
            border-radius: 15px;
            background-color: #242f36;
            position: relative;
            height: 90%;
            width: 300px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        
        
        .interactive-wrapper {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            opacity: 0;
            transition: .3s ease-in;
            height: 100%;
        }
        
        .interactive-wrapper a,
        .expand-to-modal {
            display: flex;
            justify-content: center;
            align-content: center;
            font-size: 1.1rem;
            text-decoration: none;
            background-color: beige;
            border-radius: 15px;
            margin: 10px 0;
            padding: 5px 30px;
            position: relative;
        }
        
        .interactive-wrapper svg {
            width: 20px;
            height: 20px;
            display: flex;
            align-self: center;
        }
        
        .interactive-wrapper a svg:nth-of-type(1),
        .expand-to-modal svg {
            margin-left: 5px;
        }
        
        .interactive-wrapper a svg:nth-of-type(2) {
            margin-left: auto;
        }
        
        :host(:hover) .interactive-wrapper {
            opacity: 1;
        }
    </style>
`