/**
 * This is a generic node used in many structures.
 * It simply contains a value and a method to retrieve
 * that value.
 *
 * This node should never directly be initialized. Instead,
 * it should be inherited from.
 * See `LinkedNode` as an example.
 */
class Node<T> {
  value: T;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new Node(5);
   * ```
   */
  constructor(value: T) {
    this.value = value;
  }

  /**
   * Gives the value contained in the node.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The value contained in the node.
   * @example
   * ```
   * const node = new Node(5);
   * node.get(); // 5
   * ```
   */
  get(): T {
    return this.value;
  }
}

export default Node;
