interface Room {
  numDoors: number
  ceilingHeightFt: number
}

const obj = {
  numDoors: 10,
  ceilingHeightFt: 300,
  elephant: 'present',
}

const r: Room = obj //OK

//타입 추론

export default {}
