// requires google sheets to be publicly published to csv
export async function getCSVdata(csvSheetURLstring){
    try {
        const response = await fetch(csvSheetURLstring)
        if(!response){
            throw new Error(`Response status: ${response.status}`);
        }

        const csvText = await response.text();
        // create array of arrays
        const rows = csvText.split('\n') // .split makes an array '\n' is newline, as to split at each row, each row lists columns separated by ',' so split that too
                        .map(row => row.split(',')); // parse into arrays of arrays

        return rows; // returns the array of arrays 
    } catch (error) {
        console.error("Fetch failed:", error); 
        return null; // Return null (or a default value) if fetch fails
  }
}
    

    // fetch(sheetURL)
    //     .then(response => response.text())
        // .then(csvText => {
        // // parse into arrays of arrays
        // // .split makes an array
        // // '\n' is newline, as to split at each row, each row lists columns separated by ',' so split that too
        // const rows = csvText.split('\n').map(row => row.split(','));
        // return rows // returns the array of arrays    
        // })
        // .catch(error => console.error('Error fetching dates:', error));

    // return response.text


        // // get dates, assuming the first row is headers eg. date, location, name, age, email etc and the first column is dates
        // const dates = rows.slice(1) // removes the headers
        //     .map(row => row[0]) // grabs the rows
        //     .trim(); //removes whitespace, crucial for data matching in csvs 
        //     // Assuming dates are in first column
