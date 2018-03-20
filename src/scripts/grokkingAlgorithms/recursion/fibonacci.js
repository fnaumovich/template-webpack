export default function fibonacci(n) {
    if (n <= 1) { return n }

    return fibonacci(n - 1) + fibonacci(n - 2);
};


function fibonacci2(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
