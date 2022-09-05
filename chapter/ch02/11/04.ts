interface LineChartOptions {
  logscale?: boolean
  invertedYAxis?: boolean
  areaChart?: boolean
}

const opts = {logScale: true}
const o: LineChartOptions = opts

// TS: { logScale: boolean; }' 유형에 'LineChartOptions' 유형과 공통적인 속성이 없습니다.

export default {}
