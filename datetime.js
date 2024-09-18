
let getDateHbtn = document.getElementById('getDate');
let Hijriday = document.getElementById('Hijriday');
let getDateGregorianbtn = document.getElementById('getDateGregorian');
let gregorianday = document.getElementById('gregorianday');

let todaytext = document.getElementById('todaytext');
let prayingDate = document.getElementById('praying-date');

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '-' + mm + '-' + yyyy;
const formattedmonth = mm + '/' + yyyy;

console.log(formattedToday);

let todayHigray;
let todayGregorian;


fetch(`http://api.aladhan.com/v1/gToHCalendar/${formattedmonth}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.data);
        todaytext.innerText = `today is ${data.data[dd-1].gregorian.weekday.en}`
        todayHigray = data.data[dd].hijri.date;
        todayGregorian = data.data[dd-1].gregorian.date;
    })

getDateHbtn.addEventListener('click', () => {
    Hijriday.innerText = todayHigray;
})

getDateGregorianbtn.addEventListener('click', () => {
    gregorianday.innerText = todayGregorian;
})


// بإستخراج مواعيد الصلاة













