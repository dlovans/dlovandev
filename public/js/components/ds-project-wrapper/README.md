# &lt;ds-project-wrapper&gt;

`ds-project-wrapper` is a web component that wraps `ds-project` web components. It displays minimal details for each project.

## Example

```html
<ds-project-wrapper>
    <ds-project
            ds-project-title="Solarity"
            ds-live-url="https://www.solarity.com"
            ds-repo-url="https://www.github.com/ds/solarity"
            ds-project-screenshot="../../../img/projects/solarity.jpg"
    >
    </ds-project>
    <ds-project
            ds-project-title="Llama"
            ds-live-url="https://www.llama.com"
            ds-repo-url="https://www.github.com/ds/llama"
            ds-project-screenshot="../../../img/projects/llama.jpg"
    >
    </ds-project>
</ds-project-wrapper>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-project-wrapper.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:
```html
<scrip type="module" src="../components/ds-project-wrapper/ds-project-wrapper.comp.js"></scrip>
```

###### Continue in HTML:
```html
<ds-project-wrapper>
    <ds-project></ds-project>
</ds-project-wrapper>
```

## Custom Events
### `ds-expand-projects`
The `ds-expand-projects` custom event is dispatched when another custom event, `ds-project-info` dispatched by a child `ds-project`, is captured. 
- **Target:** `ds-app` web component.
- **Communicates with:** `ds-modal` web component.
- **Description:** This event is dispatched by `ds-project-wrapper` in response to another custom event `ds-project-info`dispatched by `ds-project`web component.
- **Bubbles:** true.
- **Composed:** true
- **Event Detail Object:**
The event's detail object contains the following properties:
```javascript
{
        projectTitle: string
        liveURL: string
        repoURL: string
        projectDescription: string
        projectScreenshot: string
        projectKey: string
        clicked: boolean
}
```

## Note
The slot object only accepts `ds-project` as direct children of this custom element. If other element types are inserted, they will be removed after this custom element has been inserted into the regular DOM.

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Children are inserted into the `<slot>` object and can therefore be styled using global CSS.