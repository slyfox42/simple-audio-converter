const Ffmpeg = require('fluent-ffmpeg')
const constants = require('./constants')

const getData = async () => {
  const ffmpeg = new Ffmpeg()
  ffmpeg.setFfmpegPath(constants.ffmpegPath)
  ffmpeg.setFfprobePath(constants.ffprobePath)
  ffmpeg
    .input('/Users/federico/Desktop/Orion.wav')
    // set audio bitrate
    .audioBitrate('128k')
    // set audio codec
    .audioCodec('libmp3lame')
    // set output format to force
    .format('mp3')
    // setup event handlers
    .on('end', function() {
      console.log('file has been converted succesfully')
    })
    .on('error', function(err) {
      console.log('an error happened: ' + err.message)
    })
    // save to file
    .save('/Users/federico/Desktop/result.mp3')
}

getData()
