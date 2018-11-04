/**
 * validate the expected values for sorting param
 * @param {string} sorting The sorting param
 * @return {boolean} Weither the sort param is correct or not
 */
const validateSortingParam = (sorting) => {
  const allowedSorting = ['asc', 'desc'];

  if (!allowedSorting.includes(sorting)) {
    throw new Error('Sorting param not allowed (use asc or desc)');
  }
  return true;
};

/**
 * split string into a words array
 * @param {string} text The first number to add.
 * @return {array} Array of string with words
 */
const extractWords = (text) => {
  // clean the text
  let wordsArray = text.trim().toLowerCase();
  // remove non alphanumeric characters and cut by words
  wordsArray = wordsArray.replace(/[^\w\s]|_/g, ' ').split(/\s+/);
  // only keep words with length > 2
  return wordsArray.filter(word => word.length > 2);
};

/**
 * create a map of words
 * @param {array} wordsArray The array of string
 * @return {object} Map object
 */
const wordsArrayToMap = (wordsArray) => {
  const wordsMap = {};
  // weither increment or create a new word object
  wordsArray.forEach((word) => {
    if (Object.prototype.hasOwnProperty.call(wordsMap, word)) {
      wordsMap[word] += 1;
    } else {
      wordsMap[word] = 1;
    }
  });
  return wordsMap;
};

/**
 * create an array of words object
 * @param {object} wordsMap The map object
 * @return {array of object} The array of words objects
 */
const wordsMapToArray = (wordsMap) => {
  const wordsArray = [];

  Object.keys(wordsMap).forEach((word) => {
    wordsArray.push({
      name: word,
      amount: wordsMap[word],
    });
  });
  return wordsArray;
};

const prepareWordsArray = (text) => {
  const words = extractWords(text);
  const wordsMap = wordsArrayToMap(words);
  const wordsArray = wordsMapToArray(wordsMap);

  return wordsArray;
};


class WordsCounter {
  constructor(text) {
    this.wordsArray = prepareWordsArray(text);
  }

  countWords() {
    return this.wordsArray;
  }

  countWord(word) {
    if (!word) {
      throw new Error('Word param not found');
    }

    const matchingWord = this.wordsArray.find(elem => elem.name === word);

    if (!matchingWord) {
      return 0;
    }
    return matchingWord.amount;
  }

  sortByName(sorting = 'asc') {
    validateSortingParam(sorting);

    const sortedArray = this.wordsArray.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });

    if (sorting === 'asc') {
      return sortedArray;
    }
    return sortedArray.reverse();
  }

  sortByAmount(sorting = 'asc') {
    validateSortingParam(sorting);

    return this.wordsArray.sort((a, b) => {
      if (sorting === 'asc') {
        return a.amount - b.amount;
      }
      return b.amount - a.amount;
    });
  }
}

module.exports = WordsCounter;
