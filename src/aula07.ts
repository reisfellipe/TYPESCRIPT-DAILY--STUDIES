enum weekdays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7
}

console.log(weekdays.sunday);
console.log(weekdays[1]);

const d = new Date();
console.log(d.getDate());

enum colors {
    white="#fff",
    black="#000",
    red="#f00",
    green="#0f0",
    blue="#00f"
}

console.log(colors.white);

enum userType{
    USER=10,
    ADMIN=100,
    PLUS=1000
}

console.log(userType.PLUS);

const type:userType=10; // se voce decidir que os valores vai ser do tipo userType, então só podera aceitar os valores como 10, 100 E 1000