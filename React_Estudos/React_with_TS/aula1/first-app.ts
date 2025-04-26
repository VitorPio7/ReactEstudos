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
type StringOrNum = string | number;
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
type addFn=(a:number,b:number)=>number;


function calculate(
    a:number,
    b:number,
    calcFn:(a:number,b:number)=>number){
    calcFn(a,b);
}

/*uso da interface*/
interface Credentials{
    password:string;
    email:string;
};

let creds :Credentials;

creds = {
    password:'abc',
    email:'test@example.com'
};

class AuthCredentials implements Credentials{
    email: string;
    password: string;
    userName: string;
}
function login(credentials:Credentials){
    console.log(credentials);
}
login(new AuthCredentials());

/*Merging types */
type AppUser ={
    userName:string;
};
type Admin={
    permissions:string[];
};

// type AppAdmin = Admin & AppUser;

interface AppAdmin extends Admin,AppUser{}

//Literal types

type Role = 'admin'|'user'|'editor'; 
let role: Role  //'admin'|'user'|'editor';
role = 'admin';
role = 'user';
role = 'editor';

function performAction(action:string | number,role:Role){
    if(role ==='admin' && typeof action === 'string'){
       // ...
    }
}

//Type Guards 

function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
   
    return `${a} ${b}`;
  }

  //Type Narrowing 

  type User2 = {
    name: string;
    age: number;
  };
   
  type Admin2 = {
    name: string;
    age: number;
    permissions: string[];
  };
   
  function login2(u: User2 | Admin2) {    
        if ('permissions' in u) {
          // do something
        }
 }

 //generic types 
 let roles:Array<Role>
 roles = ['admin','user','editor'];
 type DataStorage<T>={
    storage:T[],/*um arr que vc nao sabe oq é ainda */
    add:(data:T)=>void;
    delete:(data:T)=>void;
 }

 const textStorage:DataStorage<string> ={
    storage:[],
    add(data){
        this.storage.push(data);
    }
 }

 const userStorage:DataStorage<User2>={
    storage:[],
    add(user){}
 }

function merge<T,U>(a:T,b:U){
    return{
        ...a,
        ...b
    }
}
const newUser = merge<{name:string},{age:number}>(
{name:'Max'}, 
{age:34}
);
/*ou podemos usar igual a sintax abaixo */
const newUser2 = merge({name:'Max'},{age:34});