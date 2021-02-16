
const r = prompt("Enter the circle radius");
//set circle radius to r
//set circumference to 0. Calculated later.
//set area to 0. Calculated later. 
const circle={
    radius: r,
    circumference: 0,
    area: 0
};
circle.circumference = r*2*Math.PI;
circle.area=Math.PI*(r*r);

//console prompt
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
