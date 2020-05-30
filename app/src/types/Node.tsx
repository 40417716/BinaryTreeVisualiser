class Node {
  private value: number;
  private parent: Node | null;
  private leftChild?: Node | null;
  private rightChild?: Node | null;
  private leftChildren: number;
  private rightChildren: number;

  constructor(value: number, parent: Node | null) {
    this.value = value;
    this.parent = parent;
    this.leftChildren = this.rightChildren = 0;
  }

  public getValue() {
    return this.value;
  }

  public getLeftChild() {
    return this.leftChild;
  }

  public getRightChild() {
    return this.rightChild;
  }

  public isBalanced() {
    return (Math.abs(this.leftChildren - this.rightChildren) > 1) ? false : true;
  }

  public addValue(value: number) {
    if (value > this.value) {
      this.rightChildren += 1;
      if (!this.rightChild) {
        this.rightChild = new Node(value, this);
      } else {
        this.rightChild.addValue(value);
      }
    } else {
      this.leftChildren += 1;
      if (!this.leftChild) {
        this.leftChild = new Node(value, this);
      } else {
        this.leftChild.addValue(value);
      }
    }
  }
}

export default Node;