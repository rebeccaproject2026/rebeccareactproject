@echo off
echo Checking Rebecca React App Status...
echo.

echo Testing build process...
npm run build

echo.
echo Build successful! Starting development server...
echo.
npm run dev

pause