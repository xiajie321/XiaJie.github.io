# 遇到错误时停止
$ErrorActionPreference = "Stop"

Write-Host "Building project..."
npm run build

Write-Host "Navigating to dist directory..."
Set-Location dist

Write-Host "Initializing Git..."
git init
git checkout -b gh-pages
git add -A
git commit -m "deploy"

Write-Host "Pushing to GitHub..."
# 使用 -f 强制推送，覆盖远程 gh-pages 分支
git push -f https://github.com/xiajie321/XiaJie.github.io.git gh-pages

Set-Location ..
Write-Host "Deployment complete!"
