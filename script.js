
function responsiveTimer(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date(); 
    let hours = date.getHours(15);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayOfWeek = day[date.getDay()];
    let currentMonth = month[date.getMonth()];
    let year = date.getFullYear();
    let previousYear = date.getFullYear() -1;

    morning(hours);
    setBackground(hours)

    let amOrPm = formatTime(hours); //switch between am and pm
    hours = formatHours(hours); //convert our time time to 12 hour clock
    

    //lets add 0's when our values are less then 10
    hours = fixZero(hours);
    minutes = fixZero(minutes);
    seconds = fixZero(seconds);
    
    

    document.getElementById('weekday').innerHTML = dayOfWeek;
    document.getElementById('month').innerHTML = currentMonth;
    document.getElementById('day').innerHTML = date.getDate();
    document.getElementById('timer').innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + amOrPm;
    
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

function morning(time){
    let fill = document.getElementById('insert');
    if(time >= 5 && time < 12 ){ //morning
        fill.innerHTML = "Everyone has highs and lows that they have to learn from, but every morning I start off with a good head on my shoulders, saying to myself, 'It's going to be a good day!'."
        fill.nextElementSibling.innerHTML = "-Lindsay Lohan"
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
responsiveTimer()
setInterval(responsiveTimer,1000)



