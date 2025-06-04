import { getCSVdata } from "./read-public-csv.js";

let newURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhmNdlnLGf5jkYZARteuiPRf_10dx62_ukgpU-3LNZ0i3UKK_hU1054qAJGU6TpS_XlY8Jn5kZROLp/pub?output=csv'

const csvArray = await getCSVdata(newURL);
console.log(csvArray)