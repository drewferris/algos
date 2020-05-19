// Modify and return the given map as follows: if the key "a" has a value, set the key "b" to have that same value. In all cases remove the key "c", leaving the rest of the map unchanged.

function mapShare(obj) {
  delete obj.c;
  if (obj.a) obj.b = obj.a;
  return obj;
}
console.log(
  mapShare({ a: "aaa", b: "bbb", c: "ccc" }) === { a: "aaa", b: "aaa" }
);
console.log(mapShare({ b: "xyz", c: "ccc" }) === { b: "xyz" });
console.log(
  mapShare({ a: "aaa", c: "meh", d: "hi" }) === { a: "aaa", b: "aaa", d: "hi" }
);
