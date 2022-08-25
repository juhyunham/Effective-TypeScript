const list: [number, number] = [1, 2] // type is number[]
const tuple: [number, number] = list

// TS : 'number[]' 형식은 '[number, number]' 형식에 할당할 수 없습니다.
// 대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다.
