import React from'react';

const App = () => {
    function testAddon() {
        let ret = window.NativeApi.sayHello("Hello from UI");
        console.log("native return: " + ret)
    }
    return (
        <div>
            <h1>Test Addon</h1>
            <button onClick={testAddon}>sayHello</button>
        </div>
    );
};

export default App;