import BinaryTreeNode from "@src/datatypes/nodes/BinaryTreeNode";

/**
 * This is the node subclass used by the `AVLTree` class.
 * It contains a reference to it's left and right child like
 * a binary tree, but additionally also keeps track of its parent,
 * giving the ability for back-propagation.
 * Additionally, it keeps track of its height.
 * ** Note:** This class is only exposed to make development
 * easier (testing functionality). It shouldn't be
 * used in production.
 * The`AVLTree` class holds all operations
 * needed to interact with the tree.
 *
 * @extends BinaryTreeNode
 * @template T The type of elements contained in each node.
 */
class AVLTreeNode<T> extends BinaryTreeNode<T> {
  private height: number;

  /**
   * Creates a new node with the given value. It defaults
   * the height to 1.
   * This operation has a time complexity of `O(1)`.
   *
   * @param value - The value to store in the node.
   * @returns A new node containing the given value.
   * @example
   * ```
   * const node = new AVLTreeNode(5);
   * ```
   */
  constructor(value: T) {
    super(value);
    this.height = 1;
  }

  /**
   * Gets the height of the node.
   * This operation has a time complexity of `O(1)`.
   * @returns The height of the node.
   * @example
   * ```
   * const height = node.getHeight();
   * ```
   */
  getHeight() {
    return this.height;
  }

  /**
   * Updates the height of the node. It does that by
   * calculating `1 + max(left subtree, right subtree)`.
   * This operation has a time complexity of `O(1)`.
   * @example
   * ```
   * node.incrementHeight();
   * ```
   */
  updateHeight() {
    const { left, right } = this.#getSubtreeHeights();
    this.height = 1 + Math.max(left, right);
  }

  /**
   * Gets the balance factor of the node.
   * This operation has a time complexity of `O(1)`.
   * Following balance factor rules:
   * - Balance factor > 1: Left heavy
   * - Balance factor < -1: Right heavy
   * - Balance factor = 0: Balanced
   *
   * @returns The balance factor of the node.
   * @example
   * ```
   * const balanceFactor = node.getBalanceFactor();
   * ```
   */
  getBalanceFactor() {
    const { left, right } = this.#getSubtreeHeights();
    return left - right;
  }

  #getSubtreeHeights() {
    const leftNode = this.getLeft() as AVLTreeNode<T> | undefined;
    const rightNode = this.getRight() as AVLTreeNode<T> | undefined;
    return {
      left: (leftNode?.getHeight() ?? 0),
      right: (rightNode?.getHeight() ?? 0)
    }
  }
}

export default AVLTreeNode;
