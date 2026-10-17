@echo off
setlocal

rem --------------------------------------------------------------
rem Esportazione database MySQL/MariaDB XAMPP
rem --------------------------------------------------------------

cd /d %~dp0

SET /P nomedb=Inserire il nome del database da esportare: 

if "%nomedb%"=="" (
    echo.
    echo Nessun nome database inserito.
    pause
    exit /b 1
)

echo.
echo Esportazione del database "%nomedb%" in corso...
echo.
echo Alla richiesta della password inserire quella dell'utente root.
echo (Premere INVIO se root non ha password)
echo.

rem --------------------------------------------------------------
rem Esportazione database
rem --------------------------------------------------------------

.\xampp\mysql\bin\mysqldump.exe -u root -p --routines --triggers --events "%nomedb%" > "%nomedb%_tmp.sql"

if errorlevel 1 (
    echo.
    echo ERRORE: esportazione fallita.
    del /Q "%nomedb%_tmp.sql" 2>nul
    pause
    exit /b 1
)

rem --------------------------------------------------------------
rem Creazione file SQL completo
rem --------------------------------------------------------------

echo -- Progettazione Web > "%nomedb%.sql"
echo -- Database esportato il %date% %time% >> "%nomedb%.sql"
echo. >> "%nomedb%.sql"

echo DROP DATABASE IF EXISTS `%nomedb%`; >> "%nomedb%.sql"
echo CREATE DATABASE `%nomedb%`; >> "%nomedb%.sql"
echo USE `%nomedb%`; >> "%nomedb%.sql"
echo. >> "%nomedb%.sql"

type "%nomedb%_tmp.sql" >> "%nomedb%.sql"

del /Q "%nomedb%_tmp.sql"

echo.
echo --------------------------------------------------------------
echo Esportazione completata correttamente.
echo File creato:
echo %nomedb%.sql
echo --------------------------------------------------------------

pause

endlocal