interface Vector2D {
  x: number
  y: number
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}

interface NamedVector {
  name: string
  x: number
  y: number
}

const v: NamedVector = {x: 3, y: 4, name: 'hamju'}
calculateLength(v) //OK, result is 5

// 흥미로운점은 Vector2D와 NamedVector의 관계를 전혀 연관시키지 않았는데, typescript에서 알아서 잘 읽어줌.

export default {}
