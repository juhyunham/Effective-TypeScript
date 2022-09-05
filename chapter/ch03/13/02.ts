type TState = {
  name: string
  capital: string
}

interface IState {
  name: string
  capital: string
}

const juuuuu: TState = {
  name: 'hamju',
  capital: 'Seoul',
  population: 500_000,
  //TS: 개체 리터럴은 알려진 속성만 지정할 수 있으며 'TState' 형식에 'population'이(가) 없습니다.
}

export default {}
