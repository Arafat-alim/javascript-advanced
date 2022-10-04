//! Removing the duplicates word in an array using reduce method

function removeDuplicate(wordArr) {
  return wordArr.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : [...acc, curr];
  }, []);
}

const arr = ["one", "two", "one", "two", "three", "four"];
console.log(removeDuplicate(arr)); //[ 'one', 'two', 'three', 'four' ]
