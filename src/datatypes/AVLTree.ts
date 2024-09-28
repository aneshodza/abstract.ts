import BinaryTree from "@src/datatypes/BinaryTree";
import AVLTreeNode from "@src/datatypes/nodes/AVLTreeNode";
import Stack from "@src/datatypes/Stack";

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
    const node = this.#createNode(item);
    if (super.getRoot() === undefined) {
      super.setRoot(node);
      return;
    }

    let currentNode = super.getRoot() as AVLTreeNode<T>;
    const path: Stack<AVLTreeNode<T>> = new Stack();

    while (currentNode !== undefined) {
      currentNode.updateHeight();
      path.push(currentNode);
      const comparison = this.compare(currentNode.get(), node.get());

      if (comparison > 0) {
        if (currentNode.getLeft() === undefined) {
          currentNode.setLeft(node);
          break;
        }
        currentNode = currentNode.getLeft()! as AVLTreeNode<T>;
      } else if (comparison < 0) {
        if (currentNode.getRight() === undefined) {
          currentNode.setRight(node);
          break;
        }
        currentNode = currentNode.getRight()! as AVLTreeNode<T>;
      } else {
        currentNode.add(item);
      }
    }
    this.#balance(node);
    for (const pathedNode of path) {
      this.#balance(pathedNode);
    }
  }

  #balance(node: AVLTreeNode<T>) {
    const right: AVLTreeNode<T> = node.getRight() as AVLTreeNode<T>;
    const left: AVLTreeNode<T> = node.getLeft() as AVLTreeNode<T>;

    const balance = (left?.getHeight() || 0) - (right?.getHeight() || 0)
    if (balance === 2) {
      console.log(`Node with value ${(node.get() as { id: number}).id} is left heavy`)
      const leftLeft = left.getLeft() as AVLTreeNode<T>;
      const leftRight = left.getRight() as AVLTreeNode<T>;
      if ((leftLeft?.getHeight() || 0) >= (leftRight?.getHeight() || 0)) {
        console.log(`Only doing right`)
        this.#rotateRight(node);
      } else {
        console.log(`Doing left then right`)
        this.#rotateLeft(left);
        this.#rotateRight(node);
      }
    } else if (balance === -2) {
      console.log(`Node with value ${(node.get() as { id: number}).id} is right heavy`)
      const rightLeft = right.getLeft() as AVLTreeNode<T>;
      const rightRight = right.getRight() as AVLTreeNode<T>;
      if ((rightRight?.getHeight() || 0) >= (rightLeft?.getHeight() || 0)) {
        console.log(`Only doing left`)
        this.#rotateLeft(node);
      } else {
        console.log(`Doing right then left`)
        this.#rotateRight(right);
        this.#rotateLeft(node);
      }
    } else {
      node.updateHeight();
    }
  }

  #rotateRight(node: AVLTreeNode<T>) {
    const left = node.getLeft()! as AVLTreeNode<T>;
    if (left.getRight() !== undefined) {
      node.setLeft(left.getRight());
    } else {
      node.setLeft(undefined);
    }
    left.setRight(node);
    if (node === this.getRoot()) {
      this.setRoot(left);
    }

    left.updateHeight();
    node.updateHeight();
  }

  #rotateLeft(node: AVLTreeNode<T>) {
    const right = node.getRight()! as AVLTreeNode<T>;
    if (right.getLeft() !== undefined) {
      node.setRight(right.getLeft());
    } else {
      node.setRight(undefined);
    }
    right.setLeft(node);
    if (node === this.getRoot()) {
      this.setRoot(right);
    }
    console.log(`Node with value ${(node.get() as { id: number}).id} was root and replaced by ${(right.get() as {id: number}).id}`)
    right.updateHeight();
    node.updateHeight();
  }

  #createNode(item: T) {
    return new AVLTreeNode(item);
  }
}

export default AVLTree;
