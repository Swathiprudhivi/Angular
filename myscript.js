//console.log("Hello from typescript");
/*let mystring:string;
let myNumber:number;
let myStatus:boolean;
mystring="TypeScript"
myNumber=120;
myStatus=true;
console.log(mystring);
console.log(myNumber);
console.log(myStatus);*/
function Ifunction(mydata) {
    return (mydata.Name + " " + mydata.Title);
}
var dat = { Name: "swathi", Title: "Assosiate" };
console.log(Ifunction(dat));
var User = /** @class */ (function () {
    function User(id, name, email, age) {
        this.Id = id;
        this.Name = name;
        this.Email = email;
        this.Age = age;
        console.log("Usr Created");
    }
    User.prototype.Register = function () {
        console.log(this.Name + "Successfully Registered");
        console.log(this.Id + " " + this.Name + " " + this.Email + " " + this.Age);
    };
    User.prototype.getAge = function (id) {
        if (this.Id == id)
            return this.Age;
        else
            return 0;
    };
    return User;
}());
var cUser = new User(2, "prudhivi", "pru@gmail.com", 20);
cUser.Register();
console.log(cUser.getAge(2));
