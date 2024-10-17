function addNums (a, b){
     c = a + b;

     console.log(c);
     
}

addNums(3220, 48);
 
 // console.log(c);

 const getAvg = function (m1, m2, m3){
       const avg =(m1 + m2 + m3) / 3;
      // console.log(avg);

      return avg;
       
 }

const result = getAvg(78, 89, 90);

 console.log(result);
 
  const factorial =(n) => {

    let f = 1;
    for(let i=2; i<=n; i++){
        f = f * i;
    }
    return f;
  }

    const ans = factorial(5);
    console.log(ans);

    // Create a function to check if a number is even or odd

    const checkEven =(n) => {
        if (n % 2 === 0){
             return 'even'
        }  else {
             return 'odd'
        }
    }
         
      const res = checkEven(7);
      console.log(res);

      // create a function to take a time of the day and greet accoding
        
     const greet = (time) => {
        if (time === 'morning') {
            return 'good Morning';

        } else if (time === 'noon') {
            return 'Good noon';

    
        } else if (time === 'afternoon') {
            return  'Good After noon';

        } else if (time === 'evening') {
            return 'Good Evening';
            
        } else if  (time === 'night') {
            return ' Good Night';
        }
 
     }
       // create a function to check if a number is prime or not 
  