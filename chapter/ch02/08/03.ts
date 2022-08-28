interface Person {
  first: string
  last: string
}

const p: Person = {first: 'Ham', last: 'Ju'}

// 대괄호에 union도 쓰일 수 있다.
const first: Person['first' | 'last'] = p['first']

export default {}
