import { createServer } from 'http';
import { usersController } from './usersController.js';

const PORT = 8000;

process.on('unnhandlerRejection', function (reason, p) {
    console.log(reason, p);
})

let cors = (req, res) => {
    //Set CORS header 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', '*')
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    }
    return false
}

const app = createServer((req, res) => {

    if (cors(req, res)) return



    switch (req.url) {
        case "/users":
            usersController(req, res)
            break;
        case "./lessons":
            res.write('tasks')
            break;
        default:
            res.write('page not found')
    }

})

app.listen(PORT)
