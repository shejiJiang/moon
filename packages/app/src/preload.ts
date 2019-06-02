/**
 * @desc
 *
 * @使用场景
 *
 * @company qianmi.com
 * @Date    2019/6/2
 **/

import  { ipcRenderer }  from 'electron';
console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')


process.once('loaded', () => {

  const _setImmediate = setImmediate;
  const _clearImmediate = clearImmediate;

  global.setImmediate = _setImmediate
  global.clearImmediate = _clearImmediate

// the host page will have access to `window.readConfig`,
// but not direct access to `readFileSync`
})



//@ts-ignore
window.readConfig = function () {
  ipcRenderer.send('asynchronous-message', 'ping')
}

