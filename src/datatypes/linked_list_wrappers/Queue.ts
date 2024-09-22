import Streamable from "@src/Streamable";
import LinkedList from "@src/datatypes/LinkedList";

/**
 * This is a Queue data structure.
 * It contains a series of nodes in a list.
 * The Queue implements the LILO (Last in Last out) data structure,
 * meaning that the element first added to the list is also removed
 * last.
 */
class Queue<T> implements Streamable<T> {
  private linkedList: LinkedList<T>;

  /**
   * Creates a new Queue
   * @example
   * ```
   * const queue = new Queue<number>();
   * ```
   */
  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  /**
   * Adds an item to the end of the queue.
   * This operation has a time complexity of `O(n)`.
   *
   * @param item - The item to add to the queue.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.enqueue(5);
   * queue.enqueue(10);
   * ```
   */
  enqueue(item: T) {
    this.linkedList.insertAtTail(item);
  }

  /**
   * Removes an item from the front of the queue.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The item at the front of the queue.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.enqueue(5);
   * queue.dequeue(); // 5
   * ```
   */
  dequeue() {
    try {
      return this.linkedList.removeAtHead();
    } catch (e) {
      throw new Error("Queue is empty!");
    }
  }

  /**
   * Peeks at the item at the front of the queue.
   * This operation has a time complexity of `O(1)`.
   * @returns The item at the front of the queue.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.enqueue(5);
   * queue.peek(); // 5
   * ```
   */
  peek() {
    return this.linkedList.getHead();
  }

  /**
   * Checks if the queue is empty.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns A boolean indicating if the queue is empty.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.isEmpty(); // true
   * queue.enqueue(5);
   * queue.isEmpty(); // false
   * ```
   */
  isEmpty() {
    return this.linkedList.isEmpty();
  }

  /**
   * Streams the items in the queue.
   * This operation has a time complexity of `O(n)`.
   * **Important:** This operation consumes the queue.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.enqueue(5);
   * queue.enqueue(10);
   * for (const item of queue.stream()) {
   *  console.log(item); // 5, 10
   * }
   * queue.isEmpty(); // true
   * ```
   */
  *stream() {
    while (!this.isEmpty()) {
      yield this.dequeue();
    }
  }

  /**
   * Streams the items in the queue.
   * This operation has a time complexity of `O(n)`.
   * **Important:** This operation consumes the queue.
   * @example
   * ```
   * const queue = new Queue<number>();
   * queue.enqueue(5);
   * queue.enqueue(10);
   * for (const item of queue) {
   *  console.log(item); // 5, 10
   * }
   * queue.isEmpty(); // true
   * ```
   */
  *[Symbol.iterator]() {
    yield* this.stream();
  }
}

export default Queue;
