import React from 'react';
import { electron } from 'webpack';

const App = () => {
    const triggerNotification = () => {
        // electron.notificationApi.sendNotification('My custom message!');
    };
    return (
        <>
            <div>Who are you? chee</div>
            <button onClick={triggerNotification}>push notification</button>
        </>
    );
};

export default App;
