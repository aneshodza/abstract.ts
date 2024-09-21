## Linked List
The Linked List is implemented under the classname `LinkedList`.

### Usage
The implementation supports a wide variety of operations. Below are a few use-cases.

##### Creating a new list
```typescript
// Creating a linked list
const linkedList = new LinkedList()<number>;
```

##### Retrieving information about the list
```typescript
// Checking if the list is empty
linkedList.isEmpty()

// Retrieving the size
linkedList.size()

// Retrieving an element at a specific index
linkedList.get(3) // 10
```

##### Mutating the contents of our list
```typescript
// Inserting elements at the head
linkedList.insertAtHead(2); // [2]
linkedList.insertAtHead(4); // [4, 2]

// Inserting elements at the tail
linkedList.insertAtTail(3); // [4, 2, 3]

// Inserting elements at a specific index
linkedList.insertAtIndex(3, 10) // [4, 2, 10, 3]

// Reversing the list
linkedList.reverse() // [3, 10, 2, 4]
```

##### Iterating trough the list
```typescript
// The list supports iteration
for (node in linkedList) {
    console.log(node.get());
}

// Alternatively the iterator can be called explicitly
let stream = linkedList.stream()
stream.next();
stream.next();
```
