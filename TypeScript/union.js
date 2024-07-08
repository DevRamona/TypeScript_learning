function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error('Parameters must either be numbers or strings');
}
console.log(add(1, 2));
console.log(add("hello", "world"));
