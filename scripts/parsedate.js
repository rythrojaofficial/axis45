
class kdsObject{
    // takes in a sortable date stamp number 
    // ie. 250221 = 2025/02/21
    constructor( YYMMDDnumber ){
        this.YYMMDDnumber = YYMMDDnumber;
        this.YYMMDDstring = YYMMDDnumber.toString();
        this.yearString = `20${this.YYMMDDstring.slice(0,2)}`; // 20xx
        this.monthString = this.YYMMDDstring.slice(2,4);
        this.dayString = this.YYMMDDstring.slice(4);
        this.year = parseInt(this.yearString);
        this.month = parseInt(this.monthString);
        this.day = parseInt(this.dayString);
        this.localString = `${this.yearString}-${this.monthString}-${this.dayString}`
        this.valid = false;
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
export function localDateToSoratableDate( newLocalDate ){
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

function validateDate( kds ){
    // input takes a string in yymmdd format
    if (kds.length === 6){
        let newKDSobject = new kdsObject(kds)
        if( newKDSobject.year < 3000
            && newKDSobject.month <= 12
            && newKDSobject.day <= 31){
                // console.log({
                //     yymmdd: newKDSobject.YYMMDDstring,
                //     year: newKDSobject.yearString,
                //     month: newKDSobject.monthString,
                //     day: newKDSobject.dayString
                // })
                newKDSobject.valid = true;
                return newKDSobject
            }
    }
    else console.log('error: input sortable date format YYMMDD')

}

