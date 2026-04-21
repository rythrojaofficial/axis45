const formDict = {
    // title and sections
    title: "Co-op Add Member",
    sections: [],
    // below are 
    dateAdded: "Date Added",
    addedBy: "Added By",
    newMemberName: {
        formName: "New Co-Op Member's Name",
        sheetName: "Co-Op Member"
    },
    isMainMember: {
        formName: "Main Member?",
        sheetName: "Main Member"
    },
}
console.log({sheetname:formDict.newMemberName.sheetName})

let memberInfo = [
  { legend: "Day" },
    {
    question: formDict.dateAdded,
    name: "", // if necessary
    label: formDict.dateAdded, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "date", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: true, // true or false
    setDate: "today" // // date only: "today" or sortable date number
  },
  {
    question: formDict.addedBy,
    name: "member-loading", // if necessary
    label: formDict.addedBy, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  }, //  
  {
    question: formDict.newMemberName.formName,
    name: formDict.newMemberName.sheetName, // if necessary
    label: formDict.newMemberName.formName, // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
  },
  {
    question: "Status",
    name: "", // if necessary
    label: "", // if necessary label
    placeholder: "", // if necessary
    description: "", // if necessary
    type: "text", // text, name, email, number, checkbox, date, select, radio
    appendedOptions: [], // if necessary from type
    required: false, // true or false
    value: "active"
  }


];
formDict.sections.push(memberInfo);

//  form Information

export const addCoOpMemberForm = {
  method: "POST",
  action: 
  "https://script.google.com/macros/s/AKfycbwRrTFOCHgVhmrk6lI2sRlCuxdN3cnUvcg0P-4J74XZXqGIW_iBlBzormEFGuaQ_d6jgg/exec",
  styleSheet: "../css-sheets/test.css",
  font: "https://fonts.google.com/specimen/Fira+Sans?stroke=Sans+Serif",
  title: formDict.title,
  id: formDict.title.replace(/ /g, "-"),
  description: "",
  sectionArray: formDict.sections,
  submitWheel: '../../assets/svg-images/ouroboros-load-wheel.svg', // check this
  submitMessage: "Submitting. . . Please Wait 🙂",
  submitError: "*Please check fields",
};
