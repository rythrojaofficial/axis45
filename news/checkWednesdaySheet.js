import { getCSVdata } from "../scripts/google-sheets-logic/read-public-csv.js";
import { googleSheetsDateToSortableDate } from "../scripts/parsedate.js";
export async function checkWednesdaySheet(){
    let newURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhmNdlnLGf5jkYZARteuiPRf_10dx62_ukgpU-3LNZ0i3UKK_hU1054qAJGU6TpS_XlY8Jn5kZROLp/pub?output=csv'
    const csvArray = await getCSVdata(newURL);

    // get dates, assuming the first row is headers eg. date, location, name, age, email etc and the first column is dates
    const dates = csvArray.slice(1) // removes the headers
        .map(row => row[1]) // grabs the rows    
        // Assuming dates are in first column

    const sortedDates = [];
    dates.forEach(sheetsDate => {
        sortedDates.push(
            googleSheetsDateToSortableDate(sheetsDate)
        )
    })
    return sortedDates

}
