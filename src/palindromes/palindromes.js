const palindromes = (str) => {
    const strAfterRemovingPunctuations = str.split('').map(ch => ch.toLowerCase()).filter(ch => {
        const code = ch.toLowerCase().charCodeAt(0)
        return code >= 97 && code <= 122;

    }).join('')
    if(strAfterRemovingPunctuations === strAfterRemovingPunctuations.split('').reverse().join('')) return [strAfterRemovingPunctuations]
    return []
}

module.exports = palindromes