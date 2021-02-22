////////////////////////////////////////////////////////////////////////////////
// Import a fresh, uncached, version of an EcmaScript Module
// (ESM; aka ES6 module/JavaScript Module) using a cache-busting path.
//
// Note that the path specified has to be absolute.
//
// Copyright © 2021 Aral Balkan, Small Technology Foundation
// Released under the open source MIT license.
//
////////////////////////////////////////////////////////////////////////////////

export default async function importFresh (absolutePathToModule) {
  const cacheBustingModulePath = `${absolutePathToModule}?update=${Date.now()}`
  return await import(cacheBustingModulePath)
}
