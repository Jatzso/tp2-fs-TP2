const fs = require('fs')

let info = {
    contenidoStr: '',
    contenidoObj: '',
    size: ''
}

async function readFilePromise(path){
    try {
        let data = await fs.promises.readFile(path, 'utf-8')
        info.contenidoStr = data
        info.contenidoObj = JSON.parse(data, null, '\t')
        try {
            let stat = await fs.promises.stat(path)
            info.size = stat.size
        } catch (error) {
            console.log(`Hubo un error en stat ${error}`)
        }
        
        console.log(info)

        try {
            await fs.promises.writeFile(path, JSON.stringify(info, null, '\t'))
            console.log(`La escritura se realizó con éxito`)
        } catch (error) {
            console.log(`Se produjo un error en la escritura`)
        }

    } catch (error) {
        console.log(`Se produjo un error: ${error}`)
    }   
}

readFilePromise('./package.json')