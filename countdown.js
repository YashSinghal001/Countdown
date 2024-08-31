let dayItem=document.querySelector("#days");
let hoursItem=document.querySelector("#hours");
let minItem=document.querySelector("#min");
let secItem=document.querySelector("#sec");

let countDown = () =>{
    let futureDate= new Date("20 jun 2025 2:00 PM");//Js Date object show time in millisecond if we use getTimeout() from 1 Januray 1970 till  to (Given Date)20 june 2024.Otherwise It show date and time of that day( 10 jun 2024)
    let currentDate=new Date();//Js Date object show time in millisecond if we use getTimeout()  from 1 Januray 1970 till  to Now june 2024.Otherwise It show date and time  of Now Day 2024
    // console.log(futureDate);
    // console.log(currentDate);
    let launchDate=futureDate - currentDate;
    // console.log(launchDate);//It show differnce from Now Date to Future Date in Milliseconds

    let days=Math.floor(launchDate / 1000 / 60 /60 / 24);//convert second then minutes then hours then seconds then finally day
    let hours=Math.floor(launchDate / 1000/60/60)%24;//convert second then minutes then hours then modolus with 24 for remaining hours
    let min=Math.floor(launchDate / 1000/60)%60;//convert second then minutes then modolus with 60 for remaining minutes
    let sec=Math.floor(launchDate / 1000)%60;//convert second  then modolus with 60 for remaining seconds

    dayItem.innerHTML=days;
    hoursItem.innerHTML=hours;
    minItem.innerHTML=min;
    secItem.innerHTML=sec;

}
// Call
countDown()
// Refersh After Each 1 Seconds
    setInterval(()=>{
        countDown()
    },1000);