@echo off
title �밴��ʾ�����ַ���
setlocal EnableDelayedExpansion
echo.
echo   Ҫ���ַ�"a"�滻���ַ�"b" ������a/b
echo.
set /p wkdxz= Ҫȥ���ַ�a��ֱ������a 
for /f "usebackq delims=/ tokens=1,2" %%b in ('%wkdxz%') do (
for %%a in (*) do (
set xz=%%a
if "%%c"=="" ren !xz! !xz:%%b=! 2>nul||ren !xz! "!xz:%%b=!(2)" 2>nul
ren !xz! !xz:%%b=%%c! 2>nul||ren !xz! "!xz:%%b=%%c!(2)" 2>nul
)
title �ɹ���
color 0a&cls&echo �������ɹ���
)
ping /n 3 127.1>nul