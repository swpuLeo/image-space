const path = require('path')
const QRCode = require('qrcode')
const promisify = require('./utils/promisify')

const create = promisify(QRCode.create)
const toCanvas = promisify(QRCode.toCanvas)
const toDataURL = promisify(QRCode.toDataURL)
const toFile = promisify(QRCode.toFile)
const toFileStream = promisify(QRCode.toFileStream)
const toString = promisify(QRCode.toString)

module.exports = {
  create,
  toCanvas,
  toDataURL,
  toFile,
  toFileStream,
  toString
}
