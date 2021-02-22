# @small-tech/import-fresh

Import a fresh, uncached version of an EcmaScript Module (ESM).

## Syntax

```js
importFresh(absolutePathToModule)
```

## Example

In _module.mjs_:

```js
export default (() => Math.random())
```

In _index.mjs_:

```js
import path from 'path'
import importFresh from '@small-tech/importFresh'

console.log((await importFresh(path.resolve('./module.mjs'))).default)
console.log((await importFresh(path.resolve('./module.mjs'))).default)
```

Run _index.mjs_ and note that you see two different random numbers.

## Do you need this module?

Before you just `npm install` this, ask yourself if you really need it.

If you’re only going to use this in one place, you can cache bust using a single line of vanilla JavaScript:

e.g.,

```js
const myModule = await import(`./my-module?update=${new Date()}`)
```

(Bonus: you won’t have to use absolute paths.)

And if you want to use it from several places in the same file, you can just make a simple function:

```js
function importFresh(modulePath) {
  return await import(`${modulePath}?update=${new Date()}`)
}
```

The only time this module really saves you any work is if you need this functionality from multiple files within your project.

So evaluate whether you need to use it and save a dependency if you don’t.

## Like this? Fund us!

[Small Technology Foundation](https://small-tech.org) is a tiny, independent not-for-profit.

We exist in part thanks to patronage by people like you. If you share [our vision](https://small-tech.org/about/#small-technology) and want to support our work, please [become a patron or donate to us](https://small-tech.org/fund-us) today and help us continue to exist.

## Copyright

&copy; 2021 [Aral Balkan](https://ar.al), [Small Technology Foundation](https://small-tech.org).

## License

[MIT](https://opensource.org/licenses/MIT)
