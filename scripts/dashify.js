export function dashifyToLowerCase(string){
    return string.trimEnd()
        .replaceAll(" ", "-")
        .split('')
        .map(letter => letter.toLowerCase())
        .join('')
}

// console.log({
//     dashifyHelloWorld:dashifyToLowerCase('Jello World hAs Come TOO pasS 1 1 1 111 111 1 1 1     ')
// })
