import { resolve } from 'path'
import { SVGFilesFilter } from './filters.js'
import {
    checkAndCreateOutDirectory,
    getFiles,
    removeSVGExtension,
    transformToPascalCase,
} from './helpers.js'
import { createStream } from './stream.js'

export async function run(options) {
    const { outPath, inPath, extension, absolutePath } = options

    await checkAndCreateOutDirectory(outPath)

    const inDirPath = resolve(absolutePath, inPath)
    const allFiles = await getFiles(inDirPath)
    const flatFiles = allFiles.flat(Infinity)

    const svgFiles = flatFiles.filter(SVGFilesFilter())

    await Promise.all(
        svgFiles.map(
            async ({ filename, path }) =>
                await createStream({
                    outPath,
                    inPath: path,
                    extension,
                    filename: transformToPascalCase(
                        removeSVGExtension(filename)
                    ),
                })
        )
    )
}
