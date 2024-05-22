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
            scroll-behavior: smooth;
            gap: 3%;
            height: 100%;
            position: relative;
        }
        
        .prev-scroll,
        .next-scroll {
            position: absolute;
            z-index: 2;
            opacity: 0;
            visibility: hidden;
            transition: .4s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            background-color: transparent;
            border: none;
        }
        
        .prev-scroll:hover,
        .next-scroll:hover {
            cursor: pointer;
        }
        
        .prev-scroll {
            left: 0;
        }
        
        .prev-scroll::before,
        .next-scroll::before {
            content: "";
            position: absolute;
            width: 125px;
            height: 101%;
            background-color: rgba(255,255,255,0.3);
            border-radius: 50%;
        }
        
        .prev-scroll::before {
            transform: translateX(-30px);
        }
        
        .next-scroll::before {
            transform: translateX(30px);
        }
        
        .next-scroll {
            right: 0;
        }
        
        :host(:hover) .prev-scroll,
        :host(:hover) .next-scroll {
            visibility: unset;
            opacity: 1;
        }
    </style>
`