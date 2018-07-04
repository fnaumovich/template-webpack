export default function fibonacci(n) {
    if (n <= 1) { return n }

    return fibonacci(n - 1) + fibonacci(n - 2);
};


function fibonacci2(num) {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
