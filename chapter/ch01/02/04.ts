const el = document.getElementById('status')
// el.textContent = 'Ready'
// TS: Object is possibly 'null' 객체가 null일수도 있다.

if (el) {
  el.textContent = 'Ready' // OK, null has been excluded
}

el!.textContent = 'Ready' // OK, we've asserted that el is non-null

export default {}
