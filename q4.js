//Convert First letter to UpperCase
function capitalizefirst(str)
{
    const capatlized=str.chatAt(0).toUpperCase() + str.slice(1);
    return capatlized;
    const string=prompt('enter a string');
    const result=capitalizefirst(string);
    console.log(result);

}