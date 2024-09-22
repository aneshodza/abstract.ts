import Streamable from "@src/Streamable";
import LinkedList from "@src/datatypes/LinkedList";

/**
 * This is a Stack data structure.
 * It contains a series of nodes that are linked together.
 * This allows for efficient insertion and deletion at the top.
 * The Queue uses a linked list to store the elements, which allows
 * for low time complexities on all operations.
 *
 * @typeparam T - The type of the value stored in the stack.
 */
class Stack<T> implements Streamable<T> {
  private linkedList: LinkedList<T>;

  /**
   * Creates a new Stack
   * @example
   * ```
   * const stack = new Stack<number>();
   * ```
   */
  constructor() {
    this.linkedList = new LinkedList<T>();
  }

  /**
   * Pushes a new node to the top of the stack.
   * This operation has a time complexity of `O(1)`.
   * @param item - The item to push.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.push(5);
   * ```
   */
  push(item: T) {
    this.linkedList.insertAtHead(item);
  }

  /**
   * Pops the top node from the stack.
   * This operation has a time complexity of `O(1)`.
   * @returns The item at the top of the stack.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.push(5);
   * stack.pop(); // 5
   * ```
   */
  pop() {
    try {
      return this.linkedList.removeAtHead();
    } catch (e) {
      throw new Error("Stack is empty!");
    }
  }

  /**
   * Peeks at the top node of the stack.
   * This operation has a time complexity of `O(1)`.
   * @returns The item at the top of the stack.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.push(5);
   * stack.peek(); // 5
   * ```
   */
  peek() {
    return this.linkedList.getHead();
  }

  /**
   * Checks if the stack is empty.
   * This operation has a time complexity of `O(1)`.
   * @returns Whether the stack is empty.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.isEmpty (); // true
   * stack.push(5);
   * stack.isEmpty(); // false
   * ```
   */
  isEmpty() {
    return this.linkedList.isEmpty();
  }

  /**
   * Streams the elements of the stack.
   * This operation has a time complexity of `O(n)`.
   * **Important:** This also pops the returned elements
   * from the stack as they are streamed.
   * @returns A generator yielding the values in the tree in in-order.
   * @yields The next item in the linked list.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.push(5);
   * stack.push(10);
   * for (const item of stack.stream()) {
   *   console.log(item); // 10, 5
   * }
   * stack.isEmpty(); // true
   * ```
   */
  *stream() {
    while (!this.isEmpty()) {
      yield this.pop();
    }
  }

  /**
   * Streams the elements of the stack.
   * This operation has a time complexity of `O(n)`.
   * **Important:** This also pops the returned elements
   * from the stack as they are streamed.
   * @returns A generator yielding the values in the tree in in-order.
   * @yields The next item in the linked list.
   * @example
   * ```
   * const stack = new Stack<number>();
   * stack.push(5);
   * stack.push(10));
   * for (const item of stack) {
   *   console.log(item); // 10, 5
   * }
   * stack.isEmpty(); // true
   * ```
   */
  *[Symbol.iterator]() {
    yield* this.stream();
  }
}

export default Stack;
