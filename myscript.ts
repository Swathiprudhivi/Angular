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

/*let mydata:any;
mydata="Hello"+" "+"Welcome TypeScript";
mydata=12+23;
console.log(mydata);
let mystring:string;
mystring="welcome to chennai";
console.log(mystring.slice(0,3));
let myNumber:number;
myNumber=100;
console.log(myNumber.toString()+" my Result");*/

//let mysArray:string[];
//let myynArray:number[];

/*let mysArray:Array<string>;
let mynArray:Array<Number>;
mysArray=["Hello","TypeSeript"];
mynArray=[1,2,3,4];
console.log(mysArray);
console.log(mynArray);
console.log(mynArray[1]);
for(var n=0;n<mynArray.length;n++)
{
    console.log(mynArray[n]);
}
mysArray.forEach(function(value)
{console.log(value);
})*/


/*let myTuple:[string,number,number]
myTuple=["TypeScript",1,4];
console.log(myTuple);
let myvar:void;
myvar=undefined;
console.log(myvar);
let myvar1:null;
myvar1=null;
console.log(myvar1);
console.log(myTuple.pop());
myTuple.push(23);
console.log(myTuple);*/
/*enum myEnum{sunday=0,monday,tuesday,wednesday};
console.log(myEnum.tuesday);*/


/*function myfunction(num1:number,num2:number):number
{
    return(num1+num2);
}
console.log(myfunction(23,78));



function addfunction(num1:any,num2:any):any
{
    return(num1+num2);
}
console.log(addfunction("hi",true));


function addNumber(num1:any,num2:any):number
{
    if(typeof(num1)=='string'&&typeof(num2)=='string')
    {
        num1=parseInt(num1);
        num2=parseInt(num2);
        return(num1+num2);
    }
    else
    return(num1+num2);
}
console.log(addNumber("23","34"));

function getName(firstname:string,lastname:string):string
{
    if(lastname==undefined)return firstname;
    return(firstname+" "+lastname);
}
console.log(getName("John","dan"));*/


//interface with property
interface myInterface
{
    Name:string;
    Title:string;
}
function Ifunction(mydata:myInterface):string
{
    return(mydata.Name+" "+mydata.Title);
}
let dat={Name:"swathi",Title:"Assosiate"}
console.log(Ifunction(dat));


//class
/*class User
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("Usr Created");
        

    }
}
let firstUser=new User(1,"swathi","swa@gmail.com",20);
console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.Age);*/



/*class User
{
   private Id:number;
   private Name:string;
   private Email:string;
   private Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("Usr Created");
        

    }
    register()
    {
       console.log(this.Name+"Successfully Registered");
       console.log(firstUser.Id+" "+firstUser.Name+" "+firstUser.Email+" "+firstUser.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else return 0;
    }
}
let firstUser=new User(1,"swathi","swa@gmail.com",20);
firstUser.register();
console.log(firstUser.getAge(1));*/



/*class User
{
   protected Id:number;
   protected Name:string;
   protected Email:string;
   protected Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("Usr Created");
        

    }
    register()
    {
       console.log(this.Name+"Successfully Registered");
       console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else return 0;
    }
}
class AdminUser extends User
{
    Type:string;
    constructor(id:number,name:string,email:string,age:number,type:string)
    {
        super(id,name,email,age);
        this.Type=type;
    }
    displayAdmin()
    {
        console.log("you are "+this.Type+" Admin");
        console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
    }
}
let cUser=new AdminUser(2,"prudhivi","pru@gmail.com",20,"Accoutant");
cUser.displayAdmin();*/


interface IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    Register():void;
    getAge(id:number):number;
}
class User implements IUser
{
    Id:number;
    Name:string;
    Email:string;
    Age:number;
    constructor(id:number,name:string,email:string,age:number)
    {
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Age=age;
        console.log("Usr Created");
    }

   Register()
    {
       console.log(this.Name+"Successfully Registered");
       console.log(this.Id+" "+this.Name+" "+this.Email+" "+this.Age);
    }
    getAge(id:number):number
    {
        if(this.Id==id)return this.Age;
        else return 0;
    }
}    
let cUser=new User(2,"prudhivi","pru@gmail.com",20);
cUser.Register();
console.log(cUser.getAge(2));