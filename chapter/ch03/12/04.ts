async function getQuote() {
  const response = await fetch('/quote?by=Mark+Twain')
  const quote = await response.json()
  return quote
}

export default {}
