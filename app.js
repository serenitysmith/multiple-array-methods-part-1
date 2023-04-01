var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

// You should use multiple array methods to solve these problems. Don't use `for` loops!

// 1. Returns a list of everyone older than 18, which is
// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element.

function sortedOfAge(arr) {
  const people = arr
    .filter(function (person) {
      if (person.age > 18) {
        return person;
      }
    })
    .sort(function (a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 0;
      }
    })
    .reduce(function (accumulator, currentValue) {
      accumulator.push(
        `<li>${currentValue.firstName} ${currentValue.lastName} ${currentValue.age}</li>`
      );
      return accumulator;
    }, []);
  return people;
}
console.log(sortedOfAge(peopleArray));

// - Create another array of one or more individuals and add it to the original array.

const females = [
  {
    name: "serenity",
  },
  {
    name: "mel",
  },
  {
    name: "mary",
  },
];
peopleArray.push(females);
console.log(peopleArray);

// - Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.


// ```javascript
const people = [
  { firstNames: 'John', lastNames: 'Doey' },
  { firstNames: 'Jane', lastNames: 'Doey' },
  { firstNames: 'Michael', lastNames: 'Jones' },
  { firstNames: 'Sarah', lastNames: 'Dalla' },
  { firstNames: 'David', lastNames: 'Brown' },
];

const filteredPeople = people.filter(({ lastNames }) => !lastNames.endsWith('y') && !lastNames.endsWith('a'));

console.log(filteredPeople);




// In this example, we're using object destructuring to extract the `lastNames` property from each object in the `people` array. We then use the `endsWith()` method to check if the last name ends with the letters "y" or "a", and filter out those people whose last name ends with those letters. The resulting filtered array is saved into `filteredPeople`.
  
  
 

// const movies = [
//     { name: "movie1", genre: "horror" },
//     { name: "movie2", genre: "action" },
//     { name: "movie3", genre: "action" },
//     { name: "movie4", genre: "fantasy" },
//   ];
//   const act = movies.filter(function (mov) {
//     if (mov.genre === "horror") {
//       return true;
//     }
//   });
  
//   console.log(act);
  



// - Remove the second individual from the array.

const removed = people.filter(function(start, finish){
    return finish !== 1;
})
console.log(removed)



// - Return the array in reverse order.
// const names = ['serenity', 'michael', 'john', "jaden", 'romeo']

// names.sort(function(a, b){
// return b.length - a.length;
// })


// console.log(names)

const names = ['serenity', 'michael', 'john', "jaden", 'romeo'];
names.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
  return 0;
});
console.log(names);