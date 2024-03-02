# BetaLang

This is the official repository for BetaLang - a language written for all the betas out there, by betas.

## Installation

`npm i betalang`

## Setup

Run `npm init -y` to create a new project in the current directory. From there, create your JavaScript entrypoint file and import the BetaLang module using `const beta = require('betalang');`. Create a **.beta** file and write your BetaLang code. To run the code, use `node your_entrypoint_file.js` to run it locally. The first time you do this, it will prompt you with configuration steps. Follow them and a **betaconfig.json** file will be created. Now when you run the JavaScript file, your BetaLang code will run. Enjoy!

## Documentation

Read the following sections to understand how to use BetaLang.

### General

BetaLang will only run the entrypoint file listed in **betaconfig.json**. Anything outside of this file that is not imported will not be considered by the compiler.

### Syntax

| BetaLang            | JavaScript |
| ------------------- | ---------- |
| a che               | var        |
| a che j             | const      |
| a ne raheva do      | let        |
| kaam                | function   |
| pacho jao           | return     |
| jo                  | if         |
| ane jo              | else if    |
| nahi to             | else       |
| pacha pharo         | default    |
| badli karo          | switch     |
| prasang             | case       |
| kadhi nakho         | delete     |
| karo                | do         |
| jyare               | while      |
| mate                | for        |
| tuto                | break      |
| jao                 | continue   |
| ma                  | in         |
| sachu               | true       |
| khotu               | false      |
| nala                | null       |
| khabar nathi        | undefined  |
| su che              | typeof     |
| hoy                 | \==        |
| hoy j               | \===       |
| na hoy              | !=         |
| na j hoy            | !==        |
| ochu                | <          |
| ochu hoy            | <=         |
| motu                | \>         |
| motu hoy            | \>=        |
| ane                 | &&         |
| athava              | ||         |
| nathi               | !          |
| phenko              | throw      |
| prayatna karo       | try        |
| pakad               | catch      |
| Bhul                | Error      |
| bahar jao           | export     |
| andar avo           | import     |
| navu                | new        |
| varga               | class      |
| a                   | this       |
| uttam               | super      |
| ni shakti che       | \*\*       |
| ne                  | +          |
| baad karo           | \-         |
| guni nakho          | \*         |
| bhagi nakho         | /          |
| baki                | %          |
| ne add karo         | +=         |
| ne baad karo        | \-=        |
| ne guni nakho       | \*=        |
| ne bhagi nakho      | /=         |
| ma thi baki hoy     | %=         |
| ne shakti aapo      | \*\*=      |
| ne ek thi moto karo | ++         |
| ne ek thi nano karo | \--        |
| vaat chhe           | //         |
| moti vaat chhe      | /\*        |
| vaat pati gayi      | \*/        |

## Development

BetaLang was a fun side-project created by @VeenitXSheth and @RuntimeTerror2021 (Aaryan Soni). It will get updates occasionally and if you run into any bugs, add them to this repository and we will try and fix it as soon as possible!
