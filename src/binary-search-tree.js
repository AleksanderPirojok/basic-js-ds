const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor () {
        this.start = null;
    }

    root() {
        return this.start;
    }

    add(data) {
        const addNode = (node, data) => {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addNode(node.left, data);
            } else {
                node.right = addNode(node.right, data);
            }

            return node;
        }

        this.start = addNode(this.start, data);
    }

    has(data) {
        const searchNode = (node, data) => {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            if (data < node.data) {
                return searchNode(node.left, data);
            } else {
                return searchNode(node.right, data);
            }
        }

        return searchNode(this.start, data);
    }

    find(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        if (!this.start) {
            return null;
        }

        let node = this.start;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        if (!this.start) {
            return null;
        }

        let node = this.start;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
  BinarySearchTree
};