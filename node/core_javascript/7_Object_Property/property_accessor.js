/*
    프로퍼티 getter / setter
    객체의 프로퍼티는 2종류로 나뉨.
    1. 데이터 프로퍼티(data property): 지금까지 사용해 온 프로퍼티는 모두 데이터 프로퍼티임.
    2. 접근자 프로퍼티(accessor property): 이는 함수인데, 값을 획득(get)하고 설정(set)하는 역할을 담당함. 외부 코드에서는 함수가 아닌 일반 프로퍼티처럼 보인다.
 */

let obj = {
    get propName() {
        // obj.propName 을 실행할 때 실행되는 코드
    },
    set propName(value) {
        // obj.propName = value 를 실행할 때 실행되는 코드
    }
};

let user = {
    name: 'John',
    surname: 'Smith',
    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }
};
console.log(user.fullName); // 바깥 코드에선 일반 프로퍼티처럼 사용 가능.

user.fullName = 'Alice Cooper';
console.log(user.name);
console.log(user.surname);
// 이렇게 getter, setter 를 구현하면 fullName 이라는 가상 프로퍼티가 생긴다. 이는 읽고 쓸 수는 있지만 실제로는 존재하지 않음!

/*
   접근자 프로퍼티의 설명자를 데이터 프로퍼티의 설명자와 다르다.
   접근자 프로퍼티에는 value 와 writable 이 없는 대신, get 과 set 함수가 있음.
   get
   set
   enumerable
   configurable
 */
let man = {
    name: 'John',
    surname: 'Smith'
}
Object.defineProperty(man, 'fullName',{
    get() {
        return `${this.name} 하하하! ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(' ')
    }
})
console.log(man.fullName);
for (let key in man) console.log(key);