// 콤마 기준으로 좌측의 타입에서 우측의 타입을 제외한다.
type T = Exclude<string | Date, string | number>
type NonZeroNums = Exclude<number, 0>

export default {}
