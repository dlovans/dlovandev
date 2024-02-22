# &lt;ds-lang&gt;

`ds-lang` is a web component that displays the logo of a programming language/tool.

## Attributes

### `lang-img`
The `lang-img` represents the relative path of image source (public/img). String attribute. Required.

### `prog-name`
The `prog-name` represents the name of the programming language/tool in the logo. String attribute. Required.

## Example

```html
<ds-lang lang-img="./img/swift.svg" prog-name="Swift"></ds-lang>
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
<ds-lang lang-img="./img/machinecode.svg" prog-name="Machine"></ds-lang>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables.