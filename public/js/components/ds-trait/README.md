# &lt;ds-trait&gt;

`ds-trait` is a web component that displays the qualities of the owner.

## Attributes

### `ds-traits`
The `ds-traits` attribute represents the qualities of the owner.
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Entrepreneurish&#13;Autonomous&#13;Creative&#13;Resiliant`
- **Note:** Use `&#13;` as delimiter/newline <strong>between</strong> each word.


## Example

`Note: "&#13;" is not visible in Markdown Preview.`
```html
<ds-trait
    ds-traits="Entrepreneurish&#13;Autonomous&#13;Creative&#13;Resiliant">
</ds-trait>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-trait.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-trait/ds-trait.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-trait
        ds-traits="Entrepreneurish&#13;Autonomous&#13;Creative&#13;Resiliant">
</ds-trait>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. Shadow DOM children have `part` attributes to allow for styling outside component.
