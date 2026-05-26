// Set
// 집합 -> 스스로가 각자가 다른 것과 구분되는 원소인 자료형

// object, map도 보면 특정 '키'에는 한 값만 들어갈 수 있음
const m = new Map();
m.set("a", 1234);
m.set("b", 1234); // 같은 값으로 넣었을 때 충돌 문제가 없음
// 중간에 해시가 꼈으니까 a -> <1231> -> 1234 / b -> <1123> -> 1234
console.log(m);
m.set("a", 5678); // a라는 키에 대응할 수 있는 값은 1개이기 때문에 '덮어쓰기'가 된다
console.log(m);
// a라는 키는 중복이 안된다. a에 들어가는 값은 중복될 수 있음

const s = new Set();
s.add(1234); // 키를 넣는 부분이 없음
console.log(s); // 값이 곧 키다
// 중복을 허용하지 않는다 -> 값에도
s.add(1234);
console.log(s);

// entry로 형태로 넣으면 바로 기존의 객체나 배열 등을 바탕으로 생성할 수 있음
const mm = new Map(Object.entries({ a: "a" }));
console.log(mm);

// 같은 값을 감지를 해서 정리를 해버린다
// 배열 중에 같은 값이 있는지를 감지해서 정리하는 역할
const ss = new Set(["a", "a", "a", "b", "b", "c"]);
console.log(ss);
// for문으로 객체, 배열, 맵 등을 사용해서 중복 정리하기를 할 순 있는데
// 속도도 느리고 구현 난도도 적지 않은 편 (Set 직접 다른 자료구조로 구현하기)

console.log("s.has(1234)", s.has(1234));
s.delete(1234);
console.log("s.has(1234)", s.has(1234));

s.add(1234);
s.add(12345);
s.add(123456);
// s.has, s.size
for (const c of s) {
  console.log(c);
}
