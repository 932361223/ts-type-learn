type Length<T extends readonly any[]> = T['length']
// js
const lengthFun = (array) => {
  if (!Array.isArray(array)) return
  return array.length
}
