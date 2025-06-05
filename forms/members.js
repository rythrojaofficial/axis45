const membersJSON = "https://script.google.com/macros/s/AKfycbx98a2UrYDHivjbS6nNBGi0He-q-gHZ1RC8V1tpXazvccRBBkIVEs2FvfiXhQH6LQE-UA/exec"

fetch(membersJSON)
  .then(response => response.json())
  .then(data => {
    // Use your sheet data here
    console.log(data);
  });