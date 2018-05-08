#!/usr/bin/env node
const zeros = require('zeros')
const savePixels = require('save-pixels')
const Color = require('color')
const Datauri = require('datauri')
const streamBuffers = require('stream-buffers')

const color = Color(process.argv[2]).rgb().array()

// create a single-pixel image
var x = zeros([1, 1, 3])
x.set(0, 0, 0, color[0])
x.set(0, 0, 1, color[1])
x.set(0, 0, 2, color[2])

var writer = new streamBuffers.WritableStreamBuffer({
	initialSize: 100,
	incrementAmount: 10
});

const datauri = new Datauri()

writer.on('finish', () => {
  console.log(datauri.format('.png', writer.getContents()).content)
})

savePixels(x, 'png').pipe(writer)
