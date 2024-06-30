//Count the Number of Vowels Using for Loop
const vowels=["a","e","i","o","u"]
function countvowel(str)
{
    let count=0;
    for(let letter of str.toLowerCase())
    {
        if(vowels.includes(letter))
        {
            count++;
        }
    }
    return count
}
const string=prompt('enter the string');
const result=countvowel(string);
console.log(result);