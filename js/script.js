const greeting = document.getElementById('greet');
const userName = document.getElementById('userName');

async function greet(hr) {
    const response = await fetch('api/greeting.json');
    const data = await response.json();
    const greet = data.greetings;

    let time = '';
    let message = '';

    const formattedHour = hr < 10 ? `0${hr}:00` : `${hr}:00`;

    if (formattedHour >= greet[0].start && formattedHour <= greet[0].end) {
        time = greet[0].time;
        message = greet[0].greeting
    } 
    else if (formattedHour >= greet[1].start && formattedHour <= greet[1].end) {
        time = greet[1].time;
        message = greet[1].greeting
    }
    else {
        time = greet[2].time;
        message = greet[2].greeting
    }
    userName.value = localStorage.getItem("UserName") || "";
    greeting.innerHTML = `Good ${time}, ${userName.value || 'Sir'}! <br> ${message}`;
}


const date = new Date()
const h = date.getHours()

greet(h)



function openSettings(){
    document.getElementById('settings').classList.add('active');
    document.getElementsByClassName('overlay')[0].classList.add('active');
}

function closeSettings(){
    document.getElementById('settings').classList.remove('active');
    document.getElementsByClassName('overlay')[0].classList.remove('active');
}

function contact(){
    window.open('https://www.instagram.com/developer.pranav/', '_blank');
}

function save(){
    const userNameValue = userName.value;
    localStorage.setItem("UserName", userNameValue);
    const updatedHour = new Date().getHours();
    greet(updatedHour);
    closeSettings()
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'F4') {
        event.preventDefault();
        if(document.getElementById('settings').classList.contains('active')){
            closeSettings();
        }
        else{
            openSettings();
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if(document.getElementById('settings').classList.contains('active')){
            save()
        }
    }
});

