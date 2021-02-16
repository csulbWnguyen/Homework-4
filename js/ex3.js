const values =[3,11,7,2,9,10];

sum = values.reduce(function(a,b){
    return a+b;
}, 0);
//using min/max built in functions of Javascript.
min = Math.min.apply(Math,values);  
max = Math.max.apply(Math,values);
console.log(sum);
console.log(min);
console.log(max);