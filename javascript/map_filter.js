const arr1 =[ 3, 5,7, 9, 2, 6];

 const newArr = arr1.map( (n) => {
    return n*2;
})

console.log(newArr); 
 
const names = [ 'Avinash', 'Vishal','Farhan','Upendra','Sameer'];

const newNames = names.map((name) =>{
    return 'Mr. ' + name;

});

console.log(newNames);
 
const names1 =[ 'Anurag', ' Vishal', 'Upendra', 'Sameer'];
 const upperNames = names1.map((name) =>{
    return name.toUpperCase();

     });

 console.log(upperNames);


 const prices = ['₹243.53', '₹28.523', '₹194.9', '₹188.999'];

//[243, 28, 194, 188]


console.log(parseInt('₹243.53'.slice(1)));

const priceNumbers =prices.map((price) => {
    return (parseInt(price.slice(1)));
});

//Filter

const oddNums = arr1.filter((a) => {
    return a %2!== 0;

});

console.log(oddNums);

const prices2 =[2300, 1400, 230, 2000, 3400, 450, 700];

const afterprices =prices2.filter ((price) => {
    return price >500 && price <2500;

}); 

console.log(afterprices);

const friends =['Raju', 'Pinki', 'Kaliya', 'Munni', 'Rinki'];
const filteredFriends = friends.filter((friends) => {
    return friends.length >=5
});


console.log(filteredFriends);



