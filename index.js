const Express = require("express")
const App = Express()
const https = require("http")
const Server = https.createServer(App)
const Socket = require("socket.io")(Server)

App.use(Express.static(__dirname + '/public'))

App.get("/",(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

Socket.on("connection",(User)=>{
    User.on("mensagem",(msg)=>{
        Socket.emit("mensagem",msg)
    })
})


Server.listen("5000",(e)=>{
    console.log("Starting Server!")
})

