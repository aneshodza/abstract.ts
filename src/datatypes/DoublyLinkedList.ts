import DoublyLinkedNode from "@src/datatypes/nodes/DoublyLinkedNode";
import LinkedList from "@src/datatypes/LinkedList";

/**
 * This is a doubly linked list data structure.
 * It contains a series of nodes that are linked together.
 * This allows for efficient insertion and deletion.
 * The benefit of a doubly linked list compared to a singly linked list
 * is that it allows for traversal in both directions.
 * This reducses the time complexity of certain operations.
 *
 * @extends LinkedList
 * @template T The type of elements contained in each link.
 */
class DoublyLinkedList<T> extends LinkedList<T> {
  private tail: DoublyLinkedNode<T> | null;

  /**
   * Creates a new doubly linked list
   * @example
   * ```
   * const linkedList = new DoublyLinkedList();
   * ```
   */
  constructor() {
    super();
    this.tail = null;
  }

  /**
   * Gets the tail of the linked list.
   * This operation has a time complexity of `O(1)`.
   * @returns The tail of the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(10);
   *
   * linkedList.getTail(); // 10
   * ```
   */
  getTail() {
    return this.tail?.get();
  }

  /**
   * Insert a new node at the end of the linked list.
   * This operation has a time complexity of `O(1)`.
   * @param item - The item to insert.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(3);
   *
   * linkedList.getTail(1); // 3
   * ```
   */
  insertAtTail(item: T) {
    if (this.isEmpty()) {
      const node = this.#createNode(item);
      super.setHeadNode(node);
      this.tail = node;
    } else {
      const node = this.#createNode(item);
      const oldTail = this.tail!;

      oldTail.linkNext(node);
      node.linkPrevious(oldTail);
      this.tail = node;
    }
  }

  /**
   * Insert a new node at the beginning of the linked list.
   * This operation has a time complexity of `O(1)`.
   * @param item - The item to insert.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtHead(3);
   * linkedList.getHead(); // 3
   * ```
   */
  insertAtHead(item: T) {
    if (this.isEmpty()) {
      this.insertAtTail(item);
    } else {
      const oldHead = super.getHeadNode() as DoublyLinkedNode<T>;
      const node = this.#createNode(item);

      super.setHeadNode(node);
      node.linkNext(oldHead);
      oldHead.linkPrevious(node as DoublyLinkedNode<T>);
    }
  }

  /**
   * Insert a new node at a specific index of the linked list.
   * This operation has a time complexity of `O(n)`.
   * @param index - The index to insert the item at.
   * @param item - The item to insert.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(3);
   * linkedList.insertAtIndex(1, 10);
   * linkedList.get(1); // 10
   * ```
   */
  insertAtIndex(index: number, item: T) {
    if (index === 0) {
      this.insertAtHead(item);
      return;
    }

    const node = this.#createNode(item);
    let current: DoublyLinkedNode<T> | null = super
      .getHeadNode() as DoublyLinkedNode<T>;
    let headOfCurrent;

    for (let i = 0; i < index; i++) {
      headOfCurrent = current;
      current = current.getNext();

      if (current === null) {
        if (i + 1 === index && headOfCurrent !== null) {
          headOfCurrent.linkNext(node);
          node.linkPrevious(headOfCurrent);
          this.tail = node;
          return;
        } else {
          throw new Error("Index too far!");
        }
      }
    }

    const previous = current.getPrevious()!;
    previous.linkNext(node);
    current.linkPrevious(node);
    node.linkNext(current);
    node.linkPrevious(previous);
  }

  /**
   * Allows the linked list to be streamed back in order.
   * This operation has a time complexity of `O(n)`.
   * @returns A generator yielding the values in the tree in in-order.
   * @yields The next item in the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(3);
   * const stream = linkedList.stream();
   * stream.next(); // 3
   * stream.next(); // 5
   * ```
   */
  *streamBackwards() {
    let current = this.tail;
    while (current !== null) {
      yield current.get();
      current = current.getPrevious();
    }
  }

  #createNode(item: T) {
    return new DoublyLinkedNode(item);
  }
}

export default DoublyLinkedList;
