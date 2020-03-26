# Element Block Starter Project

Scaffolding code used by the [Volusion Element CLI](https://github.com/volusion/element-cli) to create new blocks

## Why

We use this repo to provide a common starting point for all blocks. Good news -- you shouldn't have to deal with this directly!

## How

From the Element CLI, run `element new <BlockDirectoryName>` and that tool will take care of the rest!

## Development

### Setup

To ensure we're all using the same version of Node.js while developing, please use either [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) to install the project's [Node.js version](/.node-version), and then install [AVN](https://github.com/wbyoung/avn):

```bash
# If you're managing Node versions with NVM:
npm install -g avn avn-nvm

# If you're managing Node versions with n:
npm install -g avn avn-n
```

Then, set up AVN with

```bash
avn setup
```

After you have AVN setup, run the following commands to get started:

```bash
npm install
npm start
```

As a developer, if you've made changes to your already-published block, you may need to update the unit test snapshot by running the following command:

```bash
npm test -- -u
```

You can also run a watch task that will automatically run your tests any time you make a change to your code:

```bash
npm test
```

## Deployment

### Compiling

If you have made changes to your block code, you'll need to recompile your code locally. **This command should be done every time you run one of the below `element` commands.**

```bash
npm run build
```

### Initial publishing

If this is the very first time you're pushing your block up, you will need to run the command below (including the quotes):

```bash
npm run build && element publish -n "<Your Displayed Block Name>"
```

-   At this point, your block is in a "staging" state. You can preview your block in Site Designer and on the storefront through the Preview link in Site Designer, but it will not be visible on the live site.

### Minor updates

After your block has been published the first time, if you are making a minor version change (like a bug fix):

```bash
npm run build && element update
```

-   At this point, your block is in a "staging" state. You can preview your changes in Site Designer and on the storefront through the Preview link in Site Designer, but they will not be visible on the live site.

### Major updates

If you have a breaking change that you need to make, you can use the below command. Before taking this step, we recommend you create a new branch from master for your old version block code in case you ever need to go back to make minor updates again.

```bash
npm run build && element publish -m
```

-   At this point, your block is in a "staging" state. You can preview your changes in Site Designer and on the storefront through the Preview link in Site Designer, but they will not be visible on the live site.
-   If you need to make additional updates after this point, you can use the `npm run build && element update` command to stage your changes.
-   Major updates will will require a manual opt-in from users in order to upgrade from the old version to the new one after release. Any new instances of the block that are dropped into the page will automatically use the latest version.

### Releasing to production

Once you have completed your QA process on your block updates in Site Designer and the Preview link, you can release your code to production using the below command. **If you have made minor updates only (you have NOT run `element publish -m`), these changes will immediately take effect on the live site.**

```bash
element release
```

## Code of Conduct

Though we are not accepting contributions for this repo at the moment, we still have a [Code of Conduct](./CODE_OF_CONDUCT.md) in place.

## License

&copy; 2018 onwards by Volusion
[MIT License](./LICENSE)
