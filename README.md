# BetaLang

This is the official repository for BetaLang, a language written for all the beta's out there by beta's.

## Installation

`npm i betalang`

## Setup

Run `npm init -y` to create a new project in the current directory. From there, create your JavaScript entrypoint file and import the BetaLang module using `const beta = require('betalang');`. Create a **.beta** file and write your BetaLang code. To run the code, use `node your_entrypoint_file.js` to run it locally. The first time you do this, it will prompt you with configuration steps. Follow them and a **betaconfig.json** file will be created. Now when you run the JavaScript file, your BetaLang code will run. Enjoy!

## Documentation

Read the following sections to understand how to use BetaLang.

### General

BetaLang will only run the entrypoint file listed in **betaconfig.json**. Anything outside of this file that is not imported will not be considered by the compiler.

### Syntax

| BetaLang Keyword | JavaScript Keyword |
| ---------------- | ------------------ |
| a che            | var                |
| dekho            | return             |
| jo               | if                 |
| ane              | else if            |
| nahi to          | else               |
| jyare            | while              |
| mate             | for                |
| tuto             | break              |
| sachu            | true               |
| khotu            | false              |
| nala             | null               |
| kaam             | function           |
| hoy              | ==                 |
| kadak hoy        | ===                |
| jao              | continue           |
| baki             | default            |
| kadhi nakho      | delete             |
| karo             | do                 |
| udti             | float              |
| macchara nathi   | debugger           |
| bahar jao        | export             |
| andar avo        | import             |
| tya jao          | goto               |
| ma               | in                 |
| baharni jagya    | public             |
| phenkavum        | throw              |
| sathe            | with               |
| pakadyo          | catch              |
| navu             | new                |
| koi khyal nathi  | undefined          |
| varga            | class              |
| a su che         | typeof             |

## Development

BetaLang was a fun side-project created by @VeenitXSheth and @RuntimeTerror2021 (Aaryan Soni). It will get updates occasionally and if you run into any bugs, add them to this repository and we will try and fix it as soon as possible!
