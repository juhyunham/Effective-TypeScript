interface Person {
  name: string
}

const body = document.body

const el1 = [] as Person

// 모든 타입은 unknown의 서브타입이다.
const el2 = [] as unknown as Person

export default {}
