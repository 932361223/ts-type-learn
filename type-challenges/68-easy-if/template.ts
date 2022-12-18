// tsconfig.json "strict": true  才成立
type If<C extends boolean, T, F> = C extends true ? T : F
// js
const If = (C, T, F) => {
  return C ? T : F
}

// "strict": false  返回 'true' 具体看README.MD 严格模式和非严格模式的区别
type a = null extends true ? 'true' : 'false'
