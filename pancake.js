/*
  ** Tanner Rigby Code Assessment
  ** I assumed that I would just be reading the input from a text file
  ** using fs.readFileSync('input.txt', 'utf8') but for this assessment I
  ** created the 'inputFromFile' variable to make things easier to read
  ** and test by pasting these functions into a React Component using ES6
*/

// This is an example of what the input would look like coming from a .txt file
const inputFromFile = '3\n+--+-\n--+\n-++-+';

// example of the how function would be called
this.pancakeRevenge(inputFromFile)

pancakeRevenge = inputFromFile => {
  const input = inputFromFile.split('\n');
  const testCases = Number(input.shift());

  let pcStackInfo = [];

  // loops through each test case
  for (let count = 0; count < testCases; count++) {
    let pcStack = input[count].split('');

    let flipCount = 0;

    // this loop will get all of the pancakes to be the same side up
    for (let x = 0; x < pcStack.length; x++) {
      if (typeof pcStack[x + 1] !== 'undefined' && pcStack[x] !== pcStack[x + 1]) {
        pcStack = this.flip(x, pcStack);
        flipCount = flipCount + 1;
      }
    }

    // if the stack is all blank sided pancakes then flip one time to make them all Happy
    if (pcStack.indexOf('+') === -1) {
      flipCount = flipCount + 1;
    }

    pcStackInfo.push(flipCount);
  }

  // Print the outputs in the console
  for (let caseNum = 0; caseNum < testCases; caseNum++) {
    console.info(`Case #${caseNum + 1}: ${pcStackInfo[caseNum]}\n`);
  }
};

flip = (pancakeNum, pcStack) => {
  const flipStack = pcStack;

  for (let x = 0; x <= pancakeNum; x++) {
    flipStack[x] = flipStack[x] === '+' ? '-' : '+';
  }

  return flipStack;
};
