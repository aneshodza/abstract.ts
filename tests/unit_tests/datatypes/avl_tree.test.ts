import AVLTree from "@src/datatypes/AVLTree";
import User from "@tests/helpers/User";

let avlTree: AVLTree<User>;
let userA: User;
let userB: User;
let userC: User;
let userD: User;
let userE: User;

beforeEach(() => {
  avlTree = new AVLTree<User>((a: User, b: User) => a.id - b.id);
  userA = new User(3, "Alice");
  userB = new User(2, "Bob");
  userC = new User(6, "Charlie");
  userD = new User(4, "David");
  userE = new User(1, "Thomas");
});

test("Inserting into tree autobalances", () => {
  avlTree.insert(userE);
  avlTree.insert(userB);
  avlTree.insert(userA);
  expect(avlTree.getRoot()?.get()).toBe(userB);
  expect(avlTree.getRoot()?.getLeft()?.get()).toBe(userE);
  expect(avlTree.getRoot()?.getRight()?.get()).toBe(userA);

  avlTree.insert(userD);
  expect(avlTree.getRoot()?.get()).toBe(userB);
  expect(avlTree.getRoot()?.getLeft()?.get()).toBe(userE);
  expect(avlTree.getRoot()?.getRight()?.get()).toBe(userA);
  expect(avlTree.getRoot()?.getRight()?.getRight()?.get()).toBe(userD);

  avlTree.insert(userC);
  expect(avlTree.getRoot()?.get()).toBe(userB);
  expect(avlTree.getRoot()?.getLeft()?.get()).toBe(userE);
  console.log(avlTree.getRoot())
  expect(avlTree.getRoot()?.getRight()?.get()).toBe(userD);
  expect(avlTree.getRoot()?.getRight()?.getLeft()?.get()).toBe(userA);
  expect(avlTree.getRoot()?.getRight()?.getRight()?.get()).toBe(userC);
})
