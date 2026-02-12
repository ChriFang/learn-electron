const addon = require('bindings')('test');
// const addon = require('./build/Release/test.node') // 原始的加载方式
console.log(addon.getScreenSize())
