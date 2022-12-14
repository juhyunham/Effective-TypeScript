// 공통 타입 시그니처를 선언해서, 사용

type BinaryFn = (a: number, b: number) => number

const add: BinaryFn = (a, b) => a + b
const sub: BinaryFn = (a, b) => a - b
const mul: BinaryFn = (a, b) => a * b
const div: BinaryFn = (a, b) => a / b

export default {}
