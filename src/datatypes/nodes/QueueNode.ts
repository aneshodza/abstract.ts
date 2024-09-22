import Node from "@src/datatypes/nodes/Node";

/**
 * This is the node subclass used by the `Queue` class.
 * It contains a reference to the next node in the list.
 * **Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The `Queue` class holds all operations
 * needed to interact with the queue.
 *
 * @extends Node
 * @template T The type of elements contained in each node.
 */
class QueueNode<T> extends Node<T> {
  next: QueueNode<T> | undefined;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new QueueNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
  }

  /**
   * Sets the next node in the queue.
   * This operation has a time complexity of `O(1)`.
   *
   * @param node - The next node in the queue.
   * @example
   * ```
   * const node = new QueueNode(5);
   * const nextNode = new QueueNode(10);
   * node.linkNode(nextNode);
   * ```
   */
  linkNode(node: QueueNode<T>) {
    this.next = node;
  }

  /**
   * Retrieves the next node in the queue.
   * This operation has a time complexity of `O(1)`.
   * @returns The next node in the queue.
   * @example
   * ```
   * const node = new QueueNode(5);
   * const nextNode = new QueueNode(10);
   * node.linkNode(nextNode);
   * node.getNext(); // nextNode
   * ```
   */
  getNext() {
    return this.next;
  }
}

export default QueueNode;
