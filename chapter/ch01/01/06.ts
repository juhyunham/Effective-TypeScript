const a = null + 7
// JS : number 7
// TS : 개체가 'null'인 것 같습니다.

const b = [] + 12
// JS : string 12
// TS : '+' 연산자를 'never[]' 및 'number' 형식에 적용할 수 없습니다.

alert('hello', 'Typescript')
// TS : 0-1개의 인수가 필요한데 2개를 가져왔습니다.

export default {}
