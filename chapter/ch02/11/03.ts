interface Options {
  darkMode?: boolean
  [otherOptions: string]: unknown
}

const o: Options = {darkMode: true} //OK

export default {}
