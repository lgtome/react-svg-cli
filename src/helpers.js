import fs, { promises } from 'fs'
import { basename } from 'path'

export async function checkAndCreateOutDirectory(outPath) {
    await promises.mkdir(outPath, { recursive: true })

    return outPath
}

export async function getFiles(dir) {
    const all = await fs.promises.readdir(dir)
    console.log(all, '???')
    return Promise.all(
        all.map((file) => {
            if (fs.statSync(`${dir}/${file}`).isDirectory()) {
                return getFiles(`${dir}/${file}`)
            }

            return { path: `${dir}/${file}`, filename: file }
        })
    )
}

export async function getFile(filePath) {
    const path = await fs.promises.realpath(filePath)
    const filename = basename(filePath)
    return [{ path, filename }]
}

export async function constructFilesPaths(path, mode = 'multiple') {
    if (mode === 'multiple') {
        return getFiles(path)
    } else {
        return getFile(path)
    }
}

export function transformToPascalCase(str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()
    })
}

export const removeSVGExtension = (str) => {
    return str.replace(/\.svg/gi, () => '')
}
