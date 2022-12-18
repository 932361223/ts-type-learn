type Concat<A extends unknown[], B extends unknown[]> = [...A, ...B]
// js
const Concat = (A, B) => {
  return [...A, ...B]
}
