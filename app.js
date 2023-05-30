let message = document.querySelector('.show-message');
let showMessage = document.querySelector('.fb-message')





message.addEventListener('click',function() {
            showMessage.classList.toggle('active')
            shownotification.classList.remove('active')
            adminshow.classList.remove('active');
            
}) 

let notification = document.querySelector('.noti-fica');
let shownotification = document.querySelector('.notification-main');

notification.addEventListener('click', function(){
            shownotification.classList.toggle('active')
            showMessage.classList.remove('active')
            adminshow.classList.remove('active');
})

let admin =document.querySelector('.admin');
let adminshow = document.querySelector ('.admin-deshboard');
admin.addEventListener('click', function(){
            adminshow.classList.toggle('active');
            showMessage.classList.remove('active')
            shownotification.classList.remove('active')
})


