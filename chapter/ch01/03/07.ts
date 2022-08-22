function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any) {
  return a + b
}

// TS: overload하려면 any로 해야함.

const three = add(1, 2)
const twelve = add('1', '2')

export default {}
