console.log("hello ji");
let a = 20;
let b = 4;
console.log(a+b,a-b,a*b,a/b,a%b,a**b)
console.log(5+5);
console.log(a-b,"subtraction");
console.log(a*b,"multiplication");
console.log(a/b,"division");
console.log(a%b,"modular");
console.log(a**b,"power");
a++ //add 1 in a
console.log(a,'increment in a');
a+=4;
console.log(a)
a-=4;
console.log(a)
a*=4;
console.log(a)
a/=4;
console.log(a)
a%=4;
console.log(a)
a **= 4;
console.log(a,"**")

//for comparision operators
let c = 1;
let d = 2;
console.log("1 == 2",a==b)
console.log("1 == 2",a!=b)
console.log("1 == 2",a===b)
console.log("1 == 2",a!==b)

//conditional statment

//if
let age=19;
if(age>=18){
console.log("you can vote")
}

if(age<18){
    console.log("you cannot vote")
    }
   
//if-else    
let num=3;
if(num%2===0){
    console.log(num,"is even")
}
else{
    console.log(num,"is odd")
}

//if-elseif-else
let n=18;
if(n<18){
    console.log("junior")
}
else if(n>18){
    console.log("sinior")
}
else{
    console.log("ok")
}

//other

let aa=10;

let result=aa>=18?"adult":"not adult";
console.log(aa,result)

/*alert("hello ji","alert-ex");
let score = prompt("marks");
let grade;

if(score>=90 && score<=100){
    grade="a"
}
else if(score>=70 && score<=89){
    grade="b"
}
else if(score>=50 && score<=69){
    grade="c"
}
else if(score>=0 && score<=49){
    grade="d"
}
console.log(grade)*/

//loop
for(let i=1; i<=5; i++){
    console.log("panch baar ji",i)
}

//sum of 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum=sum+i;
}
console.log(sum);
//or
let m = 0;
for(let i=1; i<=5; i++){
    console.log("m =",i)
}
//infinite loop

function myFunction(){
    p=p+"sach me"
   document.getElementById("demo").style.fontSize="50px";
}