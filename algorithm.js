function countVietnameseCharacters(input) {
    const vietnameseCharacters = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'w'];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i] + input[i+1];
        if (vietnameseCharacters.includes(currentChar)) {
            count++;
            i++;
        }
    }

    return count;
}

const inputString = 'hfdawhwhcoomdd';
console.log(countVietnameseCharacters(inputString)); // Output: 4
