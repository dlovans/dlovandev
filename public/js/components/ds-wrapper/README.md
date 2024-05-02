 # &lt;ds-wrapper&gt;

`ds-wrapper` is a web component that wraps content in a container.

## Example

```html
<ds-wrapper>
  <ds-svg-wrap 
    svg-source="./img/machinecode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  </ds-svg-wrap>
  <ds-svg-wrap 
    svg-source="./img/assemblycode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  </ds-svg-wrap>
</ds-wrapper>
```

## Usage

1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-wrapper.comp.js'
```

2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-wrapper/ds-wrapper.comp.js"></script>
```

Continue in HTML:

```html
<ds-wrapper>
  <ds-svg-wrap 
    svg-source="./img/machinecode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  </ds-svg-wrap>
  <ds-svg-wrap 
    svg-source="./img/assemblycode.svg" 
    div-dimensions="40" 
    svg-dimensions="30"
    bg-color="transparent">
  </ds-svg-wrap>
</ds-wrapper>
```
## Styling
The component has no shadow DOM children. Styled using global CSS files. The component has a <slot> object to allow for insertion of regular DOM objects in the custom element.
