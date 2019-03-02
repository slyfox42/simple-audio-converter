import { ffmpegPath, ffprobePath } from './constants'
import Ffmpeg from 'fluent-ffmpeg'
import path from 'path'

export default async filePath => {
  const ext = path.extname(filePath)
  const basename = path.basename(filePath, ext)
  const ffmpeg = new Ffmpeg()
  ffmpeg.setFfmpegPath(ffmpegPath)
  ffmpeg.setFfprobePath(ffprobePath)
  ffmpeg
    .input(filePath)
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
    .save(`/Users/federico/Desktop/${basename}.mp3`)
}
