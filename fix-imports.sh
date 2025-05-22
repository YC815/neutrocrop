#!/bin/bash

# 修復相對導入路徑，添加.js或.jsx副檔名
find ./app -name "*.ts" -o -name "*.tsx" | xargs grep -l "from '\.\." | while read file; do
  # 對於所有相對導入路徑添加.js或.jsx副檔名
  sed -i '' -E "s/from '(\.\.[^']*)'/from '\1.js'/g" "$file"
  sed -i '' -E "s/from '(\.\.[^']*)\.tsx'/from '\1.js'/g" "$file"
  sed -i '' -E "s/import\((\.\.[^)]*)\.tsx\)/import\(\1.js\)/g" "$file"
done

# 更新tsconfig.json，將moduleResolution設置為bundler
cat > tsconfig.json << 'EOL'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "incremental": true,
    "module": "esnext",
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    ".next/types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
EOL

echo "修復完成，請重新啟動開發伺服器。" 