type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
// js
const MyOmit = (T, K) => {
  const obj = {}
  delete T[K]
  for (const key in T) {
    obj[key] = T[key]
  }
  return obj
}
