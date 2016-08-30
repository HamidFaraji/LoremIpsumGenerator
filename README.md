## Lorem Ipsum Generator [_TypeScript_]:

Lorem Ipsum Generator is a TypeScript class to generate lorem ipsum texts in diffrent languauges(Currently Persian and English) and diffrent types **Characters**, **Words**, **Paragraphs**.

## Requirments:
This class is written in ** TypeScript ** and converts with gulp. Because of this you need these tools:
* NodeJS & NPM Download & install from [NodeJS](http://nodejs.org)
* Gulp CLI ``` npm install -g gulp-cli ```

## Build & Run:
to build and run LoremIpsum:
1.First download or clone repository
2.Run ``` npm install ``` command
3.Run ``` gulp ``` command
4.Include ``` dest\js\LoremIpsum.js ``` in your html file
5.Create an instance from ``` LoremIpsum ``` class like below

``` js
var lorem = new LoremIpsum();
```

## Options & Methods:

### Constructor:
only parameter of constructor is "Default Language" _persian_ or _english_ as shown below:
``` js
var lorem = new LoremIpsum("persian");
```

### Generate Method:
Generate Method is the core of this class, that generates your lorem ipsum text in diffrent types and languages.
this method have **3** parameters:
* type: __paragraphs__, __words__, __characters__ (Default: __paragraphs__)
* count: integer number (Default: 1)
* lang: __persian__, __english__ (Default: __defualt language pass in constructor or persian__)

### Example:
``` js
var lorem = new LoremIpsum('english');
lorem.generate(); // returns an english lorem ipsum paragraph
lorem.generate('words'); // returns an english lorem ipsum word
lorem.generate('words', 50, 'persian'); // returns 50 english lorem ipsum words
```
