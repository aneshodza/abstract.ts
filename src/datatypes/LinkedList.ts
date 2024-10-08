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
  private head: LinkedNode<T> | undefined;

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
  get(index: number) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      if (current === undefined) {
        throw new Error("Index too far!");
      }
      current = current.getNext();
    }

    if (current === undefined) {
      throw new Error("Index too far!");
    }
    return current.get();
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
  insertAtTail(item: T) {
    if (this.head === undefined) {
      return this.insertAtHead(item);
    }

    const newNode = this.#createNode(item);
    let current = this.head;
    while (current.getNext() !== undefined) {
      current = current.getNext()!;
    }
    current.linkNext(newNode);
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
    if (this.head !== undefined) {
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

    const newNode = this.#createNode(item);
    let currentNode: LinkedNode<T> | undefined = this.head!;
    let headOfCurrent;

    for (let i = 0; i < index; i++) {
      headOfCurrent = currentNode;
      currentNode = currentNode?.getNext();

      if (currentNode === undefined) {
        if (i + 1 === index && headOfCurrent !== undefined) {
          headOfCurrent.linkNext(newNode);
          return;
        } else {
          throw new Error("Index too far!");
        }
      }
    }

    newNode.linkNext(currentNode);
    headOfCurrent!.linkNext(newNode);
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
    return this.head === undefined;
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
    let current = this.head;
    let count = 0;
    while (current !== undefined) {
      count++;
      current = current.getNext();
    }
    return count;
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
    if (this.isEmpty()) {
      return;
    }
    let current = this.head;
    let previous;
    let next;

    while (current !== undefined) {
      next = current.getNext();
      current.linkNext(previous);

      previous = current;
      current = next;
    }

    this.head = previous;
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
    if (this.head === undefined) {
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
    let current = this.head;
    while (current !== undefined) {
      yield current.get();
      current = current.getNext();
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

  protected setHeadNode(head: LinkedNode<T> | undefined) {
    this.head = head;
  }

  #createNode(item: T) {
    return new LinkedNode(item);
  }
}

export default LinkedList;
