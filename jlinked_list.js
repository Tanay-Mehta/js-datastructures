class node{
  constructor(){
    this.data = undefined;
    this.next = undefined;
  }
}
const head = new node();
head.data = 4;
head.next = new node();
head.next.data = 3;
console.log(head.data);
