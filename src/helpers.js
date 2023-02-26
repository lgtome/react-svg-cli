import fs, { promises } from 'fs'

export async function checkAndCreateOutDirectory(outPath) {
    await promises.mkdir(outPath, { recursive: true })

    return outPath
}

export async function getFiles(dir) {
    const all = await fs.promises.readdir(dir)

    return Promise.all(
        all.map((file) => {
            if (fs.statSync(`${dir}/${file}`).isDirectory()) {
                return getFiles(`${dir}/${file}`)
            }

            return { path: `${dir}/${file}`, filename: file }
        })
    )
}

export function transformToPascalCase(str) {
    return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()
    })
}

export const removeSVGExtension = (str) => {
    return str.replace(/\.svg/gi, () => '')
}
