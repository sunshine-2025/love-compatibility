document.getElementById('compatibility-form').addEventListener('submit', function(e) {
    // 显示加载指示器
    document.getElementById('loading-indicator').style.display = 'block';
    
    // 不需要阻止默认提交行为，因为我们已经设置了 form 的 action 和 method
    // 表单会自动提交到结果页面
}); 