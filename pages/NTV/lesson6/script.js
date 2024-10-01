const userOne = {
    name: 'Paul',
    age: 20,
    salary: 600000,
    job: 'software developer'
};

const userTwo = {
    name: 'Lisa',
    age: 30,
    salary: 900000,
    job: 'senior software developer'
};

const averageAge = (userOne.age + userTwo.age) / 2;
const averageSalary = (userOne.salary + userTwo.salary) / 2;

const averageUserInfo = {
    averageAge,
    averageSalary
};

// console.log(averageUserInfo);

const complexWizards = [
    { name: "Harry", hair: "black" },
    { name: "Ron", hair: "red" },
    { name: "Hermione", hair: "brown" },
]

const renderAllWizards = (complexWizards) => {
    // ... do something to generate the three wizards within an un ordered list
    const div = document.createElement('div');

    div.className = "wizards";
    document.body.appendChild(div);


    const listBody = document.createElement('ul');
    div.appendChild(listBody);

    for (i = 0; i < complexWizards.length; ++i) {


        const listInnerBody = document.createElement('li');
        listInnerBody.innerText = complexWizards[i].name;
        listInnerBody.color = complexWizards[i].hair;
        listBody.appendChild(listInnerBody);
    }

    for (i = 0; i < complexWizards.length; ++i) {


        const listInnerBodyStyle = document.createElement('style');
        listInnerBodyStyle.color = complexWizards[i].hair;
        listBody.appendChild(listInnerBodyStyle);
    }


}
renderAllWizards(complexWizards)