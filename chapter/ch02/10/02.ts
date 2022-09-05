function getStringLen(foo: String) {
  return foo.length
}

getStringLen('hello') //OK String string
getStringLen(new String('hello')) //OK

export default {}
