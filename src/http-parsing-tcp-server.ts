import net from 'net'

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        let dataString = data.toString()
        const firstLine = dataString.split('\r\n')[0] // \r\n is the CRLF in HTTP RFC
        const [method, path] = firstLine.split(" ")
        console.log("Method", method, "Path", path)
        if (method == "GET") {
            socket.write(`HTTP/1.1 200 OK
Date: Fri, 12 Sep 2025 16:45:00 GMT
Server: Apache/2.4.57 (Unix)
Last-Modified: Thu, 11 Sep 2025 20:30:00 GMT
Content-Length: 92
Content-Type: application/json
Connection: Closed

{
  "name":"Vignesh"
}
`)
            socket.end()
        }

        if (method == "POST") {
            socket.write(`HTTP/1.1 404 NOT FOUND
Date: Fri, 12 Sep 2025 16:45:00 GMT
Server: Apache/2.4.57 (Unix)
Last-Modified: Thu, 11 Sep 2025 20:30:00 GMT
Content-Type: text/plain
Content-Length: 20
Connection: Closed

Method not found`)
            socket.end()
        }


    })
})

server.listen(3000, () => {
    console.log("Server running")
})
