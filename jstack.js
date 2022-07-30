class Stack{
  constructor(){
    this.items = [];
  }
  push(value){
    return this.items.push(value);
  }
  pop(){
    if (this.items.length > 0){
    return this.items.pop();
    }
  }
  peek(){
    return this.items[this.items.length-1];
  }
  clear(){
    this.items = [];
  }
  size(){
    return this.items.length;
  }
}
let my_stack = new Stack();
my_stack.push(1);
my_stack.push(2);
my_stack.push(3);
my_stack.push(4);
console.log(my_stack.peek());
my_stack.pop();
console.log(my_stack.peek());
