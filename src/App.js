import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div>
      <h2>欢迎使用我们的契合度测试平台</h2>
      {/* 其他内容 */}
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const handleStartTest = () => {
    console.log("按钮被点击了"); // 调试信息
    navigate('/home-page'); // 使用 React Router 的导航
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

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default Main;
