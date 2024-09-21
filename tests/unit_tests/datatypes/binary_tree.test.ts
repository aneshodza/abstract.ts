import BinaryTree from "@src/datatypes/BinaryTree";
import User from "@tests/helpers/User";

let binaryTree: BinaryTree<User>;
let userA: User;
let userB: User;
let userC: User;
let userD: User;
let userE: User;

beforeEach(() => {
  binaryTree = new BinaryTree((a: User, b: User) => a.id - b.id);
  userA = new User(3, "Alice");
  userB = new User(2, "Bob");
  userC = new User(6, "Charlie");
  userD = new User(4, "David");
  userE = new User(1, "Thomas");
});

test("Compare two users", () => {
  const comparison = binaryTree.compare(userA, userB);
  expect(comparison).toBe(1);
});

test("Insert user into tree", () => {
  binaryTree.insert(userA);
  binaryTree.insert(userB);
  binaryTree.insert(userC);
  binaryTree.insert(userD);
  binaryTree.insert(userE);
  const root = binaryTree.getRoot();
  expect(binaryTree.isEmpty()).toBeFalsy();
  expect(root?.get()).toBe(userA);
  expect(root?.getLeft()?.get()).toBe(userB);
  expect(root?.getRight()?.get()).toBe(userC);
  expect(root?.getRight()?.getLeft()?.get()).toBe(userD);
  expect(root?.getLeft()?.getLeft()?.get()).toBe(userE);
});

test("Retrieve user from tree", () => {
  binaryTree.insert(userA);
  binaryTree.insert(userB);
  binaryTree.insert(userC);
  binaryTree.insert(userD);

  expect(binaryTree.find(userD)).toBe(userD);
});

test("In Order traversal actually gives right order", () => {
  binaryTree.insert(userA);
  binaryTree.insert(userB);
  binaryTree.insert(userC);
  binaryTree.insert(userD);
  binaryTree.insert(userE);

  const items = []
  for (let item of binaryTree.stream()) {
    items.push(item);
  }

  expect(items).toEqual([userA, userB, userE, userC, userD]);
})

test("In Order traversal actually gives right order", () => {
  binaryTree.insert(userA);
  binaryTree.insert(userB);
  binaryTree.insert(userC);
  binaryTree.insert(userD);
  binaryTree.insert(userE);

  const items = []
  for (let item of binaryTree) {
    items.push(item);
  }

  expect(items).toEqual([userA, userB, userE, userC, userD]);
})

test("Size function gives back actual size", () => {
  binaryTree.insert(userA);
  binaryTree.insert(userB);
  binaryTree.insert(userC);
  binaryTree.insert(userD);
  binaryTree.insert(userE);

  expect(binaryTree.size()).toBe(5)
})
