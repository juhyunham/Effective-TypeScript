// tsConfig : {"noImplicitAny": false, "strictNullChecks": false}

const x: number = undefined // OK, null is a valid number

const x2: number | null = null

console.log(x, x2)

//TS : 'null' 형식은 'number' 형식에 할당할 수 없습니다.

export default {}
