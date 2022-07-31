class Node{
  constructor(d){
    this.data = d;
    this.next = undefined;
  }
}
class Queue{
  constructor(){
    this.front = undefined;
    this.rear = undefined;
    this.size = 0;
  }
enqueue(data) {
 const newNode = new Node(data);
 if (!this.front) {
 this.front = newNode;
 this.rear = newNode;
 }
 else {
 this.rear.next = newNode;
 this.rear = newNode;
 }
 this.size++;
 return this;
}
dequeue() {
 if (!this.front) return undefined;
 if (this.front === this.rear) this.rear = null;
 const dequeuedNode = this.front;
 this.front = this.front.next;
 this.size--;
 return dequeuedNode;
}
}
