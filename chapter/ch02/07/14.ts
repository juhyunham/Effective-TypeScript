//Generic

interface Point {
  x: number
  y: number
}

type PointKeys = keyof Point // Type is "x" , "y"

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  vals.sort((a, b) => (a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : +1))
  return vals
}

const pts: Point[] = [
  {x: 1, y: 1},
  {x: 2, y: 0},
]

// x가 그러니까 Point의 key로 있어야함.
sortBy(pts, 'x') // Ok, 'x' extends 'x' | 'y'
sortBy(pts, 'y') // Ok, 'y' extends 'x' | 'y'
sortBy(pts, Math.random() < 0.5 ? 'x' : 'y') // Ok, 'y' extends 'x' | 'y'
sortBy(pts, 'z')

export default {}
