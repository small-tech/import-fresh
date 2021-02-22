import path from 'path'
import test from 'tape'
import importFresh from '../index.js'

const modulePath = './fixtures/module.js'
const absoluteModulePath = path.resolve(modulePath)

test('basic', async (t) => {
  const firstRegularImport = await import(modulePath)
  const secondRegularImport = await import(modulePath)

  t.strictEquals(firstRegularImport, secondRegularImport, 'Regular imports return same value from cache')

  const firstFreshImport = (await importFresh(absoluteModulePath)).default
  const secondFreshImport = (await importFresh(absoluteModulePath)).default

  t.doesNotEqual(firstFreshImport, secondFreshImport, 'Fresh imports return different values')
})
