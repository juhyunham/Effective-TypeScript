interface Person {
  first: string
  last: string
}

const p: Person = {first: 'Jane', last: 'Jacobs'}

function email(p: Person, subject: string, body: string): Response {
  // COMPRESS
  return new Response()

  //END
}

class Cylinders {
  radius = 1
  height = 1
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinders) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}

type T1 = typeof p // Type is Person
type T2 = typeof email

const v1 = typeof p // Value is "Object"

// "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" 리턴타입이 8가지다~
// 뭔지는 모르겠는데, 이중에 하나가 나올거야!
const v2 = typeof email // Value is "function"

type C = InstanceType<typeof Cylinders>

export default {}
