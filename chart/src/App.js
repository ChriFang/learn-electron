import React from 'react';
import { RealTimeChart } from './component/RealTimeChart'
//import { LineChart } from './component/LineChart'

const App = () => {
    return (
        <div>
            <h1>曲线图</h1>
            <RealTimeChart />
        </div>
    );
};

export default App;