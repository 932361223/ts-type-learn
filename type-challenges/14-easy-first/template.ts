// ts
// 解法一： extends 类型条件判断
type First1<T extends any[]> = T extends [] ? never : T[0] // 此时[] 是个写死的类型，相当于'[]' T === []
// 解法二 获取 tuple 的 length 属性  indexed
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 解法三 extends union  判断的规则
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never
type ages = [1, 2, 3]
type t = ages[number]
// 解法四 inter 的使用(推断)
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never

// js
// 解法一 解法二
const first12 = (array) => {
  if (array.length === 0) return 'never'
  return array[0]
}
// 解法三
const first3 = (array = [1, 2, 3]) => {
  // [1,2,3]
  return array.includes(array[0]) ? array[0] : 'never'
}
// 解法四
const first4 = (array = [1, 2, 3]) => {
  const [first, ...rest] = array
  return first ?? 'never'
}
