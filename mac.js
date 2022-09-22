const fs = require('fs')

let info = {
    contenidoStr: '',
    contenidoObj: '',
    size: ''
}

try {
    fs.readFile('./package.json','utf-8', (err, data) => {
    if(err) throw new Error(`Hubo un error en la lectura: ${err}`)
    info.contenidoStr = data
    info.contenidoObj = JSON.parse(data)

    fs.stat('./package.json', (err, stat) => {
        if(err) throw new Error(`Hubo un error en stat: ${err}`)
        info.size = stat.size
        console.log(info)

        fs.writeFile('./info.text', JSON.stringify(info, null, '\t'), (err) => {
            if(err) throw new Error(`Hubo un error en la escritura ${err}`)
            console.log("¡La escritura se realizó con éxito!")
        })
    })
})
} catch (error) {
    console.log("Se produjo un error")
}
