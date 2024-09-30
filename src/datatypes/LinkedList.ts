import LinkedNode from "@src/datatypes/nodes/LinkedNode";
import Streamable from "@src/Streamable";

/**
 * This is a linked list data structure.
 * It contains a series of nodes that are linked together.
 * This allows for efficient insertion and deletion.
 *
 * @template T The type of elements contained in each link.
 */
class LinkedList<T> implements Streamable<T> {
  private head: LinkedNode<T> | null;

  /**
   * Creates a new linked list.
   * This operation has a time complexity of `O(1)`.
   * @example
   * ```
   * const linkedList = new LinkedList<number>();
   * ```
   */
  constructor() {
    this.head = null;
  }

  /**
   * Gets the head of the linked list.
   * This operation has a time complexity of `O(1)`.
   * @returns The head of the linked list.
   * @example
   * ```
   * const linkedList = new LinkedList<number>();
   * linkedList.insertAtHead(5);
   * linkedList.getHead(); // 5
   * ```
   */
  getHead() {
    return this.head?.get();
  }

  /**
   * Gets a node at a specific index.
   * This operation has a time complexity of `O(n)`.
   *
   * @param index - The index to get the node at.
   * @returns The node at the index.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   *
   * linkedList.get(0); // 5
   * ```
   */
  get(index: number): T {
    return this.#doGet(index, this.head);
  }

  #doGet(index: number, current: LinkedNode<T> | null): T {
    if (current === null) {
      throw new Error("Index too far!");
    } else if (index === 0) {
      return current.get();
    }
    return this.#doGet(index - 1, current.getNext());
  }

  /**
   * Insert a new node at the end of the linked list.
   * This operation has a time complexity of `O(n)`.
   *
   * @param item - The item to insert.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(3);
   *
   * linkedList.get(1) // 3
   * ```
   */
  insertAtTail(item: T): void {
    if (this.head === null) {
      this.insertAtHead(item);
      return;
    }
    this.#doInsertAtTail(item, this.head);
  }

  #doInsertAtTail(item: T, current: LinkedNode<T> | null): void {
    if (current!.getNext() === null) {
      current!.linkNext(this.#createNode(item));
      return;
    } else {
      this.#doInsertAtTail(item, current!.getNext());
    }
  }

  /**
   * Insert a new node at the head of the linked list.
   * This operation has a time complexity of `O(1)`.
   *
   * @param item - The item to insert.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   *
   * linkedList.get(0); // 5
   * ```
   */
  insertAtHead(item: T) {
    const newNode = this.#createNode(item);
    if (this.head !== null) {
      newNode.linkNext(this.head);
    }
    this.head = newNode;
  }

  /**
   * Insert a new node at a specific index of the linked list.
   * This operation has a time complexity of `O(n)`.
   *
   * @param item - The item to insert.
   * @param index - The index to insert the item at.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtTail(3);
   * linkedList.insertAtIndex(1, 10);
   *
   * linkedList.get(1); // 10
   * linkedList.get(2); // 3
   * ```
   */
  insertAtIndex(index: number, item: T) {
    if (index === 0) {
      this.insertAtHead(item);
      return;
    }

    this.#doInsertAtIndex(index, item, this.head, null);
  }

  #doInsertAtIndex(
    index: number,
    item: T,
    current: LinkedNode<T> | null,
    headOfCurrent: LinkedNode<T> | null,
  ): void {
    if (current === null) {
      if (index === 0 && headOfCurrent !== null) {
        headOfCurrent.linkNext(this.#createNode(item));
        return;
      }
      throw new Error("Index too far!");
    } else if (index === 0) {
      const newNode = this.#createNode(item);
      newNode.linkNext(current);
      headOfCurrent!.linkNext(newNode);
      return;
    }
    this.#doInsertAtIndex(index - 1, item, current.getNext(), current);
    return;
  }

  /**
   * Checks if the linked list is empty.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns True if the linked list is empty, false otherwise.
   * @example
   * ```
   * linkedList.isEmpty(); // true
   * linkedList.insertAtHead(5);
   *
   * linkedList.isEmpty(); // false
   * ```
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Gives the size of the linked list.
   * This operation has a time complexity of `O(n)`.
   *
   * @returns The size of the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtHead(10);
   *
   * linkedList.size(); // 2
   * ```
   */
  size() {
    return this.#doSize(this.head);
  }

  #doSize(current: LinkedNode<T> | null): number {
    if (current === null) {
      return 0;
    }
    return 1 + this.#doSize(current.getNext());
  }

  /**
   * Reverses the linked list.
   * This operation has a time complexity of `O(n)`.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtHead(10);
   * linkedList.reverse();
   *
   * linkedList.get(0); // 5
   * linkedList.get(1); // 10
   * ```
   */
  reverse() {
    this.#doReverse(this.head);
  }

  #doReverse(current: LinkedNode<T> | null) {
    if (current === null) {
      return;
    } else if (current.getNext() === null) {
      this.head = current;
      return current;
    }
    const next = this.#doReverse(current.getNext());
    next!.linkNext(current);
    current.linkNext(null);

    return current;
  }

  /**
   * Removes the node at the head of the linked list.
   * This operation has a time complexity of `O(1)`.
   * @returns The item at the head of the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   *
   * linkedList.removeAtHead(); // 5
   * ```
   */
  removeAtHead() {
    if (this.head === null) {
      throw new Error("Linked list is empty!");
    }
    const node = this.head;
    this.head = this.head.getNext();
    return node.get();
  }

  /**
   * Returns an iterator containing all the items in the linked list.
   * This operation has a time complexity of `O(n)`.
   * @returns A generator yielding the values in the tree in in-order.
   * @yields The next item in the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtHead(10);
   *
   * for (const item of linkedList.stream()) {
   *   console.log(item); // 10, 5
   * }
   * ```
   */
  *stream(): Generator<T, void, unknown> {
    yield* this.#doStream(this.head);
  }

  *#doStream(node: LinkedNode<T> | null): Generator<T, void, unknown> {
    if (node !== null) {
      yield node.get();
      yield* this.#doStream(node.getNext());
    }
  }

  /**
   * Returns an iterator containing all the items in the linked list.
   * This operation has a time complexity of `O(n)`.
   * @returns A generator yielding the values in the tree in in-order.
   * @yields The next item in the linked list.
   * @example
   * ```
   * linkedList.insertAtHead(5);
   * linkedList.insertAtHead(10);
   *
   * for (const item of linkedList) {
   *   console.log(item); // 10, 5
   * }
   * ```
   */
  *[Symbol.iterator]() {
    yield* this.stream();
  }

  protected getHeadNode() {
    return this.head;
  }

  protected setHeadNode(head: LinkedNode<T> | null) {
    this.head = head;
  }

  #createNode(item: T) {
    return new LinkedNode(item);
  }
}

export default LinkedList;
