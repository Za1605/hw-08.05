
//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++){

        document.write(`<div>Petro</div>`)

}

//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){

        document.write(`<div>Petro - ${i} </div>`)

}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while ( i < 20){
        document.write(`<h1>Yuliia</h1>`)
        i++;
}
 //За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let b = 0;
while ( b < 20) {
        document.write(`<h1>Yuliia - ${i} </h1>`)
        b++;
}


//Є масив
//за допомоги циклу вивести:
    //користувачів зі статусом true
//користувачів зі статусом false
//користувачів які старші за 30 років

 let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}
];


for (const user of users)
        if (user.age>30) {
                console.log(user);
        }


for (const user of users)
        if (user.status) {
                console.log(user);
        }

for (const user of users)
    if (user.status) {
        console.log(user);
    }

