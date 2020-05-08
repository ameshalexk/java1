var students = [];

function Student(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I am " + this.firstName + " and I am " + this.age + "years old.";
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

for ( let index = 0; index < students.length; index++) {
    student = students[index];
   console.log(student.greeting());
}

//console.log(students)


