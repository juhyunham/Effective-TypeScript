interface Identified {
  id: string
}

interface Person {
  name: string
}

interface Lifespan {
  birth: Date
  death?: Date
}

type PersonSapn = Person & Lifespan
// interface 둘 모두 충족

type K = Person | Lifespan
// interface 둘중에 하나를 충족하면 된다.

type L = keyof (Person | Lifespan) // type is never

const a: K = {
  name: 'a',
  death: new Date(),
}

export default {}
