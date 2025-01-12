# Platformă Online Pentru a Simula MateInfoUB, ediția I, Informatică

## Folosire

Puteți accesa platforma la adresa [https://mateinfo-ub.github.io/Simulari-Etapa-I/](https://mateinfo-ub.github.io/Simulari-Etapa-I/).

**Atenție!** Majoritatea enunțurilor din cadrul simulărilor sunt traduse folosind inteligență artificială, și nu garantăm corectitudinea lor. În cazul în care găsiți erori, vă rugăm să ne anunțați.

## Contribuție

Pentru a contribui la dezvolarea platformei, vă rugăm să îl contactați pe Theodor Moroianu.

Pentru a contribui la conținutul simulărilor, vă rugăm să deschideți un pull request cu modificările propuse.

## Structura

Aplicația este structurată ca un SPA (Single Page Application) și este scrisă în `ReactJS`.

Aplicația nu are backend, toate datele sunt statice și sunt stocate în asseturile statice servite de `Github Pages`.

Locații importante:

 * [Acest folder](public/images/) salveaza pozele incluse in problemele din etapa I a concursului.
 * [Acest folder](public/pdfs/) salveaza pdf-urile cu enunțurile etapelor concursurilor.
 * [Aici](src/data/) sunt stocate enunțurile problemelor date în etapa I a edițiilor anterioare.


## Dezvoltare

Pentru a rula aplicația în modul de dezvoltare, rulați `npm i` urmat de `npm run dev`.

Pentru a construi aplicația pentru producție, rulați `npm run build`.