# @scalable/reactgen

TypeScript Code Generator for React components, Redux and more done right.

## Installation

* `npm install @scalable/reactgen --save-optional`

## Usage

Most of the commands should be executed in the folder where the target should be created.

### Stateless Functional Components

```bash
npx schematics @scalable/reactgen:sfc <ComponentName> [parameter]
```

#### Parameters
| Type | Name | Description | Default |
|------|:----:|------------:|--------:|
| *required* {string} | name | The name of the component. | none |
| {string} | path | The path to create the component | none |
| {boolean} | subfolder | Flag to indicate if a dir is created | true |


### Credit

This project is inspired by [schematics-react](https://www.npmjs.com/package/schematics-react)
