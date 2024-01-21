const palindromes = require('../palindromes/palindromes')
describe('palindromes', () => {
    it('correctly identifies one-word palindromes', () => {
        expect(palindromes('madam')).toStrictEqual(['madam'])
        expect(palindromes('refer')).toStrictEqual(['refer'])
        expect(palindromes('')).toStrictEqual([''])
    })
    it('returns empty array when given no palindromes', () => {
        expect(palindromes('hello')).toStrictEqual([])
    })
    it('ignores punctuation', () => {
        expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
	});
    it('detects multi-word palindromes', () => {
        expect(palindromes('A man, a plan, a canal, Panama')).toEqual(['amanaplanacanalpanama']);
	});
})