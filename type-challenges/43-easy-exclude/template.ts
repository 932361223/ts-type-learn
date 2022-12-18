type MyExclude<T, U> = T extends U ? never : T

type a = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>

// js
const myExclude = (T = ['a', 'b', 'c'], U = ['a', 'b']) => {
  const result = []
  T.forEach((item) => {
    if (!U.includes(item)) result.push(item)
  })
  return result // ["c"]
}
