function greetings(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'Smith' };
document.body.textContent = greetings(user);
