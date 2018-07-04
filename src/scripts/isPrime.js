export function isPrime(num) {
    if (num === 0) return true;

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }

    return num !== 1;
}
