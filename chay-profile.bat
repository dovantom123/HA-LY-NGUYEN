@echo off
cd /d "%~dp0"
echo Profile dang chay tai http://localhost:8080
echo Nhan Ctrl+C de dung.
start "" http://localhost:8080
python -m http.server 8080
