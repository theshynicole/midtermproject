var x=0;
var y=1;
var z=43;

var arry=[];
arry=[0,1,43];//zero indexed array
//create an array
// add things to array
//read things from an array
//modify an array
//search an array
//how many things?

arry.push(23);
arry.push("twenty-three");
arry.push(undefined);
arry.push({});
arry.push([1,2,undefined,null,false]);
arry.push(x);
//this is to push an array

////
console.log(arry[0]);

for(var i=0;i<arry.length;i++){
    console.log(arry[i]);
}

// this is to modify an array
arry[0]="zero";

arry.length=100;

console.log(arry);

arry.length=5;

console.log(arry);

//////////////

for(item of arry){
    console.log(item);
}

//methods
//indexof
//reverse,sort,pop


var result=arry.indexOf("four");
console.log(result);
if(result===-1){
    console.log("darn");
}else{
    console.log("yipeeee");
}

