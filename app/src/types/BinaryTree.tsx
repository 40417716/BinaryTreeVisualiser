import Node from "./Node";

class BinaryTree {

  private rootNode?: Node;

  public addValue(value: number) {
    // If there is no rootNode, the first value will become the rootNode
    if (!this.rootNode) {
      this.rootNode = new Node(value, null);
    }

    this.rootNode.addValue(value);
  }

  public doesValueExist(value: number) {
    if (this.rootNode) {
      let checkNode: Node | undefined | null = this.rootNode;

      while (checkNode) {

        const nodeValue = checkNode.getValue();
  
        if (nodeValue === value) {
          return true;
        }
  
        if (value > nodeValue) {
          checkNode = checkNode.getRightChild();
        } else {
          checkNode = checkNode.getLeftChild();
        }
      }

      return false;

    }
  }

}

export default BinaryTree;