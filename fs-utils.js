import fs from 'fs'

export const readJsonFromFile = (filePath) => {

    let promise = new Promise((res, rej) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                rej(err);
            } else {
                res(JSON.parse(buf.toString()));
            }
        })
    })
    return promise
}

export const writeJsonToFile = (filePath, data) => {

    let promise = new Promise((res, rej) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) rej(err)
            res()
        })
    })
    return promise
}