function updateTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours ? hours : 12; // the hour '0' should be '12' in AM/PM
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('ampm').innerText = ampm;
  }
  
  setInterval(updateTime, 1000); // update the time every second
  