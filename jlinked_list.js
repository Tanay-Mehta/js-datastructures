class node{
  constructor(){
    this.data = undefined;
    this.next = undefined;
  }
}
class Linked_list
{
  constructor(){
    this.head = new node();
    this.size = 0;
  }
  append(value){
    if (this.head.data === undefined){
      this.head.data = value;
      return 0;
    }
    var headref = this.head;
    while(headref.next != undefined){
      headref = headref.next;
    }
    headref.next = new node();
    headref.next.data = value;
    this.size++;
  }
  reverse() {
    // set a reference to head of linked list
    if (this.head === null) return;

    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    // traverse list and adjust links
    while (currentNode) {
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode;
        nextNode = null;
    }
    this.head = prevNode; // reset head
    return this.head;
}
}
const ll = new Linked_list();
ll.append(4);
ll.append(5);
ll.append(6);
console.log(ll.reverse());
