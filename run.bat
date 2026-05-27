@echo off
title Servidor Local LANA - Projeto CRIAR
echo Iniciando o servidor local para evitar restricoes de CORS...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
