// string의 부분집합 범위를 가지는 타입.
// K는 문자열을 확정했기 때문에 문자열만 받을 수 있음

function getKey<K extends string>(val: any, key: K) {
  // ...
}

getKey({}, 'x') // OK, 'x' extends string
getKey({}, Math.random() < 0.5 ? 'a' : 'b') //OK, 'a' | 'b' extends string
getKey({}, document.title) // OK, string extends string
getKey({}, 12)

// TS: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.

export default {}
