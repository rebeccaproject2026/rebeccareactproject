@echo off
echo Restarting Rebecca React App...
echo.
cd /d "%~dp0"
taskkill /f /im node.exe 2>nul
timeout /t 2 /nobreak >nul
npm run dev
pause