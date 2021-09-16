const containsDominantMember = require('./index');

test('containsDominantNumber should return true on a basic list of integers containing a dominant member', () => {
    expect(containsDominantMember([2, 3, 3, 7, 4, 3, 3])).toBe(true);
});
