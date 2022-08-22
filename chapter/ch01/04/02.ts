class C {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
}

const c = new C('instance of C')
// 값으로서~

const d: C = {foo: 'object literal'}
// 타입으로서~

console.log(d instanceof C) //false

export default {}
