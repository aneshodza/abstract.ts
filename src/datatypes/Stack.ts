import StackNode from "@src/datatypes/nodes/StackNode";
import Streamable from "@src/Streamable";

/**
 * This is a Stack data structure.
 * It contains a series of nodes that are linked together.
 * This allows for efficient insertion and deletion at the top.
 *
 * @template T The type of elements contained in each link.
 */
class Stack<T> implements Streamable<T> {
  private top: StackNode<T> | undefined;

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
    const node = this.#createNode(item);
    const oldTop = this.top;

    if (oldTop === undefined) {
      this.top = node;
    } else {
      this.top = node;
      node.linkNode(oldTop);
    }
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
    const oldTop = this.top;
    if (oldTop === undefined) {
      throw new Error("Stack is empty!");
    }
    this.top = oldTop.getNext();
    return oldTop.get();
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
    if (this.top !== undefined) {
      return this.top.get();
    }
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
    return this.top === undefined;
  }

  /**
   * Streams the elements of the stack.
   * This operation has a time complexity of `O(n)`.
   * **Important:** This also pops the returned elements
   * from the stack as they are streamed.
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

  #createNode(item: T) {
    return new StackNode(item);
  }
}

export default Stack;
