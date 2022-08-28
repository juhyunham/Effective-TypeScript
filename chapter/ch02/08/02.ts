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
const v2 = typeof email // Value is "function"

export default {}
