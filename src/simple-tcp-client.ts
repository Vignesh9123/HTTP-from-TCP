import net from 'net'

const client = net.createConnection({
    port: 3000
})

client.write("Hello from client")

client.on('data', (data)=>{
    console.log('Message from server', data.toString())
})

client.on('end', ()=>{
    console.log("Connection ended")
})