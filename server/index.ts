import http from "http"
import { getIoInstance, handleSocket, initializeIoServer } from "./io"

const server = http.createServer()
initializeIoServer(server)
const io = getIoInstance()

io.on("connection", (socket) => {
    handleSocket(socket)
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})
