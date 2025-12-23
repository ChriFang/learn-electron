import React, { useEffect, useState } from'react';
import { Line } from'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // 自动注册 Chart.js 的组件

export const RealTimeChart = () => {
  const defaultDataSize = 20;
  const [chartData, setChartData] = useState({
    labels: Array(defaultDataSize).fill(''),
    datasets: [
      {
        label: '延迟(ms)',
        data: [],
        borderColor: '#2dd4bf',
        backgroundColor: 'rgba(45, 212, 191, 0.3)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  });

  // 图表配置
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        grid: { display: false },
        position: 'right',
        reverse: true // 从右往左展示
      },
      y: {
        min: 0,
        max: 12,
        ticks: {
          stepSize: 6,
          color: '#888',
          // 自定义刻度标签，添加单位ms
          // callback: function(value, index, values) {
          //     return value +'ms';
          // }
        },
        grid: { color: 'rgba(255, 255, 255, 0.1)', drawBorder: false },
      },
    },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    animation: { duration: 0 },
  };

  // 实时更新数据
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newDelay = Math.random() * 10 + 2; // 0~12随机数
        // 大于数组最大值之后，删除第一个元素
        let newData = [newDelay, ...prev.datasets[0].data];
        if (newData.length > defaultDataSize) {
          newData = newData.slice(0, -1);
        }
        return {
          ...prev,
          datasets: [{...prev.datasets[0], data: newData }],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#1e1e2e', padding: '16px', borderRadius: '8px', color: '#fff', width: '600px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span>ⓘ 实时监控</span>
      </div>
      {/* 图表容器，设置高度 */}
      <div style={{ height: '100px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
