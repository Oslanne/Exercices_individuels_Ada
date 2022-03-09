//Etape 1:

const maxDaysByMonth = {
  01: 31,
  02: 29,
  03: 31,
  04: 30,
  05: 31,
  06: 30,
  07: 31,
  08: 31,
  09: 30,
  10: 31,
  11: 30,
  12: 31,
}

function isValideDate(testDate) {
  let dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  if (dateRegex.test(testDate)) {
    maxDaysInMonth(testDate)
  } else {
    console.log("It's a invalid date.")
  }
}

function maxDaysInMonth(date) {
  dayDate = parseInt(date.substring(0,2));
  console.log(dayDate);
  monthDate = parseInt(date.substring(3,5));
  console.log(monthDate);
  if ( dayDate <= maxDaysByMonth[monthDate]){
    console.log("pouette");
  } else {
    console.log("It's a invalid date.");
  }
}

isValideDate("01/12/2022");
