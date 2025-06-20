
class kdsObject{
    // takes in a sortable date stamp number 
    // ie. 250221 = 2025/02/21
    constructor( YYMMDD ){
        this.YYMMDDnumber = parseInt(YYMMDD);
        this.YYMMDDstring = YYMMDD;
        this.yearString = `20${this.YYMMDDstring.slice(0,2)}`; // 20xx
        this.monthString = this.YYMMDDstring.slice(2,4);
        this.dayString = this.YYMMDDstring.slice(4);
        this.year = parseInt(this.yearString);
        this.month = parseInt(this.monthString);
        this.day = parseInt(this.dayString);
        this.localString = `${this.yearString}-${this.monthString}-${this.dayString}`;
        this.localDate  = new Date(this.localString+'T00:00:00');
        this.weekday = this.localDate.toLocaleDateString("en-US", { weekday: "long" });
        // did need to create a date for weekday. T00 is to fix the utc to local date -1 dilema
        this.valid = false;
    }

}

export function sortableDateToKdsObject( YYMMDD ){
    let data = validateDate( YYMMDD )
    if (data.valid === true){
        return data
    }
}

export function sortableDateToLocalDate( YYMMDD ){
    let data = validateDate( YYMMDD );
    if (data.valid === true){
         let newLocal = new Date(
            data.year,
            data.month-1, //months are zero indexed,
            data.day
         )
         return newLocal
    }
}
export function localDateToSortableDate( newLocalDate ){
    let yearString = newLocalDate.getFullYear().toString();
    let shortYearString = yearString.slice(2);
    let monthString = (newLocalDate.getMonth()+1).toString(); // local is 0 indexed
    if (monthString.length < 2){
        monthString = `0${monthString}`
    }
    let dayString = (newLocalDate.getDate()).toString(); // local is 0 indexed
    if (dayString.length < 2){
        dayString = `0${dayString}`
    }
    let sortableString = `${shortYearString}${monthString}${dayString}`
    let sortableDateNumber = parseInt(sortableString);
    return sortableDateNumber;
}

export function googleSheetsDateToSortableDate( googleSheetsDate){
    //  yyyy-mm-dd format
    let sheetsDate = googleSheetsDate.split('-');
    sheetsDate[0] = sheetsDate[0].slice(2)
    let sortableDate = sheetsDate[0]+sheetsDate[1]+sheetsDate[2]
    return parseInt(sortableDate);
}

export function googleSheetsDateToLocalDate( googleSheetsDate){
    // yyyy-mm-dd to local
    let date = googleSheetsDateToSortableDate(googleSheetsDate);
    let localDate = sortableDateToLocalDate(date);
    return localDate
}

function validateDate( sortableDate ){
    // input takes a string or number in yymmdd format
    // returns a valid KDS object with string and numbers
    if (typeof(sortableDate) === 'number'){
        sortableDate = sortableDate.toString()
    }
    if (sortableDate.length === 6){
        let newKDSobject = new kdsObject(sortableDate)
        if( newKDSobject.year < 3000
            && newKDSobject.month <= 12
            && newKDSobject.day <= 31){
                newKDSobject.valid = true;
                return newKDSobject
            }
    }
    else console.log('error: input in format YYMMDD')

}



// testinggggg
// #########################
// let test = sortableDateToKdsObject(250616)

// console.log({
//     "weekday": test.weekday,
//     "YYMMDDnumber":test.YYMMDDnumber,
//     "YYMMDDstring":test.YYMMDDstring,
//     "day": test.day,
//     "dayString":test.dayString,
//     "localString":test.localString,
//     "month":test.month,
//     "monthString":test.monthString,
//     "weekday":test.weekday,
//     "year":test.year,
//     "yearString":test.yearString,
//     "localDate": test.localDate
// })
// console.log({
//     "get local month":test.localDate.getMonth()
// })


