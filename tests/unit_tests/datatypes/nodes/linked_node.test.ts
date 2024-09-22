import LinkedNode from "@src/datatypes/nodes/LinkedNode";

let linkedNode: LinkedNode<number>;
let nextNode: LinkedNode<number>;
beforeEach(() => {
  linkedNode = new LinkedNode(5);
  nextNode = new LinkedNode(10);
});

test("Successfully links node", () => {
  linkedNode.linkNext(nextNode);
  expect(linkedNode.getNext()).toBe(nextNode);
});
