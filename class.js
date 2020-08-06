class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "KOLI School";
    }
}

const Student1 = new Student(12, "shubo");
const Student2 = new Student(22, "mahia");

console.log(Student1, Student2);
