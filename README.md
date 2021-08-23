<h1 align="center">Welcome to @kazura/web-crypto 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@kazura/web-crypto" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@kazura/web-crypto.svg">
  </a>
  <a href="https://github.com/kazura233/web-crypto/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> web-crypto

### 🏠 [Homepage](https://github.com/kazura233/web-crypto)

## Install

```sh
yarn add @kazura/web-crypto
```

## Usage

```javascript
import { Base64, md5, Rsa1024, Aes128Ecb } from '@kazura/web-crypto'

// md5
md5('plain text')

// base64
const base64Ciphertext = Base64.stringify('plain text')
Base64.parse(base64Ciphertext)

// aes-128-ecb
const aesCiphertext = Aes128Ecb.encrypt('plain text', 'secret key')
Aes128Ecb.decrypt(aesCiphertext, 'secret key')

// rsa-1024
const certificate = Rsa1024.createCertificate()
const rsaCiphertext = Rsa1024.encrypt('plain text', certificate.pubkey)
Rsa1024.decrypt(rsaCiphertext, certificate.privkey)
```

## Author

👤 **kazura233**

- Website: https://github.com/kazura233
- Github: [@kazura233](https://github.com/kazura233)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kazura233/web-crypto/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
