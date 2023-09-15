function startCountDown(targetDate){
    function updateCountDown(){
        const currentDate = new Date().getTime();
        const timeRemaining =  targetDate - currentDate
        console.log(currentDate)
        console.log(timeRemaining)
        if(timeRemaining <= 0){
            clearInterval(interval)
            document.querySelector('#timer').innerHTML = "Countdown Expired!";
        }else{
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 *24));
            console.log(days)
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 *24))/ (1000 * 60 * 60))
            console.log(hours); 
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60 ))/ (1000 * 60))
            console.log(minutes);
            const seconds = Math.floor((timeRemaining % (1000 * 60 ))/ 1000 )
            console.log(seconds);
            document.querySelector('#timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
        }
    }
    updateCountDown();
    const interval = setInterval(updateCountDown, 1000)
}
const targetDate = new Date('2023-12-31').getTime();
startCountDown(targetDate)