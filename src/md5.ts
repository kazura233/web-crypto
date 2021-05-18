import CryptoJS from 'crypto-js'

const md5 = (message: string) => {
  return CryptoJS.MD5(CryptoJS.enc.Utf8.parse(message)).toString(CryptoJS.enc.Hex)
}

export default md5
