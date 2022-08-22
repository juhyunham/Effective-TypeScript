interface Person {
  firstName: string
  last: string
}

// F2눌러서 이름 변경하면 함께 변경됨. 근데 any면 같이 변경이 되지 않음.
const formatName = (p: Person) => `${p.firstName}${p.last}`
const formatNameAny = (p: any) => `${p.first}${p.last}`

export default {}
