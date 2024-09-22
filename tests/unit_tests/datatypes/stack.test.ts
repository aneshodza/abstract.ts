import Stack from "@src/datatypes/Stack";

let stack: Stack<number>;
beforeEach(() => {
  stack = new Stack();
});

test("Pushes successfully", () => {
  stack.push(5);
  expect(stack.pop()).toBe(5);
});

test("Pushes successfully multiple times", () => {
  stack.push(5);
  stack.push(10);
  expect(stack.pop()).toBe(10);
  expect(stack.pop()).toBe(5);
});

test("Removes item after pop", () => {
  stack.push(5);
  expect(stack.pop()).toBe(5);
  expect(stack.peek()).toBe(undefined);
});

test("Throws an error if stack is empty on pop", () => {
  expect(() => stack.pop()).toThrow("Stack is empty!");
});

test("Returns item and doesnt remove it on peek", () => {
  stack.push(5);
  expect(stack.peek()).toBe(5);
  expect(stack.peek()).toBe(5);
});

test("Gives undefined if stack is empty on peek", () => {
  expect(stack.peek()).toBe(undefined);
});

test("isEmpty returns true if stack is empty", () => {
  expect(stack.isEmpty()).toBe(true);
});

test("isEmpty returns false if stack is not empty", () => {
  stack.push(5);
  expect(stack.isEmpty()).toBe(false);
});

test("Stream returns items in order and leaves stack empty", () => {
  stack.push(5);
  stack.push(10);
  const stream = stack.stream();
  expect(stream.next().value).toBe(10);
  expect(stream.next().value).toBe(5);
  expect(stack.isEmpty()).toBe(true);
});

test("Allows for each loop on the stack", () => {
  stack.push(5);
  stack.push(10);
  let items = [];
  for (const item of stack) {
    items.push(item);
  }
  expect(items).toStrictEqual([10, 5]);
  expect(stack.isEmpty()).toBe(true);
});
