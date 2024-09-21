import Streamable from "@src/Streamable";
import BinaryTreeNode from "@src/datatypes/nodes/BinaryTreeNode";

/**
 * This is a binary tree data structure.
 * It contains nodes that are linked together by
 * a left and right child reference.
 * This allows for efficient traversal and search.
 *
 * It takes a compare function that is used to
 * determine the order of the nodes.
 * Equal nodes are left-oriented.
 *
 * @implements the `Streamable` interface
 */
class BinaryTree<T> implements Streamable<T> {
  private root: BinaryTreeNode<T> | undefined;
  private comparator: (a: T, b: T) => number;

  /**
   * Creates a new binary tree with the given compare function.
   * This operation has a time complexity of `O(1)`.
   *
   * @param comparator - The function to compare nodes. The function should fulfill:
   * 1. Return > 0 if a > b
   * 2. Return < 0 if a < b
   * 3. Return 0 if a == b
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * ```
   */
  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  /**
   * Allows calling the given `compare` function
   * to compare two nodes.
   * **Note:** This function is to make development
   * easier (testing comparison). It shouldn't be
   * used in production.
   * This operation has a time complexity of `O(1)`.
   * @param a - The first node to compare.
   * @param b - The second node to compare.
   * @returns a numers that indicates the result of the comparison.
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * const nodeA = new BinaryTreeNode(5);
   * const nodeB = new BinaryTreeNode(10);
   * const comparison = tree.compare(nodeA.get(), nodeB.get());
   * ```
   */
  compare(a: T, b: T): number {
    return this.comparator(a, b);
  }

  /**
   * Inserts a new node to the tree
   * This operation has a time complexity of `O(log n)`.
   * @param value - The value to insert.
   * @returns The newly created node
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * ```
   */
  insert(item: T): void {
    const node = this.#createNode(item);
    if (this.root === undefined) {
      this.root = node;
      return;
    }

    let currentNode = this.root;
    while (currentNode !== undefined) {
      const comparison = this.comparator(currentNode.get(), node.get());

      if (comparison > 0) {
        if (currentNode.getLeft() === undefined) {
          currentNode.setLeft(node);
          return;
        }
        currentNode = currentNode.getLeft()!;
      } else {
        if (currentNode.getRight() === undefined) {
          currentNode.setRight(node);
          return;
        }
        currentNode = currentNode.getRight()!;
      }
    }
  }

  /**
   * Returns the root node of the tree.
   * This operation has a time complexity of `O(1)`.
   * @returns The root node of the tree.
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(10);
   * const root = tree.getRoot(); // BinaryTreeNode(5)
   * ```
   */
  getRoot(): BinaryTreeNode<T> | undefined {
    return this.root;
  }

  /**
   * Finds a node in the tree.
   * This operation has a time complexity of `O(log n)`.
   * @param item - The value to find.
   * @returns The `node.get()` if found, otherwise `undefined`.
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(10);
   * const node = tree.find(5); // BinaryTreeNode(5)
   * ```
   */
  find(item: T): T | undefined {
    let current: BinaryTreeNode<T> | undefined = this.root;
    while (current !== undefined) {
      const comparison = this.comparator(item, current.get());

      if (comparison > 0) {
        current = current.getRight();
      } else if (comparison < 0) {
        current = current.getLeft();
      } else {
        return current.get();
      }
    }
  }

  /**
   * Traverses the binary tree "in order".
   * In an in-order traversal, the tree is recursively traversed by visiting:
   * 1. The left subtree
   * 2. The current node
   * 3. The right subtree
   *
   * This operation has a time complexity of `O(n)`.
   *
   * @param node - The starting node for the traversal.
   * @returns A generator yielding the values in the tree in in-order.
   *
   * @example
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(3);
   * tree.insert(7);
   *
   * for (const value of tree.inOrder(tree.getRoot())) {
   *   console.log(value); // Logs 3, 5, 7
   * }
   */
  *stream(): Generator<T, void, unknown> {
    yield* this.inOrder(this.root);
  }
 
  /**
   * Traverses the binary tree "in order".
   * In an in-order traversal, the tree is recursively traversed by visiting:
   * 1. The left subtree
   * 2. The current node
   * 3. The right subtree
   *
   * This operation has a time complexity of `O(n)`.
   *
   * @param node - The starting node for the traversal.
   * @returns A generator yielding the values in the tree in in-order.
   *
   * @example
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(3);
   * tree.insert(7);
   *
   * for (const value of tree.inOrder(tree.getRoot())) {
   *   console.log(value); // Logs 3, 5, 7
   * }
   */
  *[Symbol.iterator]() {
    yield* this.inOrder(this.root);
  }
  /**
   * Gets the size of the tree.
   * This operation has a time complexity of `O(n)`.
   * @returns The number of nodes in the tree.
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(10);
   * tree.insert(15);
   * tree.size(); // 3
   * ```
   */
  size(): number {
    let size = 0;
    for (const _ of this) {
      size++;
    }

    return size;
  }

  /**
   * Checks if the tree is empty.
   * This operation has a time complexity of `O(1)`
   * @retuns If the tree is empty
   * @example
   * ```
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.empty(); // true
   * ``
   */
  isEmpty(): boolean {
    return this.root === undefined;
  }

  /**
   * Traverses the binary tree "in order".
   * In an in-order traversal, the tree is recursively traversed by visiting:
   * 1. The left subtree
   * 2. The current node
   * 3. The right subtree
   *
   * This operation has a time complexity of `O(n)`.
   *
   * @param node - The starting node for the traversal.
   * @returns A generator yielding the values in the tree in in-order.
   *
   * @example
   * const tree = new BinaryTree<number>((a, b) => a - b);
   * tree.insert(5);
   * tree.insert(3);
   * tree.insert(7);
   *
   * for (const value of tree.inOrder(tree.getRoot())) {
   *   console.log(value); // Logs 3, 5, 7
   * }
   */
  *inOrder(node: BinaryTreeNode<T> | undefined): Generator<T, void, unknown> {
    if (node !== undefined) {
      yield node.get();

      if (node.getLeft() !== null) {
        yield* this.inOrder(node.getLeft());
      }

      if (node.getRight() != null) {
        yield* this.inOrder(node.getRight());
      }
    }
  }

  #createNode(item: T) {
    return new BinaryTreeNode(item);
  }
}

export default BinaryTree;
