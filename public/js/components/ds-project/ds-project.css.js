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
        
        .projects {
            display: flex;
            flex-shrink: 0;
            justify-content: center;
            overflow: hidden;
            border-radius: 15px;
            background-color: #242f36;
            position: relative;
            height: 90%;
            width: 350px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
        
        .project-title {
            width: 100%;
            text-align: center;
            background: linear-gradient(45deg, #ea698b, #c05299, #ac46a1, #973aa8, #6247aa);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
        
        
        .interactive-wrapper {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            opacity: 0;
            visibility: hidden;
            transition: .3s ease;
            height: 100%;
        }
        
        .interactive-wrapper a,
        .expand-to-modal {
            display: flex;
            justify-content: center;
            align-content: center;
            font-size: 1.1rem;
            text-decoration: none;
            background: linear-gradient(45deg, #ea698b, #c05299, #ac46a1, #973aa8, #6247aa);
            border-radius: 15px;
            margin: 5px 0;
            padding: 10px 30px;
            color: #FFF;
        }
        
        .interactive-wrapper svg {
            width: 20px;
            height: 20px;
            align-self: center;
        }
        
        .svg-left {
            margin-right: 5px;
        }
        
        .svg-right {
            margin-left: 15px;
        }
        
        :host(:hover) .interactive-wrapper {
            visibility: unset;
            opacity: 1;
        }
        
        .transparent-bg {
            position: absolute;
            opacity: 0;
            background-color: #ffffffbe;
            transition: .3s linear;
            border-radius: inherit;
            width: 100%;
            height: 100%;
        }
        
        :host(:hover) .transparent-bg {
            opacity: 1;
        }
        
        .expand-to-modal {
            cursor: pointer;
        }
    </style>
`