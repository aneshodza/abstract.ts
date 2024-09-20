import Node from "@src/datatypes/nodes/Node";

let node: Node<number>;
beforeEach(() => {
  node = new Node(5);
});

test("Retrieves value as should", () => {
  expect(node.get()).toBe(5);
});
