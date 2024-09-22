import StackNode from "@src/datatypes/nodes/StackNode";

let stackNode: StackNode<number>;
let nextNode: StackNode<number>;
beforeEach(() => {
  stackNode = new StackNode(5);
  nextNode = new StackNode(10);
});

test("Successfully links node", () => {
  stackNode.linkNode(nextNode);
  expect(stackNode.getNext()).toBe(nextNode);
});
