## Queue
The Queue data structure is implemented under the classname `Queue`.
It fully works under FIFO (First in First out), which means the API only
exposes queuing and dequeuing.  
This uses a Doubly Linked List in the background.

### Usage
The implementation supports a wide variety of operations. Below are a few use-cases.

##### Creating a new Queue
```typescript
// Creating a new Queue
const queue = new Queue<number>();
```

##### Retrieving information about the stack
```typescript
// Checking if the queue is empty
queue.isEmpty();

// Peeking the first element
queue.peek();
```

##### Mutating the contents of the Queue
```typescript
// Queuing a new element to the back
queue.enqueue(10);
queue.enqueue(5);

// Dequeuing an element from the front
queue.dequeue(); // 10
```

##### Iterating trough the Queue
The `Queue` class implements the [`Streamable` interface](../STREAMABLE.md)  
**Note:** Keep in mind that the stack iterates using the `dequeue` Method. That means
that iterating is a **destructive** action and discards used elements.
```typesript
// The list supports iteration
for (item in queue) {
    console.log(item);
}

// Alternatively the iterator can be called explicitly
let stream = queue.stream()
stream.next();
stream.next();
```
