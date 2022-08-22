// tsConfig : {"noImplicitAny": false, "strictNullChecks": false}

function add(a, b) {
  return a + b
}

// TS : 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
// function add(a: any, b: any): any

add(10, null)

export default {}
