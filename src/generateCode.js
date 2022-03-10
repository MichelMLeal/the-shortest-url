//codigo a parte d sistema para gerar short url
const generateCode = () => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text
}

exports.default = generateCode
