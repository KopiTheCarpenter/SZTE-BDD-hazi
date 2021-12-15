# Házi feladat


## A project futtatása
A project futtatásának előfeltétele, hogy legyen telepítve NodeJS és Git a gépedre.
Az alábbi linkeken elérhetők a NodeJS telepítők:
https://nodejs.org/en/download/

A telepítés után a `node -v` és az `npm -v` parancsok segítségével tudjátok ellenőrizni, nhogy milyen `node` illetve `npm` verziók települtek.

A project clone-ozása (`git clone git@github.com:Porter84/cypress-tutorial.git`) után a `yarn install` vagy `npm install` parancsok segítségével telepítsétek a `package.json` fájlban leírt függőségeket, majd az `npx cypress open` paranccsal futtatható. Ekkor elindul a Cypress desktop App, ahol a BDD scenario-ra duplán kattintva futtathatóak az egyes scenariók.

## Beadandó feladatok
Készíts további legalább tíz darab BDD Scenariot egy általad válaszott weboldalhoz, majd készítsd el a hozzá tartozó Cypress teszteket az órán megbeszéltek alapján.

A cypress teszteket a `cypress/integration/common/stepDefinitions/commonSteps.js` fájlba tudod implementálni, az ott látható példáknak megfelelően. A BDD Gerkin scenáriókat a `cypress/integration/features/UI/bdd-demo.feature` fájlba tudod felvenni az ott található példák alapján.

A feladat célja, hogy próbáld ki magad is a BDD technológiát.

## Beadás formátuma
Az elkészített projectet töltsd fel a saját github profilodra, majd oszd meg a linket coospace-en. Ne felejts el public repot használmni a feladat elkészítése során.  

## További információk
 - Cypress: https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress
 - Gherkin: https://cucumber.io/docs/gherkin/
