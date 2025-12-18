import React from'react';


const App = () => {
    function showNotification() {
        console.log("click show notification button")
        window.IPC.showNotification({
            title: '新消息',
            body: '您有一条未读通知',
            id: Date.now()
        })
    }

    function hideNotification() {
        console.log("click hide notification button")
        window.IPC.hideNotification()
    }

    return (
        <div>
            <h1>Test custom notification window</h1>
            <button id="show-notification-btn" onClick={showNotification}>发送通知</button>
            <button id="hide-notification-btn" onClick={hideNotification}>关闭通知</button>
        </div>
    );
};

export default App;