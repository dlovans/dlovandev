# &lt;ds-lang&gt;

`ds-lang` is a web component that displays the logo of a programming language/tool.

## Attributes

### `lang-language`
The `lang-language` represents the relative path of SVG file source (public/img). String attribute. Required.

### `lang-height`
The `lang-height` represents the height, in pixels, of the SVG div wrapper. String attibute. Optional, defaults to 50.

### `lang-width`
The `lang-width` represents the width, in pixels, of the SVG div wrapper. String attibute. Optional, defaults to 50.

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
<ds-lang lang-language="./img/machinecode.svg" lang-height="60" lang-width="60"></ds-lang>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.