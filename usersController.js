import { addUser, getUsers } from "./repository.js"


export const usersController = async (req, res) => {
    if (req.method === "POST") {
        addUser('Maks')
        res.write(JSON.stringify({ success: true }))
        res.end()
    } else {
        let users = await getUsers()
        res.write(JSON.stringify(users))
        res.end()
    }
}