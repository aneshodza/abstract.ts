## The Streamable Interface
The `Streamable` interface is implemented by certain datatypes, which allows them to be used in `for-each` loops.

### Usage
If we for example have a class that `implements` the `interface`:
```typescript
class Example<T> implements Streamable<T> {
    // ...
}
const iterable: Iterable = new Example<number>(/* ... */);
```

This instance can now be iterated trough:
```typescript
for (iteration in iterable) {
    console.log(iteration) // Logs the number
}
```

The generator can also explicitly be retrieved:
```typescript
const generator = Example.stream();

generator.next();
generator.next();
// ...
```

### Implementation
The interface forces two methods:
```typescript
interface Streamable<T> {
  stream(): Generator<T, void, unknown>;

  [Symbol.iterator](): Generator<T, void, unknown>;
}
```
Both of these methods do the same thing and just force the
implementing classes to have a more explicit way to expose
the `Generator<T, void, unknown>`. When implementing the class
should just use one to call the other one.  
An example from `LinkedList`:
```typescript
class LinkedList<T> implements Streamable<T> {
  // ...
  // The actual method that defines the stream:
  *stream(): Generator<T, void, unknown> {
    let current = this.head;
    while (current !== undefined) {
      yield current.get();
      current = current.getNext();
    }
  }

  // Then the iterator just calls yield* on the stream:
  *[Symbol.iterator]() {
    yield* this.stream();
  }
```

