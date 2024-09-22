import LinkedList from "@src/datatypes/LinkedList";

let linkedList: LinkedList<number>;
beforeEach(() => {
  linkedList = new LinkedList();
});

test("Inserts successfully at head and also gets value", () => {
  linkedList.insertAtHead(5);
  expect(linkedList.get(0)).toBe(5);
});

test("getHead() returns value when head defined", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtHead(6);
  expect(linkedList.getHead()).toBe(5);
});

test("getHead() returns undefined when empty", () => {
  expect(linkedList.getHead()).toBe(undefined);
});

test("Replaces head and moves back new value if head already defined", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtHead(3);
  expect(linkedList.get(0)).toBe(3);
  expect(linkedList.get(1)).toBe(5);
});

test("Inserts at tail successfully and also gets value", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtTail(3);
  expect(linkedList.get(1)).toBe(3);
});

test("Inserts at a specific index successfully", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtTail(3);
  linkedList.insertAtIndex(1, 10);
  expect(linkedList.get(1)).toBe(10);
  expect(linkedList.get(2)).toBe(3);
});

test("Throws an error if index is too far on getting one too far", () => {
  linkedList.insertAtHead(5);
  expect(() => linkedList.get(1)).toThrow("Index too far!");
});

test("Throws an error if index is too far on getting in empty list", () => {
  expect(() => linkedList.get(0)).toThrow("Index too far!");
});

test("Throws an error if index is too far on getting way too far", () => {
  linkedList.insertAtHead(5);
  expect(() => linkedList.get(7)).toThrow("Index too far!");
});

test("Insert at tail when head is undefined", () => {
  linkedList.insertAtTail(5);
  expect(linkedList.get(0)).toBe(5);
});

test("Insert at tail multiple times", () => {
  linkedList.insertAtTail(5);
  linkedList.insertAtTail(10);
  linkedList.insertAtTail(15);
  expect(linkedList.get(0)).toBe(5);
  expect(linkedList.get(1)).toBe(10);
  expect(linkedList.get(2)).toBe(15);
});

test("Insert at index 0", () => {
  linkedList.insertAtIndex(0, 5);
  expect(linkedList.get(0)).toBe(5);
});

test("Insert at index thats too far throws error", () => {
  expect(() => linkedList.insertAtIndex(1, 5)).toThrow("Index too far!");
});

test("isEmpty returns true when empty", () => {
  expect(linkedList.isEmpty()).toBe(true);
});

test("isEmpty returns false when not empty", () => {
  linkedList.insertAtHead(5);
  expect(linkedList.isEmpty()).toBe(false);
});

test("size() returns 0 when empty", () => {
  expect(linkedList.size()).toBe(0);
});

test("size() returns 1 when one element", () => {
  linkedList.insertAtHead(5);
  expect(linkedList.size()).toBe(1);
});

test("removeAtHead() removes head", () => {
  linkedList.insertAtHead(5);
  linkedList.removeAtHead();
  expect(linkedList.isEmpty()).toBe(true);
});

test("Remove at head throws error when empty", () => {
  expect(() => linkedList.removeAtHead()).toThrow("Linked list is empty!");
});

test("Remove at head returns value", () => {
  linkedList.insertAtHead(5);
  expect(linkedList.removeAtHead()).toBe(5);
});

test("Remove at head changes head", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtHead(10);
  linkedList.removeAtHead();
  expect(linkedList.get(0)).toBe(5);
});

test("stream() returns iterator", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtTail(10);
  linkedList.insertAtTail(15);
  const array = [0];
  for (const node of linkedList.stream()) {
    array.push(node);
  }
  expect(array).toEqual([0, 5, 10, 15]);
});

test("Linked list is iterable", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtTail(10);
  linkedList.insertAtTail(15);
  const array = [0];
  for (const node of linkedList) {
    array.push(node);
  }
  expect(array).toEqual([0, 5, 10, 15]);
});

test("reverse() reverses the list", () => {
  linkedList.insertAtHead(5);
  linkedList.insertAtTail(10);
  linkedList.insertAtTail(15);

  linkedList.reverse();
  const array = [0];
  for (const item of linkedList.stream()) {
    array.push(item);
  }
  expect(array).toEqual([0, 15, 10, 5]);
});

test("reverse() on empty list does nothing", () => {
  linkedList.reverse();
  expect(linkedList.isEmpty()).toBe(true);
});
