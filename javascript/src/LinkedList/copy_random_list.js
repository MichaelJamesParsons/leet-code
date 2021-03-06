/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    return helper(head, [], []);
};

var helper = function(node, seen, clonedMap) {
    // Node doesn't exist. Skip it.
    if (node === null) {
        return null;
    }

    var currNode = new RandomListNode(node.label);
    clonedMap.push(currNode);
    seen.push(node);

    var nextNodeIndex = seen.indexOf(node.next);
    var randomNodeIndex = seen.indexOf(node.random);

    // Visit the "next" node if not already seen.
    if (nextNodeIndex === -1) {
        currNode.next = helper(node.next, seen, clonedMap);
    } else {
        currNode.next = clonedMap[nextNodeIndex];
    }

    // Visit the "random" node if not already seen.
    if (randomNodeIndex === -1) {
        currNode.random = helper(node.random, seen, clonedMap);
    } else {
        currNode.random = clonedMap[randomNodeIndex];
    }

    return currNode;
};