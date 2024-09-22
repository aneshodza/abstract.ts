## Stack
The Stack data structure is implemented under the classname `Stack`.  
It fully works under LIFO (First in First out), which means the API only
exposes pushing and popping.
This uses a Linked List in the background.

### Usage
The implementation supports a wide variaty of operations. Below are a few use-cases.

##### Creating a new Stack
```typescript
// Creating a Stack
const stack = new Stack<number>();
```

##### Retrieving information about the Stack
```typescript
// Checking if the stack is empty
stack.isEmpty();

// Peeking the first element
stack.peek();
```

##### Mutating the contents of the Stack
```typescript
// Pushing a new element to the top:
stack.push(10);
stack.push(5)

// Popping that same element off of the stack:
stack.pop(); // 5
```

##### Iterating trough the Stack
The `Stack` class implements the [`Streamable` interface](../STREAMABLE.md)  
**Note:** Keep in mind that the stack iterates using the `pop` Method. That means
that iterating is a **destructive** action and discards used elements.
```typesript
// The list supports iteration
for (item in stack) {
    console.log(item);
}

// Alternatively the iterator can be called explicitly
let stream = stack.stream()
stream.next();
stream.next();
```
