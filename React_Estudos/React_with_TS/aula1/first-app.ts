let userName : string = "Rahul";
let userID:string|number = 'abc1';
userID = 123;

// let user: object;
let user:{
    name:string,
    age:number,
    isAdmin:boolean,
    id:string|number;
};

// user = 'Max'; 

user={
    name:'Max',
    age:34,
    isAdmin:true,
    id:'abc'
};

let hobbies: Array<string>;
//ou
let hobbies2:string[];

hobbies=['Sports','Cooking','Reading'];
function addVoid(a:number,b:number):void{
    const result = a+b;
   console.log(result)
}
function add(a:number,b:number):number{
    return a+b;
}
