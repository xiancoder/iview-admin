@echo off
title 请按提示输入字符！
setlocal EnableDelayedExpansion
echo.
echo   要把字符"a"替换成字符"b" 请输入a/b
echo.
set /p wkdxz= 要去掉字符a就直接输入a 
for /f "usebackq delims=/ tokens=1,2" %%b in ('%wkdxz%') do (
for %%a in (*) do (
set xz=%%a
if "%%c"=="" ren !xz! !xz:%%b=! 2>nul||ren !xz! "!xz:%%b=!(2)" 2>nul
ren !xz! !xz:%%b=%%c! 2>nul||ren !xz! "!xz:%%b=%%c!(2)" 2>nul
)
title 成功！
color 0a&cls&echo 重命名成功！
)
ping /n 3 127.1>nul