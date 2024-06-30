//JavaScript Program to Reverse a String
function reversestring(str)
{
    let newstring="";
    for(let i=str.length-1;i>=0;i--)
    {
       newstring+= str[i];
    }
    return newstring;
}
//const string=prompt('enter the string');
const string="deepak";
const result=reversestring(string);
console.log(result);
