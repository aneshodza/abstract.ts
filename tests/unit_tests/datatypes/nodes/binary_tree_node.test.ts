import BinaryTreeNode from "@src/datatypes/nodes/BinaryTreeNode";

let binaryTreeNode: BinaryTreeNode<number>;
let leftChild: BinaryTreeNode<number>;
let rightChild: BinaryTreeNode<number>;
beforeEach(() => {
  binaryTreeNode = new BinaryTreeNode(5);
  leftChild = new BinaryTreeNode(10);
  rightChild = new BinaryTreeNode(15);
});

test("Successfully sets left child", () => {
  binaryTreeNode.setLeft(leftChild);
  expect(binaryTreeNode.getLeft()).toBe(leftChild);
});

test("Successfully sets right child", () => {
  binaryTreeNode.setRight(rightChild);
  expect(binaryTreeNode.getRight()).toBe(rightChild);
});
