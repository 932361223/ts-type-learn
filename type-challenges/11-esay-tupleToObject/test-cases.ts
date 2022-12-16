// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

const tuple1 = ['tesla', 'model 3', 'model X', 'model Y']
type tu = typeof tuple //readonly ["tesla", "model 3", "model X", "model Y"] 字面量类型
type tu1 = typeof tuple1 // string[]
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: 'tesla'
        'model 3': 'model 3'
        'model X': 'model X'
        'model Y': 'model Y'
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>
  >
]

type test = [[1, 2], {}] //<> 里面是个类型不需要typeof
// @ts-expect-error  错误注释 使下面能正常编译 对象中key 不能为对象
type error = TupleToObject<[[1, 2], {}]>
