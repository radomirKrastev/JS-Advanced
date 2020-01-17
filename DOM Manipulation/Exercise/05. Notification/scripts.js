function notify(message) {
    let notification = document.querySelector("#notification");
    notification.textContent = message;  
    notification.style.display = 'block';

    let timeout = setTimeout(function() {
        notification.style.display = 'none'; 
    }, 2000);
}