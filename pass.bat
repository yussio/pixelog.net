@echo off
set /p length=10:
set /p ask=3
powershell -NoProfile -ExecutionPolicy Unrestricted -Command "& { switch ("%ask%") {"1" {$characters='123456789'}"3" {$characters='abcdefghkmnprstuvwxyzABCDEFGHKLMNPRSTUVWXYZ123456789'}"4" {$characters='abcdefghkmnprstuvwxyzABCDEFGHKLMNPRSTUVWXYZ123456789!$^&/()=?*+#_'}}; -join ${characters}[(1..%length% | ForEach-Object { Get-Random -Maximum ${characters}.length })] }"
pause
