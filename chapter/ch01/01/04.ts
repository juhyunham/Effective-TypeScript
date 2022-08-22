interface State {
  name: string
  capital: string
}

// 오류를 방지하기 위해서 interface선언하여 사용
const states: State[] = [
  {name: 'hamju', capitol: 'Nontgomery'},
  //{ name: string; capitol: string; }' 형식은 'State' 형식에 할당할 수 없습니다.
  // 개체 리터럴은 알려진 속성만 지정할 수 있지만 'State' 형식에 'capitol'이(가) 없습니다. 'capital'을(를) 쓰려고 했습니까?
  {name: 'hamsarang', capital: 'Juneau'},
  {name: 'hamda', capital: 'Phoenix'},
]

for (const state of states) {
  console.log(state.capital)
}
