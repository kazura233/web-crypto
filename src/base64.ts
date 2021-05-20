import CryptoJS from 'crypto-js'

const Base64 = {
  stringify(str: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str.replace(/\s/g, '')))
  },
  parse(str: string): string {
    return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8)
  },
}

export default Base64
