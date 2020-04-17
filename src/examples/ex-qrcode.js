const path = require('path')
const { toFile } = require('../genQrCode')

const problemName = '0010-regular-expression-matching'
const savePath = path.join(process.cwd(), `src/images/qrcode/${problemName}.png`)
const content = `https://github.com/swpuLeo/cattle/blob/master/src/difficult/${problemName}/index.js`

toFile(savePath, content, { type: 'png' })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
