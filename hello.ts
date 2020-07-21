interface Person {
	firstName: string;
	lastName: string;
}

function greetings(person: Person) {
	return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'Smith' };

document.body.textContent = greetings(user);
