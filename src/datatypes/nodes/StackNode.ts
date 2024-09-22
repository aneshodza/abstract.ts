import Node from '@src/datatypes/nodes/Node';

/**
 * Represents a node in a `Stack` data structure.
 * This class is used to store individual elements within a stack, 
 * along with a reference to the next node in the stack.
 *
 * **Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The `Stack` class holds all operations
 * needed to interact with the tree.
 *
 * @extends Node
 */
class StackNode<T> extends Node<T> {
  private next: StackNode<T> | undefined;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new StackNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
  }

  /**
   * Sets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @param next - The next node in the list.
   * @example
   * ```
   * const node = new StackNode(5);
   * const nextNode = new StackNode(10);
   * node.linkNode(nextNode);
   * ```
   */
  linkNode(next: StackNode<T> | undefined) {
    this.next = next;
  }

  /**
   * Gets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The next node in the list.
   * @example
   * ```
   * const node = new StackNode(5);
   * const nextNode = new StackNode(10);
   * node.linkNode(nextNode);
   * node.getNext(); // nextNode
   * ```
   */
  getNext(): StackNode<T> | undefined {
    return this.next;
  }
}

export default StackNode;
