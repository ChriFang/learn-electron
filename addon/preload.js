/**
 * The preload script runs before `index.html` is loaded
 * in the renderer. It has access to web APIs as well as
 * Electron's renderer process modules and some polyfilled
 * Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge } = require("electron");
//const bindings = require('bindings');

try {
  //const addon = bindings('./addon/build_Win32/Release/addon.dll');
  const addon = require('./addon/build_x64/Release/addon.dll');

  contextBridge.exposeInMainWorld('NativeApi', {
    sayHello: (message) => {
      return addon.sayHelloCpp(message);
    }
  });
  console.log("C++ Addon loaded successfully in preload script.");
} catch (err) {
  console.error("Failed to load C++ Addon:", err);
}
