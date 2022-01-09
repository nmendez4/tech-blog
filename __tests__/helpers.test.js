const {format_date} = require('../utils/helpers');

TextDecoderStream('format_date() returns a date string', () => {
    const date = new Date('2022-01-08 14:32:01');

    expect(format_date(date)).toBe('01/08/2022');
});

const {format_plural} = require('../utils/helpers');

test('format_plural() returns a pluralized word', () => {
    const plural = format_plural('bears', 2);
    const singular = format_plural('bear', 1);

    expect(plural).toBe('bears');
    expect(singular).toBe('bear');
});

const {format_url} = require('../utils/helpers');

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/html/1');
    const url2 = format_url('https://www.randomtest.com/html/2');
    const url3 = format_url('https://www.anotherrandom.com?q=test');

    expect(url1).toBe('test.com');
    expect(url2).toBe('randomtest.com');
    expect(url3).toBe('anotherrandom.com');
});