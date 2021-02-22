// Import a fresh (uncached) version of an EcmaScript Module (ESM)
// using a cache-busting path.
export default async function importFresh (absolutePathToModule) {
  const cacheBustingModulePath = `${absolutePathToModule}?update=${Date.now()}`
  return await import(cacheBustingModulePath)
}
