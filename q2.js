//JavaScript Program to Create Objects in Different Ways
//1.Using object literal
/*const person={
    name: 'deepak',
    age:'20',
    hobbies:['reading','games','coding'],
    greet:function()
    {
        console.log('hello everyone');
    },
    score:{
        maths:90,
        science:20
    }
    };
    console.log(person.name);
    console.log(person.hobbies[0]);
    person.greet();
    console.log(person.score.maths);*/


// program to create JavaScript object using instance of an object
const person=new Object() ({
    name:'john',
    age:20,
    hobbies:['reading','games','coding'],
    greet:function()
    {
        console.log('hello everyone');
    },
    score:{
        maths:90,
        science:80
    }
});
console.log(typeof person);
console.log(person.hobbies[0]);
person.greet()
console.log(person.score.maths);

