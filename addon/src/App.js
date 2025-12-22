import React from'react';

const App = () => {
    return (
        <div>
            <h1>{window.NativeApi.sayHello("Hello from UI")}</h1>
        </div>
    );
};

export default App;