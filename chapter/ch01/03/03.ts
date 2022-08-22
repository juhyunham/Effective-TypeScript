class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width)
  }
}

type Shape = Square | Rectangle
// Rectangle를 class로 선언하면, type과 value(값)으로 모두 사용할 수 있다.

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

export default {}
