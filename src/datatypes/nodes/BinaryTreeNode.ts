import Node from "./Node";

/**
 * This is the node subclass used by the `BinaryTree` class.
 * It contains a reference to it's left and right child.
 * **Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The `BinaryTree` class holds all operations
 * needed to interact with the tree.
 *
 * @extends Node
 * @template T The type of elements contained in each node.
 */
class BinaryTreeNode<T> extends Node<T> {
  private left: BinaryTreeNode<T> | undefined;
  private right: BinaryTreeNode<T> | undefined;

  /**
   * Creates a new node with the given value.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new BinaryTreeNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
  }

  /**
   * Sets the left child of the node.
   * This operation has a time complexity of `O(1)`.
   *
   * @param left - The left child of the node.
   * @example
   * ```
   * const node = new BinaryTreeNode(5);
   * const leftChild = new BinaryTreeNode(10);
   * node.addLeft(leftChild);
   * ```
   */
  setLeft(left: BinaryTreeNode<T> | undefined) {
    this.left = left;
  }

  /**
   * Sets the right child of the node.
   * This operation has a time complexity of `O(1)`.
   *
   * @param right - The right child of the node.
   * @example
   * ```
   * const node = new BinaryTreeNode(5);
   * const rightChild = new BinaryTreeNode(10);
   * node.addRight(rightChild);
   * ```
   */
  setRight(right: BinaryTreeNode<T> | undefined) {
    this.right = right;
  }

  /**
   * Gets the left child node.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The left child node
   * @example
   * ```
   * const node = new BinaryTreeNode(5);
   * const leftChild = new BinaryTreeNode(10);
   * node.addLeft(leftChild);
   * node.getLeft(); // leftChild
   * ```
   */
  getLeft(): BinaryTreeNode<T> | undefined {
    return this.left;
  }

  /**
   * Gets the right child node.
   * This operation has a time complexity of `O(1)`.
   *
   * @returns The right child node
   * @example
   * ```
   * const node = new BinaryTreeNode(5);
   * const rightChild = new BinaryTreeNode(10);
   * node.addRight(rightChild);
   * node.getRight(); // rightChild
   * ```
   */
  getRight(): BinaryTreeNode<T> | undefined {
    return this.right;
  }
}

export default BinaryTreeNode;
