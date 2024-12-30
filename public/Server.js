document.addEventListener("DOMContentLoaded",()=>{
const Io = io()
const msg = document.getElementById("msg")

msg.addEventListener("keypress",(Keyboard)=>{
    if (Keyboard.key == "Enter"){
         Io.emit("mensagem",msg.value)
         console.log(msg.value)
    }
})

Io.on('mensagem',function(msg){
    const item = document.createElement('li');
    item.innerHTML = msg
    document.getElementById("Text").appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})
})
