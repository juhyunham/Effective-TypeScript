interface Square {
  width: number
}

interface Rectangle extends Square {
  height: number
}

type Shape = Square | Rectangle

function calculateArea(shape: Shape) {
  // if (shape instanceof Rectangle) {
  //   // TS: 'Rectangle'은(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
  //   return shape.width * shape.height
  //   // TS: 'Shape' 형식에 'height' 속성이 없습니다.
  // } else {
  //   return shape.width * shape.width
  // }

  if ('height' in shape) {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}
