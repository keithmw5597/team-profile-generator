const { default: test } = require('node:test');
const Intern = require('../lib/Intern');

test('create the Intern object', () => {
    const intern = new Intern('lisa', 1, 'lisa@fakemail.com', 'GCU');
    expect(intern.school).toEqual(expect.any(String));
});

test('get Intern school', () => {
    const intern = new Intern('lisa', 1, 'lisa@fakemail.com', 'GCU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get Intern role', () => {
    const intern = new Intern('lisa', 1, 'lisa@fakemail.com', 'GCU');
    expect(intern.getRole()).toEqual('Intern');
});