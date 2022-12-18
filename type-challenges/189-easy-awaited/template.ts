// type MyAwaited<T> = T extends Promise<infer X>
//   ? X extends Promise<unknown>
//     ? MyAwaited<X>
//     : X
//   : never
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never

type TRY<T> = T extends PromiseLike<infer U> ? U : never

type g = TRY<{ then: (onfulfilled: (arg: number) => any) => any }>
