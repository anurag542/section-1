const mayarr=[23,'nice', false, undefined ];

console.log(typeof mayarr);

console.log(Array.isArray(mayarr));

const movies =['Avengers', 'Suryanasham','Ghayal', 'Mard', 'Sholey','Emoji Movie',];

//indexing
console.log(movies[2]);
console.log(movies.indexOf('Mard'));
console.log(movies.at(-2));

//slicing
console.log (movies.slice (1,4));
console.log (movies.slice(1));
console.log (movies.slice (1.,4));
console.log (movies.slice (-4,-2));

// adding and removing elements
movies.pop(); //removes last element
movies.shift(); // removes first element

console.log(movies);

movies.push('Bahubali'); // adds elements at the end
movies.unshift('MI'); // adds element at the beginning
console.log(movies);

// inserting and replacing elements 
//movies.splice (2,2);
//console.log(movies);

//movies.splice(2,2, 'Danagal', 'PK', '3 Idiots');
//console.log(movies);

movies.splice(2,0,'Dangal','PK','3Idiots');
console.log(movies);


const fruits =['Apple', 'Banana','Cherry','Date','Berry', 'Mango','Orange'];


//Add 'Grapes' to the end of the array.
 fruits push('graphs');


//Remove 'Banana' from the array.


//Replace 'cherry' with 'pineapple' using splice.


//Add 'Fig' and 'kiwi' after 'Date' using splice.



//Slice the array to get the three fruits after 'Banana'.






//Add 'watermelon' at index 0.

//Slice the array to only contain the fruits at index 3 and fruits at positions 5.


//Remove elements from the array starting from index 2 to 5.
fruits.unshift('Cherry', 'Date',);

