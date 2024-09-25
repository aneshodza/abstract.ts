import BinaryTree from "@src/datatypes/BinaryTree";
import AVLTreeNode from "@src/datatypes/nodes/AVLTreeNode";

/**
 * This is an AVL tree data structure.
 * It contains nodes that are linked together by
 * a left and right child reference. It also keeps
 * track of the height of each node.
 * This allows for efficient traversal and search.
 * The tree is self-balancing, meaning that
 * the height difference between the left and right
 * subtree of each node is at most 1.
 *
 * It takes a compare function that is used to
 * determine the order of the nodes.
 * Equal nodes are left-oriented.
 *
 * @template T The type of elements contained in each node.
 */
class AVLTree<T> extends BinaryTree<T> {
  private leftMax = 1;
  private rightMax = -1;

  /**
   * Creates a new AVL tree with the given compare function.
   * This operation has a time complexity of `O(1)`.
   *
   * @param comparator - The function to compare nodes. The function should fulfill:
   * 1. Return > 0 if a > b
   * 2. Return < 0 if a < b
   * 3. Return 0 if a == b
   * @example
   * ```
   * const tree = new AVLTree<number>((a, b) => a - b);
   * ```
   */
  constructor(comparator: (a: T, b: T) => number) {
    super(comparator);
  }

  insert(item: T) {
    const path: Array<AVLTreeNode<T>> = [];
    const node = this.#createNode(item);
    if (super.getRoot() === undefined) {
      super.setRoot(node);
      return;
    }

    let currentNode = super.getRoot() as AVLTreeNode<T>;
    while (currentNode !== undefined) {
      currentNode.updateHeight();
      path.push(currentNode);
      const comparison = this.compare(currentNode.get(), node.get());

      if (comparison > 0) {
        if (currentNode.getLeft() === undefined) {
          currentNode.setLeft(node);
          return;
        }
        currentNode = currentNode.getLeft()! as AVLTreeNode<T>;
      } else {
        if (currentNode.getRight() === undefined) {
          currentNode.setRight(node);
          return;
        }
        currentNode = currentNode.getRight()! as AVLTreeNode<T>;
      }
    }
  }

  #createNode(item: T) {
    return new AVLTreeNode(item);
  }
}

export default AVLTree;
