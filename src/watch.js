import fs from 'fs'
import { checkAndCreateOutDirectory } from './helpers.js'

export async function runWithWatch(options) {
    const { outPath, inPath, extension, absolutePath } = options

    await checkAndCreateOutDirectory(outPath)

    fs.watch(
        inPath,
        (event, filename) => {
            console.log(event, filename)
        },
        { recursive: true }
    )
}
