import React from 'react';
import './App.css';

function App() {
  const handleStartTest = () => {
    window.location.href = 'home-page/index.html'; // 跳转到首页
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>欢迎来到爱情兼容性测试网站</h1>
        <p>在这里，你可以测试你和另一半的兼容性！</p>
        <button onClick={handleStartTest}>开始测试</button> {/* 添加开始测试按钮 */}
      </header>
    </div>
  );
}

export default App;
