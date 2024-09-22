import QueueNode from "@src/datatypes/nodes/QueueNode";
import Streamable from "@src/Streamable";

/**
 * This is a Queue data structure.
 * It contains a series of nodes in a list.
 * The Queue implements the LILO (Last in Last out) data structure,
 * meaning that the element first added to the list is also removed
 * last.
 */
class Queue<T> implements Streamable<T> {
  private head: QueueNode<T> | undefined;

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
    const node = this.#createNode(item);
    let current = this.head;

    if (current === undefined) {
      this.head = node;
      return;
    }

    let old = current;
    while (current !== undefined) {
      old = current;
      current = current.getNext();
    }
    old.linkNode(node);
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
    const first = this.head;
    if (first === undefined) {
      throw new Error("Queue is empty!");
    }

    this.head = first.getNext();
    return first.get();
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
    return this.head?.get();
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
    return this.head === undefined;
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

  #createNode(item: T) {
    return new QueueNode(item);
  }
}

export default Queue;
