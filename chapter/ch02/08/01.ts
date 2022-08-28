//type
interface Cylinder {
  radius: number
  height: number
}

//value
const Cylinder = (radius: number, height: number): Cylinder => ({
  radius,
  height,
})
