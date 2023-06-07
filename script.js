


// Filter

const names = ["Dima", "Alice", "Anna", "Maria"];

const shortNames = names.filter(function(name){
  return name.length < 5;
});

console.log(shortNames);

// Map

const answers = ['DiMa', "AnNa", "AlIcE" ];

const result = answers.map((name) => {
     // console.log(name);
      return name.toLowerCase();
});

console.log(result);


// Every / Some

const some = [4, "qwerty", "string"];

/*

console.log(some.some((el) => {
  return typeof(el) === 'number';
}));

*/

console.log(some.every((el) => {
  return typeof(el) === 'number';
}));

const numArr = [1, 2, 3];

console.log(numArr.every((el) => {
  return typeof(el) === "number";
}));



// Reduce

/*

const arr = [10, 20, 30, 40, 50, 60];

const res = arr. reduce((sum, current) => {
  console.log(sum, current);
  return sum + current
});

console.log(`Sum equals ${res}`);

*/


// Reduce for string

const arr = ["apple", "pear", "plum"];

const res = arr. reduce((sum, current) => {
  //console.log(sum, current);
  return `${sum} , ${current}`;
});

console.log(`Sum equals ${res}`);
