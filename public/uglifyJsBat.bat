@echo off
:: 设置压缩JS文件的根目录，脚本会自动按树层次查找和压缩所有的JS
::（注意路劲中不能有空格）
SET JSFOLDER=./
echo 'find Js file ing...'
chdir /d %JSFOLDER%
for /r . %%a in (*.js) do (
    @echo doRar file %%~a ...
    uglifyjs %%~fa -m -o %%~fa
)
echo done!
pause & exit