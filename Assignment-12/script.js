    let notifications_sent = 0

document.getElementById("notify").addEventListener("click", (e) =>{
    e.preventDefault();

    if(!("Notification" in window)){
        alert("This browser does not support desktop notifications");
        return;
    }

    const title = document.getElementById("custom_title").value.trim();
    const message = document.getElementById("custom_message").value.trim();
    const icon_url = document.getElementById("icon_url").value.trim();

    if(!message){
        alert("Please enter a message first");
        return;
    }

    const sendNotification = () => {
        setTimeout(() => {
            showNotification(title, message, icon_url);
            update_notifcations_num();
        }, 5000);
    };

    if(Notification.permission === "granted"){
        sendNotification();
    }
    else if(Notification.permission !== "denied"){
        Notification.requestPermission().then(permission => {
            if (permission === "granted"){
                sendNotification();
            }
        });
    }
});

function showNotification(title, message, icon_url){
    new Notification(title, {
        body: message,
        icon: icon_url
    });
}

function update_notifcations_num(){
    notifications_sent +=1;
    document.getElementById("count").textContent = notifications_sent;
}