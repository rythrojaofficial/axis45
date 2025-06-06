const membersJSON = "https://script.google.com/macros/s/AKfycbxEetGfi05FOw5nOKQKDhU12MTdbJiAlgqSG0B9JqJJB1ihwXYEpFAad_KcTNUwHVjlVw/exec"

fetch(membersJSON)
  .then(response => response.json())
  .then(data => {
    // Use your sheet data here
    console.log(data);
  });