// Create template object.
export const template = document.createElement('template')

// Style the component.
template.innerHTML = `
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        
        :host {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(150%);
            transition: all .5s ease-in;
            z-index: 10;
        }
        
        :host(.toggle-modal) {
            transform: translateY(0%);
        }
        
        .modal-container {
            position: relative;
            width: 50%;
            height: 70%;
            background-color: #26373d;
            z-index: 10;
            border-radius: 15px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            padding: 5px;
        }
        
        .navbar-control {
            grid-area: nav;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 1px solid #FFF;
            margin-bottom: 20px;
        }
        
        .modal-title {
            margin-left: 1.1rem;
        }
        
        #close-btn {
            font-size: 1.5rem;
            background-color: transparent;
            padding: 0;
            border: none;
            margin-right: 1.1rem;
            color: #FFF;
        }
        
        #close-btn:hover {
            cursor: pointer;
        }
        
        .view-container {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: scroll;
        }
        
        .tech-type {
            overflow-x: hidden;
            overflow-y: scroll;
            flex-direction: column;
            padding: 0 20px;
        }
        
        /* Styling for Project type modal. */
        .project-content-wrapper {
            display: grid;
            box-sizing: border-box;
            grid-template-areas:
            "title title title"
            "desc desc screenshot"
            "desc desc screenshot"
            "desc desc links"
            "desc desc techs"
            "desc desc techs"
            ;
            grid-template-rows: min-content;
            grid-template-columns: 1fr 1fr 1.2fr;
            column-gap: 10px;
            width: 100%;
            flex-shrink: 0;
            padding: 20px;
        }
        
        .modal-project-title {
            grid-area: title;
        }
        
        .modal-links-wrapper {
            grid-area: links;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .modal-links-wrapper a {
            display: flex;
            text-decoration: none;
            background-color: #FFF;
            justify-content: center;
            padding: 10px 30px;
            width: 70%;
            margin-bottom: 15px;
            border-radius: 10px;
        }
        
        .modal-project-image {
            grid-area: screenshot;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 10px;
            width: 100%;
        }
        
        .modal-project-description-wrapper {
            grid-area: desc;
            display: flex;
            flex-direction: column;
        }
        
        .modal-project-description-wrapper p {
            margin-bottom: 1.2rem;
        }
        
        
        /* Styling for tech type modal. */
        .tech-content-wrapper {
            padding: 20px;
            margin: 20px 0;
            border-radius: 15px;
            display: flex;
            background: linear-gradient(45deg, #37474F, #546E7A, #78909C);
        }
        
        .symbol-icon-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 25%;
        }
        
        .symbol-icon-wrapper h3 {
            text-align: center;
        }
        
        .symbol-text-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75%;
        }
        
        .symbol-icon-wrapper svg {
            height: 50px;
            width: 50px;
        }
        
        .tech-stack-wrapper {
            grid-area: techs;
        }
        
        .inner-tech-stack-wrapper {
            display: grid;
            grid-template-columns: repeat(8, min-content);
            width: 100%;
            height: min-content;
            gap: 1%;
            overflow: hidden;
            padding: 10px;
        }
        
        .inner-tech-stack-wrapper div {
            width: 30px;
            height: 30px;
        }
        
        .tech-stack-wrapper svg {
            height: 30px;
            width: 30px;
        }
        
        
        .invisible-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: transparent;
            z-index: 9;
        }
    </style>
`