@echo off
set "year=%date:~0,4%"
set "month=%date:~5,2%"
set "day=%date:~8,2%"
echo %day%-%month%-%year%
xcopy site �����޸�   /D:%month%-%day%-%year% /S /R /Y 
PAUSE