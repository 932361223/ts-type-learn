import { Equal } from '@type-challenges/utils'

export type Includes<T extends any[], K> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, K> extends true
    ? true
    : Includes<Rest, K>
  : false
// js
const Includes = (T, K) => {
  function deep(T, K) {
    if (T.length === 0) return false
    const [first, ...rest] = T
    if (first === K) {
      return true
    } else {
      deep(rest, K)
    }
  }
  return deep(T, K)
}
