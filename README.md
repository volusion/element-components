# Components for the Volusion Element platform

The components in this repository are injected by default into all Element blocks. This lets users
configure their components globally across all theme pages.

### Button
Button component allows for both a `Primary` and `Secondary` button, in either a `button` or `link` tag. Both config specs are the same. 

### Button config spec

| Prop Name     | Options | Default Value | Site Designer Enabled |  Description |
| ------------- | ------- | ------------- | ------------------------ |  ----------- |
| `className`  | string | `''` | `false` | allows for passing classes to component to extend current classes |
| `buttonStyle`  | `'Primary'` or `'Secondary'` | `'primary'` | `false` |  Use `primaryButtonStyles` or `secondaryButtonStyles` |
| `href`  | string | `''` | `false` | passing `href` as a prop will cause the component to render as an anchor tag |
| `textColor`  | string | `'#333'` | `true` | button text color |
| `hoverTextColor`  | string | `'#333'` | `true` | button text hover color |
| `backgroundColor`  | string | `'#333'` | `true` | button background color |
| `hoverBackgroundColor`  | string | `'#333'` | `true` | button background hover color |
| `borderColor`  | string | `'#333'` | `true` | button border color |
| `hoverBorderColor`  | string | `'#333'` | `true` | button border color |
| `fontWeight`  | `'300', '400', '500', '600', '700', '800', '900'` | `'700'` | `true` | button font weight |
| `textTransform`  | `'none', 'capitalize', 'lowercase', 'uppercase'` | `none` | `true` | button text transform |
| `borderThickness`  | `'basic', 'thin', 'thick', 'none'` | `basic` | `true` | button border thickness |
| `size`  | `'small', 'medium', 'large', 'block'` | `medium` | `true` | button size |
| `rounded`  | `'none', 'small', 'medium', 'large','pill'` | `none` | `true` | button round corners |
| `growOnHover`  | `true` or `false` | `false` | `true` | button round corners |


## Development

```bash
npm install
npm run watch
```

Open up the component's `index.html` in any browser. 

To add a new component, simply drop a new folder in the `src` directory with the desired name, and use
the existing components as a guide.

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/volusion/element-proptypes/tags).

### Deployment

`npm run release`

## Contributing

We're very excited that you're interested in contributing! At present, we are already accepting issues and PR. We do already have a [Code of Conduct](CODE_OF_CONDUCT.md) in place.

## Code of Conduct

Though we are not accepting contributions for this repo at the moment, we still have a [Code of Conduct](./CODE_OF_CONDUCT.md) in place.

## License

&copy; 2018 onwards by Volusion
[MIT License](./LICENSE)
