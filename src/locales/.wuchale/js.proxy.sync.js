
            import * as _w_c_js_0_ from './main.main.de.compiled.js'
import * as _w_c_js_1_ from './main.main.en.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {de: _w_c_js_0_,en: _w_c_js_1_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['js']
        