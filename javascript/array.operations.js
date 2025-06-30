const arr1 = [ 5, 8 , 2 ,1, 6, 4];

for (let n of arr1) {
    console.log(n*2);


}

console.log ('--------------'); 


arr1.forEach((n) =>{
    console.log(n*n);
});
 
console.log ('-------------');
  
arr1.forEach((n) =>{
    if(n%2 !==0 ){
        console.log(n);
    }
});


const newarr = [];
arr1.forEach ((n) => {
    newarr.push(n *n);
});

console.log(newarr);
