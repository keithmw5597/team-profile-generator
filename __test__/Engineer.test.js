const { default: test } = require('node:test');
const { execPath } = require('process');
const Engineer = require('../lib/Engineer');

test('create the Engineer object', () => {
    const engineer = new Engineer('keith', 1, 'keith.test@fakemail.com');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get Engineer github', () => {
    const engineer = new Engineer('keith', 1, 'keith.test@fakemail.com', 'keithtest');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('get Engineer', () => {
    const engineer = new Engineer('keith', 1, 'keith.test@fakemail.com', 'keithtest');
    expect(engineer.getRole()).toEqual('Engineer');

});