import { readSheetsToJSON, getHeaders, removeBlank } from "../../scripts/google-sheets-logic/sheetsJSON.js";


const membersSheetURL = "https://script.google.com/macros/s/AKfycbyByi7qZhbOaPMgY8zkTqceF5U2L1LJQ7N8w_V9OleHZDL_jMeubcMATvxH-00-r-UOXg/exec"

class CoopMember{
  constructor(){
  }
  addKey(key, value){
    this[key] = value;
  }
}
class CoopMemberLibrary{
  constructor(){
    this.full = [];
    this.allActive = [];
    this.priority = [];
    this.regular = []
  }
}
export async function getMembers(){
  console.log('async getMembers(). . .')
  let membersLibrary = new CoopMemberLibrary();
  let data = await readSheetsToJSON(membersSheetURL);
  // console.log({sheetsData: data});

  let headers = getHeaders(data);
  console.log({memberHeaders:headers});

  for (const memberRow of data){
    let newMember = new CoopMember();
          headers.forEach(header =>{
            newMember.addKey(header, memberRow[header])
          })
          membersLibrary.full.push(newMember)
  }
  membersLibrary.allActive = membersLibrary.full.filter(member=> member['Status'] === 'active');
  membersLibrary.priority = membersLibrary.full.filter(member => member['Status'] === 'active'
      && member['Main Member'] === true);
  membersLibrary.regular = membersLibrary.full.filter(member => member['Status'] === 'active'
        && member['Main Member'] === false
    )
  return membersLibrary;
}




