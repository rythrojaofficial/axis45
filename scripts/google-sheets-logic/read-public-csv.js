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