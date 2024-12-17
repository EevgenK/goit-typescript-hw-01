function merge<
  T extends Record<string, unknown>,
  U extends Record<string, unknown>
>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
