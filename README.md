## Lorem Ipsum Generator [_TypeScript_]:

Lorem Ipsum Generator is a TypeScript class to generate lorem ipsum texts in diffrent languauges(Currently Persian and English) and diffrent types **Characters**, **Words**, **Paragraphs**.

## Requirments:
This class is written in **TypeScript** and converts to regular es5 with gulp. Because of this you need these tools:
* NodeJS & NPM: Download & install from [NodeJS](http://nodejs.org)
* Gulp CLI `npm install -g gulp-cli`

## Build & Run:
to build and run LoremIpsum:
1.First download as a zip file or clone the repository
2.Run `npm install` command
3.Run `gulp` command
4.Include `dest\js\LoremIpsum.js` in your html file
5.Create an instance from `LoremIpsum` class like below

``` javascript
var lorem = new LoremIpsum();
```

## Options & Methods:

### Constructor:
only parameter of constructor is "Default Language" _persian_ or _english_ as shown below:
``` javascript
var lorem = new LoremIpsum("persian");
```

### Generate method:
Generate Method is the core of this class, that generates your lorem ipsum text in diffrent types and languages.
this method have **3** parameters:

| Name    | Default     | Values                          |
|------   |-------------|---------------------------------|
| `type`  | paragraphs  | [paragraphs, words, characters] |
| `count` | 1           | `int`                           |
| `lang`  | **persian** | [persian, english]              |

### Example:
``` javascript
var lorem = new LoremIpsum('english');
lorem.generate(); // returns an english lorem ipsum paragraph
lorem.generate('words'); // returns an english lorem ipsum word
lorem.generate('words', 50); // returns 50 persian lorem ipsum 
lorem.generate('words', 50, 'persian'); // returns 50 english lorem ipsum words
```
