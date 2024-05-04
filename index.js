//find duplicate elements
const arrNumber=[1,2,3,3,1,5,4,5,6];
const duplicates=arrNumber.filter((ele, index ,arr)=>arr.indexOf(ele)!==index);
console.log(duplicates);


//find maximum element;
const arrNumber=[2,44,1,43];
const maxFunction=(arr)=>{
    let prev=0,curr;
    for(let i=0; i<arrNumber.length; i++){
        curr=arrNumber[i];
        if(curr>prev){
            prev=curr;
        }
    }
    return prev;
}
console.log(maxFunction(arrNumber))


// find second maximum element
const arrNumber=[2,4,55,23,56,78,34,102];
let index;
const maxFunction=(arr)=>{
    let prev=0, curr;
    for(let i=0; i<arr.length; i++){
        curr=arr[i];
        if(curr>prev){
            prev=curr;
            index=i;
        }
    }
}
maxFunction(arrNumber);
arrNumber.splice(index,1);
maxFunction(arrNumber)
console.log(arrNumber[index])


// diff b/w find and filter
const empArr=[
    {name:"king",age:42},
    {name:"ali",age:32},
    {name:"ahmad",age:22},
    {name:"zain",age:62},
    {name:"ayesha",age:52},
    {name:"hafsa",age:96},
    {name:"ram",age:25},
]
const filteredItem=empArr.filter((items)=>{
    return items.age>30;
})
console.log(filteredItem)
const findItem=empArr.find((items)=>{
    return items.age>30;
})
console.log(findItem);


//find missing numbers
const arrNum=[1,2,3,5,6,8,9,10];
const missArr=[];
const missingValue=(arr)=>{
    const minvalue=Math.min(...arr);
    const maxvalue=Math.max(...arr);
    for(let i=minvalue; i<maxvalue; i++){
        if(arr.indexOf(i)<0){
            missArr.push(i);
        }
    }
    return(missArr)
}
console.log(missingValue(arrNum));


//find even and odd in given array
const numbers=[1,2,3,4,5,6,7,8,9,10,12,15,21,22];
const even=numbers.filter((items)=>{
    return items%2===0;
})
console.log("even numbers",even)
const odd=numbers.filter((items)=>{
    return items%2!==0;
})
console.log("odd numbers",odd);


//find sum in given array
const numbers=[1,2,3,4,5,6,7,8,9,10,12,15,21,22];
let sum=0;
const sumOfNumbers=(arr)=>{
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(sumOfNumbers(numbers));


//find factorial
const factorial=(num)=>{
    let fact=1;
    for(let i=num; i>0; i--){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));


//check prime or not
let number=prompt("enter number")
let ct=0;
if(number===1){
    console.log(`${number} is neither prime nor composit`)
}
else if(number<1){
    console.log(`${number} is invalid`)
}
else{
    for(let i=2; i<number; i++){
        if(number%i===0){
           console.log(`${number} is not prime number`)
           ct++;
           break;
        }
    }
    if(ct==0){
        console.log(`${number} is prime`)
    }
}


//count vowel in string
let string=prompt("enter string");
const vowels=['a','e','i','o','u']
let countVowel=(str)=>{
    var count=0;
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }
    }
    return count;
}
console.log(countVowel(string))


// reverse the given string
const reverseString=(str)=>{
    let strToArray=str.split("");
    let arrReverse=strToArray.reverse();
    let arrayToStr=arrReverse.join("");
    return arrayToStr;
}
let string='hello';
console.log(reverseString(string));


//check string is palindrome
const checkPalindrome=(str)=>{
    let reverseStr=str.split("").reverse().join("");
    if(str===reverseStr){
        return true;
    }else{
        return false;
    }
}
let string="ohelleho ";
console.log(checkPalindrome(string));


//swap the variables
let a=23; 
let b=12;
// let temp=a;
// a=b;
// b=temp;
[a,b]=[b,a]; //array destructuring
console.log(`value of a is ${a} and b is ${b}`)


//merge two arrays and sort it; 
const arr1=['1','8','7'];
const arr2=['4','34','22','44'];
//concat
const finalArray=arr1.concat(arr2);
//spread operator
const finalArray1=[...arr1,...arr2];
const sortFinalArray=finalArray.sort((a,b)=>{a-b})
console.log(sortFinalArray);
 

//factor of given integer
const num=prompt("please enter positive number");
let arr=[];
console.log(`factors of ${num} are:`);
for(let i=1; i<=num; i++){
    if(num%i===0){
        arr.push(i);
    }
}
console.log(arr)


//calculator
const operator=prompt("please select operator either + - / *")
const num1= parseFloat(prompt("enter num 1"))
const num2= parseFloat(prompt("enter num 2"))
if(operator =='+'){
    result=num1+num2;
}else if(operator=='-'){
    result=num1-num2;
}else if(operator=='*'){
    result=num1*num2;
}else if(operator =='/'){
    result=num1/num2;
}else{
    result="please enter valid operator";
}
console.log(`${num1} ${operator} ${num2} = ${result}`)
 

//compare two arrays are equal or not
var arr1=[2,9,6,8,4,5]
var arr2=[4,8,6,9,2,5]
const isArrSame=arr1.length===arr2.length && 
    arr1.every((curEle)=>{
        if(arr2.indexOf(curEle)>-1){
            return(curEle=[arr2.indexOf(curEle)])
        }
    })
console.log(isArrSame)


//find intersection of two arrays
var arr1=[2,9,6,8,4,5,5,5]
var arr2=[4,8,6,9,2]
const intersectionArr=arr1.filter((ele)=>{
    return(arr2.includes(ele))
})
console.log([...new Set(intersectionArr)])


//union of two sets/arrays
var arr1=[2,9,6,8,4,5,5,5]
var arr2=[4,8,6,9,2]
const unionArr=arr1.concat(arr2);
console.log([...new Set(unionArr)])


// temperature conversion
let input=prompt("please enter value to convert");
let calciousToFarheite=input*1.8+32;
console.log(calciousToFarheite);
//fanheite to calcious
var farneiteToCalcious=5/9*(input-32);
console.log(farneiteToCalcious);


//charAt() : to get a character at an index
//toUpperCase() : to uppercase character
//map() : to return a new array 
//Slice() : to slice any character from string


//convert the first letter of string is to uppercase
var inputStr = prompt("enter string to capitalize");
const firstLetterCapital=(str)=>{
    var newStr = str.split(" ");
    var newArr = newStr.map((value)=>{
        return value.charAt(0).toUpperCase() + value.slice(1)
    });
    return newArr.join(" ");
}
console.log(firstLetterCapital(inputStr));


//print fibonacci series
let num=prompt("enter your number");
let arr=[]
let fibonacciSum=(value)=>{
    let first=0;
    let second=1;
    arr.push(first);
    arr.push(second);
    for(let i=0; i<value-2; i++){
        let curr=first+second ;
        first=second;
        second=curr;
        arr.push(curr);
    }
    return arr;
}
console.log(fibonacciSum(num))


// find occurence of character in string
let string=prompt("enter your string");
let letter=prompt("enter letter you want to search");
let occurence=0;
for(let i=0; i<string.length; i++){
    if(string[i]==letter){
        occurence++;
    }
}
console.log(`occurence of ${letter} is ${occurence} times`)


// check armstrong number 
let number=prompt("enter your number");
let sum=0;
let length=number.toString().length;
while(number>0){
    let digit=number%10;
    sum=sum+digit**length;
    number=parseInt(number/10);
}
console.log(sum);
