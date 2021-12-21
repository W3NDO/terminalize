class Stack{

    top(){
        return this.stack[-1]
    }

    size(){
        return length(this.stack)
    }

    scrollThrough(stackPosition){
        return this.stack[stackPosition]
    }

    push(elem){
        console.log("pushing:: ", elem)
        this.stack.push(elem);
    }
}


export default function StackBuilder(){
    return new Stack(100);
}