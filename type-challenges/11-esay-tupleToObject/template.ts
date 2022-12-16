// 只能传入as const 的数组
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// keyof Array  遍历索引 返回readonly ["0", "1", "2", "3"]  所以得用T[number]语法  能直接访问数组到属性
type test = '1' | 'a' | 1
type TEST = {
  [K in test]: K
}
// js
const tupleToObject = (array) => {
  const obj = {}
  array.forEach((item) => {
    obj[item] = item
  })
  return obj
}
