const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDayofWeek = document.getElementById('weekday');
let presentMonth = document.getElementById('month');
let currentDay = document.getElementById('day');
let clock = document.getElementById('timer')


function responsiveTimer(){
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayOfWeek = day[date.getDay()];
    let currentMonth = month[date.getMonth()];
    let year = date.getFullYear();
    let previousYear = date.getFullYear() -1;

    
    
    quoteOfMoment(hours);
    setBackground(hours)
    
    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10

    hours = fixZero(hours)
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    
    console.log('actual hours = ' + hours )
    
    
    
    currentDayofWeek.innerHTML = dayOfWeek;
    presentMonth.innerHTML = currentMonth;
    currentDay.innerHTML = date.getDate();
    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + amOrPm;
    
    //footer
    document.getElementById('footer').innerHTML = 'Copyright © ' + previousYear + '-' +  year;

    
}


function fixZero(time){
    if(time < 10){
        time = "0" + time;
    } return time
}

function formatTime(time){
    let value = "AM"
    if(time >= 12){
        value = "PM"
    }
    return value
}

function formatHours(time){
    if(time > 12){
        time = time - 12;
    }

    return time
}

function setBackground(time){
    let image = document.getElementById('container');
    if(time >= 5 && time < 12 ){
        image.style.backgroundImage = 'url("morning.webp")'
    }else if (time >= 12 && time < 18){ //Afternoon
        image.style.backgroundImage = 'url("afternoon.jpg")'
    }else if (time >= 18 && time < 23){ //Evening
        image.style.backgroundImage = 'url("evening.jpg")'
    }else{//Night
        image.style.backgroundImage = 'url("night.jpg")'
    }
    
    
}

function quoteOfMoment(time){
    let fill = document.getElementById('insert');
    if(time >= 5 && time < 12 ){ //morning
        fill.innerHTML = "Everyone has highs and lows that they have to learn from, but every morning I start off with a good head on my shoulders, saying to myself, 'It's going to be a good day!'."
        fill.style.color = 'black'
        fill.nextElementSibling.innerHTML = "-Lindsay Lohan"
        fill.nextElementSibling.style.color = 'black'
    }else if (time >= 12 && time < 18){ //Afternoon
        fill.innerHTML = "You must try to generate happiness within yourself. If you aren't happy in one place, chances are you won't be happy anyplace."
        fill.style.color = 'white'
        fill.nextElementSibling.innerHTML = "-Ernie Banks"
        fill.nextElementSibling.style.color = 'white'
    }else if(time >= 18 && time < 23){//Evening
        fill.innerHTML = "I enjoy an evening stroll. It helps me to reflect and eases stress."
        fill.nextElementSibling.innerHTML = "-Blac Chyna"
        fill.style.color = 'white'
        fill.nextElementSibling.style.color = 'white'

    }else{//Night
        fill.innerHTML = "Think in the morning. Act in the noon. Eat in the evening. Sleep in the night."
        fill.nextElementSibling.innerHTML = "-William Blake"
        fill.style.color = 'white'
        fill.nextElementSibling.style.color = 'white'
    }
    
}

/*
function toMorning(time){
    time = 5;
    return time
    
}
*/


responsiveTimer()
let timer = setInterval(responsiveTimer,1000);
let revert = document.getElementById('revert')
revert.addEventListener('click', function(){
    responsiveTimer()
    timer = setInterval(responsiveTimer,1000)
    
})




//Buttons

let morningBtn = document.getElementById('morningBtn');
let afternoonBtn = document.getElementById('afternoonBtn');
let eveningBtn = document.getElementById('eveningBtn');
let nightBtn = document.getElementById('nightBtn');

morningBtn.addEventListener('click', function(){
    clearInterval(timer)
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = 6;
    minutes = 0;
    seconds = 0;
    quoteOfMoment(hours);
    setBackground(hours)
    
    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10

    hours = fixZero(hours);
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' '+ amOrPm;

})

afternoonBtn.addEventListener('click', function(){
    clearInterval(timer)
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = 12;
    minutes = 0;
    seconds = 0;

    quoteOfMoment(hours);
    setBackground(hours)
    
    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10

    hours = fixZero(hours);
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' '+ amOrPm;

})

eveningBtn.addEventListener('click', function(){
    clearInterval(timer)
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = 18;
    minutes = 0;
    seconds = 0;

    quoteOfMoment(hours);
    setBackground(hours)
    
    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10

    hours = fixZero(hours);
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + amOrPm;

})

nightBtn.addEventListener('click', function(){
    clearInterval(timer)
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = 24;
    minutes = 0;
    seconds = 0;

    quoteOfMoment(hours);
    setBackground(hours)
    
    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10

    hours = fixZero(hours);
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    clock.innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + amOrPm;

})



