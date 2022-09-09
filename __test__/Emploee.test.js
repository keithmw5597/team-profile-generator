const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('keith', 1, 'keith.test@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get name of employee', () => {
    const name = 'keith';
    const id = '1';
    const email = 'keith.test@fakemail.com';

    const employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(expect.stringContaining(name));
});

test('get employee id', () => {
    const employee = new Employee('keith', 1, 'keith.test@fakemail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('get email of employee', () {
    const name = 'keith';
    const id = '1';
    const email = 'keith.test@fakemail.com';

    const employee = new Employee(name, id, email);
    expect(employee.getEmail()).toEqual(expect.stringContaining(email));
});

test('get employee role', () => {
    const employee = new Employee('keith', 1, 'keith.test@fakemail.com');
    expect(employee.getRole()).toEqual('Employee');
});