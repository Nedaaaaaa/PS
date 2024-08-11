//1
let number=prompt("Enter your number");
if(number<=100)
{
    console.log("Number is less than or equal to 100");
}
else{
    console.log("Number is greater than  100") ;
}
 //2 

let nChar=prompt("Enter your text!");
if(nChar.trim().length>10)
{
    console.log("The string is long");
}
else{
    console.log("The string is short");
}

//3
let password="yaseenmohamed@gmail.com";
let passwordEnter=prompt("Enter your password");
if(password==passwordEnter.toLowerCase())
{
    document.write("Password is validation");
}
else{
    document.write("Password isnot validation");
}

//4
let day =prompt("Enter day") ;
if(day=="saterday")
{
    console.log("It is weekend");
}
else{
    console.log("It is work day") ;
}

//5
let num=prompt("Enter number");
if(Number(num)>0)
{
    console.log("It is positive number");
    }
    else{
        console.log("It is negative number");
    }

//6
let grade=prompt("Enter your grade");
let num=Number(grade);
if(num>90)
   {console.log("A");} 
else if (num>80)
{console.log("B");}
else if(num>70)
    {console.log("C");}
else if(num>60)
    {console.log("D");}
else
{console.log("F");}
    
//7
let temp=prompt("Enter tempreture now");
if (Number(temp)>30)
{
    console.log("It is hot");
}
else{
    console.log("It is cold");
}

//8
let checkNumber=prompt("Enter number");
if(Number(checkNumber)%2==0)
{
console.log("It is even number ");
}
else{
    console.log("It is odd number ");
}

//9
let check_num=prompt("Enter number");
if(Number(check_num)%2==0 &&Number(check_num)>20)
{
    console.log("It is even number and you can enter the university ");}
    else if(Number(check_num)%2!=0 &&Number(check_num)>20)
    {
        console.log("It is odd number and you can enter the university ");
    }
    else{
        console.log("You cannot enter the university ");
    }
    