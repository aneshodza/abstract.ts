import DoublyLinkedList from "@src/datatypes/DoublyLinkedList";

let doublyLinkedList: DoublyLinkedList<number>;
beforeEach(() => {
  doublyLinkedList = new DoublyLinkedList<number>();
});

test("Inserts at tail successfully and also gets value", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtTail(3);
  expect(doublyLinkedList.get(1)).toBe(3);
});

test("Get tail returns tail", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtTail(3);
  expect(doublyLinkedList.getTail()).toBe(3);
});

test("Get tail returns undefined when no elements", () => {
  expect(doublyLinkedList.getTail()).toBeUndefined();
});

test("Inserts at a specific index successfully", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtTail(3);
  doublyLinkedList.insertAtIndex(1, 10);
  expect(doublyLinkedList.get(1)).toBe(10);
  expect(doublyLinkedList.get(2)).toBe(3);
});

test("Inserts at head successfully and also gets value", () => {
  doublyLinkedList.insertAtHead(5);
  expect(doublyLinkedList.get(0)).toBe(5);
});

test("Inserting one above head replaces head", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtIndex(0, 3);
  expect(doublyLinkedList.get(0)).toBe(3);
  expect(doublyLinkedList.get(1)).toBe(5);
});

test("Insert one after tail replaces tail", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtTail(3);
  doublyLinkedList.insertAtIndex(2, 10);
  expect(doublyLinkedList.get(2)).toBe(10);
});

test("Inserting too far throws error", () => {
  doublyLinkedList.insertAtHead(5);
  expect(() => doublyLinkedList.insertAtIndex(2, 10)).toThrow("Index too far!");
});

test("Streaming backwards works and doesnt affect list", () => {
  doublyLinkedList.insertAtHead(5);
  doublyLinkedList.insertAtTail(3);
  const stream = doublyLinkedList.streamBackwards();
  expect(stream.next().value).toBe(3);
  expect(stream.next().value).toBe(5);
  expect(doublyLinkedList.isEmpty()).toBe(false);
});
