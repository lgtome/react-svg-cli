import fs from 'fs'
import { resolve } from 'path'
import { parse, createComponent } from './parse.js'

export async function createStream(options) {
    const { outPath, inPath, filename, extension } = options
    const stream = fs.createReadStream(inPath)

    return new Promise((res, _) => {
        let writeableStream = fs.createWriteStream(
            resolve(outPath, filename + extension)
        )

        stream.on('data', function (chunk) {
            const chunkData = chunk.toString()
            const data = createComponent(parse(chunkData).data, filename)
            writeableStream.write(data)
            stream.destroy()
            res()
        })
    })
}
