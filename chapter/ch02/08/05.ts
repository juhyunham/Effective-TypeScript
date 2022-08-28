// This

// value : JS의 this
// type으로 쓰이는 this는 일명 다형성 this라고 불리는 typescript의 타입.

interface Person {
  first: string
  last: string
}

function email({
  person,
  subject,
  body,
}: {
  person: Person
  subject: string
  body: string
}) {}

export default {}
