import { ffmpegPath, ffprobePath } from './constants'
import Ffmpeg from 'fluent-ffmpeg'
import path from 'path'

export default async filePath => {
  const { dir, name } = path.parse(filePath)
  const newFilePath = `${dir}/${name}.mp3`
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
    .on('end', () =>
      console.log(`File ${newFilePath} converted and saved successfully!`)
    )
    .on('error', err => console.log('an error happened: ' + err.message))
    .save(newFilePath)
}
