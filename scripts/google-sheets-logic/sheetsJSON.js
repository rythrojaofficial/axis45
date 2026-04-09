export async function readSheetsToJSON(sheetsURL){
  try {
    const response = await fetch(sheetsURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  }
    return response.json(); //returns promise for an Array of js objects
  }catch (error) {
      console.error("Fetch failed:", error); 
      return null; // Return null (or a default value) if fetch fails
  }
}

export function getHeaders(dataArr){
    console.log('getHeaders() called from sheetsJSON')
    let headers = Object.keys(dataArr[0]);
    return headers; // return array of all headers
}

export function removeBlank(dataArr){
    console.log('removeBlank() called from sheetsJSON')
    let newArr = [];
    let headers = getHeaders(dataArr);
     
    let noBlankRows = dataArr.filter(row =>
        row[headers[0]] !== undefined
        && row[headers[1]] !== undefined
    )
    return noBlankRows // returns array of objects (rows) where at least one of the first rows are not undefined

}