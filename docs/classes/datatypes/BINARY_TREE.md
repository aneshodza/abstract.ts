## Binary Tree
The Binary Tree data structure is implemented under the classname `BinaryTree`.

### Usage
The implementation supports a wide variety of operations. Below are a few use-cases.

##### Creating a new tree
```typescript
// Creating a binary tree
const comparator = () => a - b;
const binaryTree = new BinaryTree<number>(comparator);
```

##### Retrieving Information about the binary tree
```typescript
/* Functions meant for development purposes. Never use in prod */
/* =========================================================== */

// Testing the compare function
binaryTree.compare(a, b);

// Retrieving the root node
binaryTree.getRoot();

/* =========================================================== */

// Finding a certain item
// This would for example yield the user with id: 34
binaryTree.find(34); 

// Getting the amount of nodes in the tree
binaryTree.size();

// Checking if the tree is empty
binaryTree.isEmpty();
```

##### Mutating the contents of the tree
```typescript
// This inserts to the right spot
const user1 = { id: 43, username: 'hungy_man600' }
const user2 = { id: 23, username: 'stoopid_dance1' }
const user3 = { id: 63, username: 'chill_dude_man' }
const user4 = { id: 27, username: '1); DROP DATABASE; --' }
const binaryTree = new BinaryTree<User>((a, b) => a.id - b.id)
binaryTree.insert(user1);
binaryTree.insert(user2);
binaryTree.insert(user3);
binaryTree.insert(user4);

// After the inserts the tree's nodes automatically get
// arranged:
//                user1
//         user2         user3
//           user4
```

##### Iterating trough the tree
The `BinaryTree` class implements the [`Streamable` interface](../STREAMABLE.md)
```typescript
// The tree supports iteration
for (user in binaryTree) {
    console.log(user.username);
}

// Alternatively the iterator can be called explicitly
let stream = binaryTree.stream();
stream.next();
stream.next();
```
