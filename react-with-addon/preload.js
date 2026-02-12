/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge } = require("electron");

try {
  const addon = require('./addon/build/Release/addon.node');

  contextBridge.exposeInMainWorld('NativeApi', {
    sayHello: (message) => {
      return addon.sayHelloCpp(message);
    }
  });
  console.log("C++ Addon loaded successfully in preload script.");
} catch (err) {
  console.error("Failed to load C++ Addon:", err);
}
