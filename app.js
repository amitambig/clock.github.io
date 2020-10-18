let a;
let date;
let time;
let prevHTML=document.querySelector('#display');
let utc;
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(() => {
    a=new Date();
    date=a.toLocaleDateString(undefined,options);
    time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    utc=a.getUTCHours()+":"+a.getUTCMinutes()+":"+a.getUTCSeconds();
    prevHTML.innerHTML=time+" On "+date+"<br><br/>And The UTC Time is:"+utc;
    
},1000);