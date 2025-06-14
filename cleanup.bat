@echo off
echo Performing nuclear cleanup...

REM Kill any running node processes
taskkill /f /im node.exe 2>nul

REM Remove directories
if exist node_modules rmdir /s /q node_modules
if exist .next rmdir /s /q .next
if exist dist rmdir /s /q dist
if exist build rmdir /s /q build
if exist .cache rmdir /s /q .cache
if exist .turbo rmdir /s /q .turbo

REM Remove files
if exist package-lock.json del package-lock.json
if exist yarn.lock del yarn.lock

REM Clear npm cache
npm cache clean --force

echo Cleanup complete. Run 'npm install' to reinstall dependencies.
pause
