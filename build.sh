#!/bin/bash

# RevelSpark 项目打包脚本

set -e

echo "🚀 开始构建 RevelSpark 项目..."

# 检查环境
if ! command -v node &> /dev/null; then
    echo "❌ 错误: Node.js 未安装"
    exit 1
fi

echo "📦 清理旧的构建产物..."
rm -rf dist/

echo "🔨 执行生产构建..."
npm run build

echo "📊 构建完成！"
echo ""
echo "📈 构建统计:"
du -sh dist/
echo ""
echo "📁 文件分布:"
du -sh dist/* | sort -hr
echo ""
echo "✅ 构建成功！产物位于 dist/ 目录"
echo ""
echo "💡 提示:"
echo "  - 打开 dist/stats.html 查看详细的 bundle 分析"
echo "  - 使用 'docker build -t lynse-website .' 构建 Docker 镜像"
