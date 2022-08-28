// 타입단언보다 타입선언 사용하기

interface Person {
  name: string
}

const alice: Person = {name: 'Alice'} //Type is Person 너는 Person이어야하고 만약 아니면 오류를 낼거야~
const bob = {name: 'Bob'} as Person // Type is Person 니가 뭐든 간에 난 Person으로 보겠다!

export default {}
