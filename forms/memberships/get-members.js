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

export async function getMembers(){
  let membersLibrary = []
  let data = await asyncGetMembers(membersSheetURL)
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
          membersLibrary.push(newMember)
      })
  let priorityLibrary = [];
  let normalLibrary = [];
  membersLibrary.forEach( member => {
    // console.log({
    //   name: member.name,
    //   status: member.status,
    //   priority: member.priority
    // })
    if(member.status === 'active'
      && member.priority === 'yes'
    ){
      priorityLibrary.push({
        name: member.name,
        type: member.type
      })
    }else if(member.status === 'active'){
      normalLibrary.push({
        name: member.name,
        type: member.type
      })
    }
  })
    let finalOrderLibrary = [];
    priorityLibrary.forEach(member =>{
      finalOrderLibrary.push(member)
    })
    normalLibrary.forEach(member =>{
      finalOrderLibrary.push(member)
    })
    return await finalOrderLibrary



}

getMembers()


async function asyncGetMembers(sheeturl){
  try{
    const response = await fetch(sheeturl);
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
      }
    let data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error);
  }
  
  
}




