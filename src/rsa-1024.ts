import JSEncrypt from 'jsencrypt'

export interface Certificate {
  privkey: string
  pubkey: string
}

const Rsa1024 = {
  encrypt(str: string, pubkey: string) {
    const rsa = new JSEncrypt({})
    rsa.setPublicKey(pubkey)
    return rsa.encrypt(str)
  },
  decrypt(str: string, privkey: string) {
    const rsa = new JSEncrypt({})
    rsa.setPrivateKey(privkey)
    return rsa.decrypt(str)
  },
  createCertificate() {
    const rsa = new JSEncrypt({})
    const privkey: string = rsa.getPrivateKey()
    const pubkey: string = rsa.getPublicKey()
    return { privkey, pubkey }
  },
}

export default Rsa1024
