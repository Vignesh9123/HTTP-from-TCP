import net from 'net'


const server = net.createServer((socket)=>{
    console.log("Connection", socket.address())
    socket.on('connect', ()=>{console.log("Gety")})
    socket.write("Hello from server")
    socket.on('data', (data)=>{
        console.log("Data from client", data.toString())
    })

    socket.on('error', (err)=>{
        console.log("Some error", err)
    })

    socket.on('close', (hadError)=>{
        console.log("Disconnected", !hadError)
    })
})

server.listen(3000, ()=>{console.log("Server running")})