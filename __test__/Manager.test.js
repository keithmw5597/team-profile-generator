const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Manager = require('../lib/Manager');

test('create the Manager object', () => {
    const manager = new Manager('keith', 1, 'keith@fakemail.com', 1200);
    exportAllDeclaration(manager.officeNumber).toEqual(expect.any(Number));
});

test('get Manager role', () => {
    const manager = new Manager('keith', 1, 'keith@fakemail.com', 1200);
    expect(manager.getRole()).toEqual('Manager');
});