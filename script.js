let section = document.querySelector("section"),
icons = document.querySelector(".icons");

icons.onclick = ()=>{
    section.classList.toggle("dark");
}


setInterval(()=>{
    let date = new Date();
     hour = date.getHours();
     min = date.getMinutes()
     second = date.getSeconds()

     let d;
     d = hour < 12 ? "AM" : "PM"

     hour= hour > 12 ? hour - 12 : hour;
     hour = hour == 0 ? hour= 12 : hour;
     console.log(min);

     hour = hour < 10 ? "0" + hour : hour;
     min = min < 10 ? "0" + min : min;
     second = second < 10 ? "0" + second : second;

     document.querySelector(".hour").innerText = hour;
     document.querySelector(".minute").innerText = min;
     document.querySelector(".second").innerText = second;

     document.querySelector(".am_pm").innerText = d;
}, 1000)