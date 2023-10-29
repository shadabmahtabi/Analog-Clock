let num = document.querySelector('#numbers');
let arr = [12,1,2,3,4,5,6,7,8,9,10,11];

num.innerHTML = arr.map((char,i)=>
`<span style="transform:rotate(${i * 30}deg);"><b style="transform: rotate(${i*-30}deg);")>${char}</b></span>`).join("");
// console(arr)

let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
setInterval(() => {
    let d = new Date;
    let hTime = d.getHours();
    let mTime = d.getMinutes();
    let sTime = d.getSeconds();
    let hRotation = 30*hTime + mTime/2;
    let mRotation = 6*mTime;
    let sRotation = 6*sTime;
    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
    // console.log(hRotation)
    // console.log(sRotation)
    },1000);
