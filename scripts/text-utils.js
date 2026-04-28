export function dashifyToLowerCase(string){
    return allLower(
        string.trimEnd()
        .replaceAll(" ", "-")
    )
}

// console.log({
//     dashifyHelloWorld:dashifyToLowerCase('Jello World hAs Come TOO pasS 1 1 1 111 111 1 1 1     ')
// })

export function allLower(string){
    return string.split('')
        .map(letter => letter.toLowerCase())
        .join('')
}
// console.log({
//     allLower: allLower('Jello World hAs Come TOO pasS 1 1 1 111 111 1 1 1     ')
// })

export function titleCase(string){
    return string.trimEnd()
        .split(" ")
        .map( word => allLower(word))
        .map( word => word.charAt(0).toUpperCase()+word.slice(1))
        .join(' ')
        
}

// console.log({
//     capitalize: titleCase('i come from a lOOONG liNe of HEROES')
// })