const fs = require('fs')

let info = {
    contenidoStr: '',
    contenidoObj: '',
    size: ''
}

fs.promises.readFile('./package.json', 'utf-8')
    .then((data) => {
        info.contenidoStr = data
        info.contenidoObj = JSON.parse(data)

        fs.promises.stat('./package.json')
            .then((stat) => {
                info.size = stat.size

                console.log(info)

                fs.promises.writeFile('./info.txt', JSON.stringify(info, null, '\t'))
                    .then(data => {
                        console.log("La escritura se realizó con éxito")
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }).catch((err) => {
                console.log(err)
            })
    }).catch((err) => {
        console.log(err)
    })

