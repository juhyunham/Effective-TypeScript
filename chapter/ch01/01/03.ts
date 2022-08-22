const states = [
  {name: 'hamju', capital: 'Nontgomery'},
  {name: 'hamsarang', capital: 'Juneau'},
  {name: 'hamda', capital: 'Phoenix'},
]

// for (const state of states) {
//   console.log(state.capitol)
// }
//'capitol' 속성이 '{ name: string; capital: string; }' 형식에 없습니다. 'capital'을(를) 사용하시겠습니까?

for (const state of states) {
  console.log(state.capital)
}

export default {}
