import BinaryTreeNode from "@src/datatypes/nodes/BinaryTreeNode";
import LinkedList from "../LinkedList";

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
  private values: LinkedList<T>;

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
    this.values = new LinkedList();
    this.values.insertAtHead(value);
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
   * Sets the height of the node.
   * This operation has a time complexity of `O(1)`.
   * @param height - The height to set.
   * @example
   * ```
   * node.setHeight(5);
   * ```
   */
  setHeight(height: number) {
    this.height = height;
  }

  /**
   * Adds an additional value to the node. This method is used
   * in the AVL Tree to handle duplicate values.
   * @param value - The value to add to the node.
   * @example
   * ```
   * const node = new AVLTreeNode(5);
   * node.addValue(7); // Now the node holds 2 values.
   * ```
   */
  add(value: T) {
    this.values.insertAtHead(value);
  }

  /**
   * Streams all of the node's other values.
   * This operation has a time complexity of `O(n)`.
   * @returns A generator yielding the values in the list.
   * @yields The next value in `other`
   * @example
   * ```
   * const node = new AVLTreeNode(5);
   * node.addValue(7);
   * node.addValue(10);
   * for (const value of node.stream()) {
   *  console.log(value); // 5, 7, 10
   *  }
   * ```
   */
  *stream() {
    yield* this.values.stream();
  }

  #getSubtreeHeights() {
    const leftNode = this.getLeft() as AVLTreeNode<T> | undefined;
    const rightNode = this.getRight() as AVLTreeNode<T> | undefined;
    return {
      left: (leftNode?.getHeight() ?? 0),
      right: (rightNode?.getHeight() ?? 0),
    };
  }
}

export default AVLTreeNode;
