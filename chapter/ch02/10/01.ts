const originalCharAt = String.prototype.charAt

String.prototype.charAt = function (pos) {
  return originalCharAt.call(this, pos)
}

export default {}
