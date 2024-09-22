import QueueNode from "@src/datatypes/nodes/QueueNode";

let queueNode: QueueNode<number>;
let nextNode: QueueNode<number>;
beforeEach(() => {
  queueNode = new QueueNode(5);
  nextNode = new QueueNode(10);
});

test("Successfully links node", () => {
  queueNode.linkNode(nextNode);
  expect(queueNode.getNext()).toBe(nextNode);
});
