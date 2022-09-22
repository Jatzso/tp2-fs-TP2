const fs = require('fs')

try {
    let content = fs.readFileSync('./package.json', 'utf-8')
    let stat = fs.statSync('./package.json')

    let info = {
        contenidoStr: content,
        contenidoObj: JSON.parse(content),
        size: stat.size
    }

    console.log(info)

    fs.writeFileSync('./info.txt', JSON.stringify(info,null, '\t'))
    
} catch (error) {
    console.log("Hubo un error")
}



