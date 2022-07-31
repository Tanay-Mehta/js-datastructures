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
  }
  insert(value){
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
  }
}

const ll = new Linked_list();
ll.insert(4);
ll.insert(5);
console.log(ll.head.next.data);
