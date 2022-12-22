// type MyAwaited<T> = T extends Promise<infer X>
//   ? X extends Promise<unknown>
//     ? MyAwaited<X>
//     : X
//   :

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never

// 精简后的PromiseLike
interface MyPromiseLike<T> {
  then<TResult1 = T>(
    onfulfilled?: (value: T) => TResult1
  ): MyPromiseLike<TResult1>
}

type TRY<T> = T extends MyPromiseLike<infer U> ? U : never

type g = TRY<{ then: (onfulfilled: (arg: number) => any) => any }>
