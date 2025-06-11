import { readSheetsToJSON } from "../../scripts/getText.js";
const membersSheetURL = "https://script.google.com/macros/s/AKfycbx2BnIMMCsmezeo2pM_W_eQoh7CNzLItVbOygNnla5VQXRj1w91Td7Eu2Of6u9Mkrs/exec"

class Member{
  constructor(name, type, addedBy, status, priority = '', notes='', email = '', ){
    this.name = name;
    this.type = type;
    this.addedBy = addedBy;
    this.status = status;
    this.notes = notes;
    this.email = email;
    this.priority = priority;
  }
}
class MemberLibrary{
  constructor(){
    this.full = [];
    this.priority = [];
    this.regular = []
  }
}
export async function getMembers(){
  let membersLibrary = new MemberLibrary();
  let data = await readSheetsToJSON(membersSheetURL)
  data.forEach(member => {
          let newMember = new Member(
            member['Member Name'],
            member['Membership Type'],
            member['Added By'],
            member['Membership Status'],
            member['Priority'],
            member['Member Notes'],
            member['Member Email'],
          );
          membersLibrary.full.push(newMember)
      })
  membersLibrary.full.forEach( member => {
    if(member.status === 'active'
      && member.priority === 'yes'
    ){
      membersLibrary.priority.push({
        name: member.name,
        type: member.type
      })
    }else if(member.status === 'active'){
      membersLibrary.regular.push({
        name: member.name,
        type: member.type
      })
    }
  })
    return membersLibrary;
}

getMembers()




