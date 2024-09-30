import LinkedNode from "@src/datatypes/nodes/LinkedNode";

/**
 * This is the node subclass used by the `DoublyLinkedList` class.
 * It contains a reference to the next and previous nodes in the list.
 * **Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The `DoublyLinkedList` class holds all operations
 * needed to interact with the list.
 *
 * @extends LinkedNode
 */
class DoublyLinkedNode<T> extends LinkedNode<T> {
  private previous: DoublyLinkedNode<T> | null;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new DoublyLinkedNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
    this.previous = null;
  }

  /**
   * Sets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @param next - The next node in the list.
   * @example
   * ```
   * const node = new DoublyLinkedNode(5);
   * const nextNode = new DoublyLinkedNode(10);
   * node.linkNext(nextNode);
   * ```
   */
  linkNext(next: DoublyLinkedNode<T> | null) {
    super.linkNext(next);
  }

  /**
   * Gets the next node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The next node in the list.
   * @example
   * ```
   * const node = new DoublyLinkedNode(5);
   * const nextNode = new DoublyLinkedNode(10);
   * node.linkNext(nextNode);
   * node.getNext(); // nextNode
   * ```
   */
  getNext(): DoublyLinkedNode<T> | null {
    return super.getNext() as DoublyLinkedNode<T>;
  }

  /**
   * Sets the previous node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @param previous - The previous node in the list.
   * @example
   * ```
   * const node = new DoublyLinkedNode(5);
   * const previousNode = new DoublyLinkedNode(10);
   * node.linkPrevious(previousNode);
   * ```
   */
  linkPrevious(previous: DoublyLinkedNode<T> | null) {
    this.previous = previous;
  }

  /**
   * Gets the previous node in the list.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The previous node in the list.
   * @example
   * ```
   * const node = new DoublyLinkedNode(5);
   * const previousNode = new DoublyLinkedNode(10);
   * node.linkPrevious(previousNode)
   * node.getPrevious(); // previousNode;
   * ```
   */
  getPrevious(): DoublyLinkedNode<T> | null {
    return this.previous;
  }
}

export default DoublyLinkedNode;
