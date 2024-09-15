function fibonacci(n: number): number {
    if (n <= 1) {
        return 0;
    }

    if (n == 2 || n == 3) {
        return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
}

const n: number = parseInt(process.argv[2]);

console.log(n + "th fibonacci number: ", fibonacci(n));
