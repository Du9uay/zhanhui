#!/bin/bash

# 批量替换所有文件中的紫色主题为蓝金主题

# 替换紫色相关
find src -name "*.tsx" -type f -exec sed -i '' 's/purple/blue/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/Purple/Blue/g' {} \;

# 替换粉色相关
find src -name "*.tsx" -type f -exec sed -i '' 's/pink/amber/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/Pink/Amber/g' {} \;

# 替换indigo色相关 (改为teal)
find src -name "*.tsx" -type f -exec sed -i '' 's/indigo/teal/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/Indigo/Teal/g' {} \;

# 替换violet色相关
find src -name "*.tsx" -type f -exec sed -i '' 's/violet/blue/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/Violet/Blue/g' {} \;

echo "颜色主题更新完成！"