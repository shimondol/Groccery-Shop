

function updateClock() {  
    const now = new Date();  

    const seconds = now.getSeconds();  
    const minutes = now.getMinutes();  
    const hours = now.getHours();  

    // Calculate the degrees for each hand  
    const secondDegrees = ((seconds / 60) * 360) + 90; // +90 to start at the top  
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;  
    const hourDegrees = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90;  

    // Get the hand elements  
    const secondHand = document.getElementById('second');  
    const minuteHand = document.getElementById('minute');  
    const hourHand = document.getElementById('hour');  

    // Apply the rotations  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;  
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;  
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;  

    // Update digital time display  
    const digitalTime = document.getElementById('digital-time');  
    digitalTime.textContent = now.toLocaleTimeString();  
}  

// Update the clock every second  
setInterval(updateClock, 1000);  

// Call the function once to set the initial position  
updateClock();  