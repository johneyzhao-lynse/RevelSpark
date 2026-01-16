#!/bin/bash

# 图片优化脚本：转换为WebP并删除重复文件

set -e

IMAGE_DIR="/Users/johney/Documents/lynse/RevelSpark/public/images"
WEBP_QUALITY=85

echo "🎨 开始图片优化..."
echo "================================"

# 切换到images目录
cd "$IMAGE_DIR"

# 1. 删除重复的PNG文件（保留JPG版本）
echo "📦 步骤 1: 删除重复的PNG文件..."
if [ -f "recording-card.png" ]; then
    rm "recording-card.png"
    echo "  ✓ 删除 recording-card.png (已有JPG版本)"
fi

if [ -f "product-showcase.png" ]; then
    rm "product-showcase.png"
    echo "  ✓ 删除 product-showcase.png (已有JPG版本)"
fi

# 2. 转换PNG为WebP
echo ""
echo "📦 步骤 2: 转换PNG文件为WebP..."

find . -type f -name "*.png" | while read -r file; do
    if [[ ! "$file" =~ \.webp$ ]]; then
        webp_file="${file%.png}.webp"

        # 检查cwebp是否安装
        if command -v cwebp &> /dev/null; then
            echo "  ⚙️  转换: $file"
            cwebp -q "$WEBP_QUALITY" "$file" -o "$webp_file" -quiet

            # 如果WebP文件明显更小，删除原文件
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)

            if [ "$webp_size" -lt "$original_size" ]; then
                rm "$file"
                echo "    ✓ WebP更小 (${webp_size}字节 vs ${original_size}字节)，删除原文件"
            else
                rm "$webp_file"
                echo "    ⚠️  WebP未更小，保留原文件"
            fi
        else
            echo "  ⚠️  cwebp未安装，跳过: $file"
        fi
    fi
done

# 3. 转换JPG为WebP
echo ""
echo "📦 步骤 3: 转换JPG文件为WebP..."

find . -type f \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
    webp_file="${file%.*}.webp"

    # 检查cwebp是否安装
    if command -v cwebp &> /dev/null; then
        # 跳过已转换的文件
        if [ ! -f "$webp_file" ]; then
            echo "  ⚙️  转换: $file"
            cwebp -q "$WEBP_QUALITY" "$file" -o "$webp_file" -quiet

            # 如果WebP文件明显更小，保留WebP
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null)

            if [ "$webp_size" -lt "$original_size" ]; then
                savings=$((original_size - webp_size))
                percent=$((savings * 100 / original_size))
                echo "    ✓ 节省 ${percent}% (${savings}字节)"
            fi
        fi
    else
        echo "  ⚠️  cwebp未安装，跳过: $file"
    fi
done

# 4. 统计结果
echo ""
echo "📊 优化完成！统计信息："
echo "================================"

total_size_before=$(find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" \) -exec stat -f%z {} \; 2>/dev/null | awk '{sum+=$1} END {print sum}' || echo "0")

# 转换为MB
total_mb=$(echo "scale=2; $total_size_before / 1024 / 1024" | bc)
echo "总大小: ${total_mb} MB"

# 计数
png_count=$(find . -name "*.png" | wc -l | tr -d ' ')
jpg_count=$(find . -name "*.jpg" | wc -l | tr -d ' ')
webp_count=$(find . -name "*.webp" | wc -l | tr -d ' ')

echo "PNG文件: $png_count"
echo "JPG文件: $jpg_count"
echo "WebP文件: $webp_count"

echo ""
echo "✅ 图片优化完成！"
