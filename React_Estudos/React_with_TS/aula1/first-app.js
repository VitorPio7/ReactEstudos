var userName = "Rahul";
var userID = 'abc1';
userID = 123;
// let user: object;
var user;
// user = 'Max'; 
user = {
    name: 'Max',
    age: 34,
    isAdmin: true,
    id: 'abc'
};
var hobbies;
//ou
var hobbies2;
hobbies = ['Sports', 'Cooking', 'Reading'];
function addVoid(a, b) {
    var result = a + b;
    console.log(result);
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
;
var creds;
creds = {
    password: 'abc',
    email: 'test@example.com'
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials);
}
login(new AuthCredentials());
