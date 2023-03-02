#!/usr/bin/env node
import minimist from 'minimist'
import { initConfig } from '../src/initializeConfig.js'
import { checkArgs } from '../src/utils.js'
import { run } from '../src/run.js'
import { runWithWatch } from '../src/watch.js'

const absolutePath = process.cwd()

const argv = minimist(process.argv.slice(2))

const {
    i,
    init,
    e,
    extension = '.js',
    in: inPath,
    out: outPath,
    o,
    d,
    watch,
    w,
    f,
    file,
} = argv

const requiredOptions = {
    outPath: outPath || o,
    inPath: f || file || inPath || d,
    extension: e || extension,
    absolutePath,
}

const mode = Boolean(f || file)

const isWatching = Boolean(w || watch)

const partialOptions = { watch, w1 }

const options = { ...partialOptions, ...requiredOptions }

initialize()

function initialize() {
    if (i || init) {
        initConfig().then(process.exit)
        return
    }

    if (isWatching) {
        console.log('currently not working :)')
        runWithWatch(options)
        return
    }

    if (checkArgs(options, Object.keys(partialOptions))) {
        run(options, mode)
    }
}
