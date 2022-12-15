import { Equal, Expect } from '@type-challenges/utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar'
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
