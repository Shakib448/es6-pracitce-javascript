const person = {
    name: 'Jach William',
    age: 17,
    job: 'facebook',
    gfName: 'Emma watson',
    address: 'Dhaka',
    phone: '017111432345',
    friends: ['Tom hancks', 'shakib', 'muktadir'],
    salary: '$12000'
}

const gfNmae = person.gfName;

const complexObj = {
    name : "ANtu",
    info :{
        address : "Khilgaon",
        height : "6 Feet"
    }
}

const {height} = complexObj.info;

// console.log('GF name', person.gfName);
// console.log('Job name', person.job);
// console.log('Friends name', person.friends[1]);
// console.log('Phone number', person.phone);

const { phone, gfName, salary, address, friends } = person;

console.log(gfName, phone, salary, address, friends[2], height);