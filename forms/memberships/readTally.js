import { readSheetsToJSON } from "../../scripts/getText.js";
const tallySheetURL = 'https://script.google.com/macros/s/AKfycbwaw76mnAt5tgqsHOP3jEUWlh3WwEWRpK-rS26hY7huPVYW1iWcGMcjF0llI_HYn18/exec';

let yearRange = '2025',
monthRange = '06',
range = `${yearRange}-${monthRange}`
// console.log(range)

async function getTally(range) {
    let data = await readSheetsToJSON(tallySheetURL)
    let filteredData = [];
    data.forEach(row => {
        let yymm = row.Date.slice(0,7)
        if (yymm === range){
            filteredData.push(row)
        }
    });

    return filteredData
}
class KV {
    constructor(name){
        this.name = name;
        this.tally = {
            'Open Tricking': 0,
            'Guided Flexibility': 0,
            'Open Breaking':0,
            'Intermediate Guided Tricking': 0,
            'Tricking Exercise': 0
        }
    }
}
async function tallyUp(range){
    let tallyList = [];
    let filtered = await getTally(range);
    let keys = Object.keys(filtered[0]); 
    keys = keys.slice(4); // only names
    keys.forEach(key=>{
        let kv = new KV(key);
        tallyList.push(kv)
    })

    filtered.forEach(day =>{
        keys.forEach(name =>{
            let personObject = tallyList.find(person =>person.name === name);
            if (day[name] !== ''){
                if (day[name].includes(' + ') === false){
                personObject.tally[day[name]]++;
                }
                if (day[name].includes(' + ') === true){
                    let split = day[name].split(' + ');
                    personObject.tally[split[0]]++ // first tallly item
                    personObject.tally[split[1]]++ // second tally item
                }
            }
        })
    })


    return tallyList

}
console.log(
    await tallyUp(range)
)