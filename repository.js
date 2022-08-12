import fs from 'fs'
import { readJsonFromFile, writeJsonToFile } from './fs-utils.js'

export const getUsers = () => {
    return readJsonFromFile("db")
}

export const addUser = async (name) => {
    let users = await getUsers()
    // users.push({name: name})
    users.push({ name })
    return writeJsonToFile("db", users)
}