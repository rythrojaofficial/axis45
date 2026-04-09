import { readSheetsToJSON, getHeaders, removeBlank } from "../../scripts/google-sheets-logic/sheetsJSON.js";

const taskSheetURL ='https://script.google.com/macros/s/AKfycbzG8rBS4-oU1eKuQJEhHxQAYoYEO5fKygPjoFBxPNUyP726TkhgggEvLHmM0c5pcanRWw/exec'



export async function getTasks(){
    ('async getTasks(). . .')
    let data = await readSheetsToJSON(taskSheetURL);
    // console.log({tasksData: data})
    let headers = getHeaders(data);
    console.log({taskHeaders: headers});

    return data;
    
}