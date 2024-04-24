 # &lt;ds-lang&gt;

`ds-lang` is a web component that displays the logo of a programming language/tool.

## Attributes

### `lang-language`
The `lang-language` represents the relative path of SVG file source (public/img). String attribute. Required.

### `div-dimensions`
The `div-dimensions` represents the width and height, in pixels, of the SVG div wrapper. String attibute. Optional, defaults to 50.

### `svg-dimensions`
The `svg-dimensions` represents the width and height, in pixels, of the SVG. String attibute. Optional, defaults to 50.

### `bg-color`
The `bg-color` represents the background color of the child div wrapper. String attibute. Optional, defaults to '#36454f'.

## Example

```html
<ds-lang lang-language="./img/swift.svg" lang-height="60" lang-width="60"></ds-lang>
```

## Usage

1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-lang.comp.js'
```

2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-lang/ds-lang.comp.js"></script>
```

Continue in HTML:

```html
<ds-lang 
  lang-language="./img/machinecode.svg" 
  div-dimensions="40" 
  svg-dimensions="30"
  bg-color="transparent">
</ds-lang>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children have part attributes to allow for styling in global CSS files.
