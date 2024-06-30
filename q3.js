//Check Occurrence of a Character Using for Loop
function countstring(str,letter)
{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i)==letter){
        count+=1;}
    }
    return count;
}
const string=prompt('enter the string');
const lettertocheck=prompt('enter letter to check');
const result=countstring(string,lettertocheck);
console.log(result);
