# WordsCounter

Library counting the amount of same words in a text.

## Install

```
npm install @seyaa/wordscounter
```

### Instanciation
```
const WordsCounter = require("@seyaa/wordscounter");

const countedWords = new WordsCounter('ttt aaaa ccc ccc ccc cccc bbb aaaa bb');
```

### Methods
- countWords
- countWord
- sortByName
- sortByAmount

#### countWords
```
countedWords.countWords()

[ { name: 'ttt', amount: 1 },
  { name: 'aaaa', amount: 2 },
  { name: 'ccc', amount: 3 },
  { name: 'cccc', amount: 1 },
  { name: 'bbb', amount: 1 } ]
```

#### countWord
```
countedWords.countWord('ccc')

3
```

#### sortByName (asc|desc) default [asc]
```
countedWords.sortByName()

[ { name: 'aaaa', amount: 2 },
  { name: 'bbb', amount: 1 },
  { name: 'ccc', amount: 3 },
  { name: 'cccc', amount: 1 },
  { name: 'ttt', amount: 1 } ]
```

#### sortByAmount (asc|desc) default [asc]
```
countedWords.sortByAmount()

[ { name: 'ttt', amount: 1 },
  { name: 'cccc', amount: 1 },
  { name: 'bbb', amount: 1 },
  { name: 'aaaa', amount: 2 },
  { name: 'ccc', amount: 3 } ]
```

#### Possible future features
- Accept a filename instead of a string for the text.
- Accept an array of words in the countWords method to only count specific words. 

#### Time spent for this achievement
- 3 hours

