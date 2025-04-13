let age:number = 24;
let userName:string |string[];
userName='Max';
let isInstructor:boolean;

let hobbies:string[];
type Person ={
    name:string;
    age:number;
};
let person:Person;

person ={
    name:'Max',
    age:32
};
let people:{
    name:string;
    age:number;
}[];
let course:string|number = 'React - The Complete Guide';
course = 12341;

//Functions & types

function add(a:number,b:number){
   return a+b;
}
function print(value:any){
    console.log(value);
}
//Generics

function insertAtBeginning<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}
const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);
const stringArray= insertAtBeginning(['a','b','c'],'d');
