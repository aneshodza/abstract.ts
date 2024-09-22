import Queue from "@src/datatypes/linked_list_wrappers/Queue";

let queue: Queue<number>;

beforeEach(() => {
  queue = new Queue<number>();
});

test("Enqueues successfully", () => {
  queue.enqueue(5);
  expect(queue.dequeue()).toBe(5);
});

test("Enqueues successfully multiple times", () => {
  queue.enqueue(5);
  queue.enqueue(10);
  expect(queue.dequeue()).toBe(5);
  expect(queue.dequeue()).toBe(10);
});

test("Removes item after dequeue", () => {
  queue.enqueue(5);
  expect(queue.dequeue()).toBe(5);
  expect(queue.peek()).toBe(undefined);
});

test("Throws an error if queue is empty on dequeue", () => {
  expect(() => queue.dequeue()).toThrow("Queue is empty!");
});

test("Returns item and doesnt remove it on peek", () => {
  queue.enqueue(5);
  expect(queue.peek()).toBe(5);
  expect(queue.peek()).toBe(5);
});

test("Stream returns items in order and leaves queue empty", () => {
  queue.enqueue(5);
  queue.enqueue(10);
  const stream = queue.stream();
  expect(stream.next().value).toBe(5);
  expect(stream.next().value).toBe(10);
  expect(queue.isEmpty()).toBe(true);
});

test("Allows for each loop on the queue", () => {
  queue.enqueue(5);
  queue.enqueue(10);
  let items = [];
  for (const item of queue) {
    items.push(item);
  }
  expect(items).toStrictEqual([5, 10]);
  expect(queue.isEmpty()).toBe(true);
});
