const person={
    name:'nilo',
    age:20,
    gree:function(){
        console.log(`I am ${this.name}`)
    }
}
// person.gree();

const arr=['test1','test2'];
const copyPerson={...person};
console.log(copyPerson)

// const b=arr.map(a=> a);
// const c=arr.forEach(a=>a)
// console.log(b)
// const copy=typeof(person);
// const copy2=typeof({...person})
// console.log(copy,copy2)