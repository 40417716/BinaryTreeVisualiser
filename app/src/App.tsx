import React from 'react';
import './App.css';
import BinaryTree from './types/BinaryTree';

interface Node {
  value: number;
  parent: Node | null;
  leftChild: Node | null;
  rightChild: Node | null;
};

function App() {

  const binaryTree: BinaryTree =  new BinaryTree();

  binaryTree.addValue(10);
  binaryTree.addValue(5);
  binaryTree.addValue(15);

  console.log(binaryTree.doesValueExist(10));
  console.log(binaryTree.doesValueExist(15));
  console.log(binaryTree.doesValueExist(5));
  console.log(binaryTree.doesValueExist(2));
  console.log(binaryTree.doesValueExist(0));

  return (
    <div className="App">

    </div>
  );
}

export default App;
