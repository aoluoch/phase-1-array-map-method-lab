const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // Use map() to iterate through each tutorial title
  return tutorials.map(tutorial => {
    // Split the title into individual words
    let words = tutorial.split(' ');

    // Capitalize the first letter of each word and join them back into a string
    let titleCasedWords = words.map(word => {
      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return titleCasedWords.join(' ');
  });
}

// Call the function and log the result to see the title-cased tutorial names
console.log(titleCased());


