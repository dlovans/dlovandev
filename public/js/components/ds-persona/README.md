# &lt;ds-persona&gt;

`ds-persona` is a web component that provides a short description about the owner of this portfolio, and a downloadable document.

## Attributes

### `ds-heading`
The `ds-heading` attribute represents the title of the ds-persona component, a heading. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Resume`

### `ds-paragraphs`
The `about-paragraphs` attribute represents the main text of the ds-persona component. Use `&#10;` as delimiter to separate into paragraph elements. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `Was it difficult to choose between web and mobile app development?`

### `ds-document`
The `ds-document` attribute represents the relative path to a downloadable document. Options:
- **Attribute Type:** `string`
- **Optional:** `true`
- **Defaults to:** `../../documents/resume.docx`

## Example

```html
<ds-persona
        ds-heading="Dev"
        ds-paragraphs="Hello world.&#10;Hello universe!"
        ds-document="./public/documents/cv-dlovan.docx">
</ds-persona>
```

## Usage

#### 1. To use this web component, import the module, then use JavaScript DOM methods:

```javascript
import './ds-persona.comp.js'
```

#### 2. Or load the module and use the component declaratively in HTML:

```html
<script type="module" src="../components/ds-persona/ds-persona.comp.js"></script>
```

###### Continue in HTML:

```html
<ds-persona></ds-persona>
```

## Styling
The component uses the shadow DOM, so it can be styled using CSS variables. A shadow DOM child can be styled with `part` attribute. Component has a `<slot>` tag that allows for insertion of regular DOM objects.