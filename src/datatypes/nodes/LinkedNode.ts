import Node from "@src/datatypes/nodes/Node";

/**
 * This is the node subclass used by the `LinkedList` class.
 * It contains a reference to the next node in the list.
 * **Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The `BinaryTree` class holds all operations
 * needed to interact with the tree.
 *
 * @extends Node
 * @typeparam T - The type of the value stored in the node.
 */
class LinkedNode<T> extends Node<T> {
  private next: LinkedNode<T> | null;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new LinkedNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
    this.next = null;
  }

  /**
   * Sets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @param next - The next node in the list.
   * @example
   * ```
   * const node = new LinkedNode(5);
   * const nextNode = new LinkedNode(10);
   * node.linkNext(nextNode);
   * ```
   */
  linkNext(next: LinkedNode<T> | null) {
    this.next = next;
  }

  /**
   * Gets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The next node in the list.
   * @example
   * ```
   * const node = new LinkedNode(5);
   * const nextNode = new LinkedNode(10);
   * node.linkNext(nextNode);
   * node.getNext(); // nextNode
   * ```
   */
  getNext(): LinkedNode<T> | null {
    return this.next;
  }
}

export default LinkedNode;
