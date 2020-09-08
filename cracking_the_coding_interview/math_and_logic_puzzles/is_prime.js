// Naive solution

const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// Small improvement

const isPrimeImprovement = n => {
    if (n < 2) return false;
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// But all that is really needed is checking against a list of primes, introducing Sieve of Eratosthenes
//  - All non prime numbers are divisible by a prime number.
//  - Start with a list of numbers up to some max value. Remove all numbers divisible by 2. Look for next prime and remove all numbers divisble by it, and continue up to max.

const sieveOfEratosthenes = max => {
    let flags = new Array(max + 1).fill(true),
        count = 0;
    flags[0] = false;
    flags[1] = false;

    let prime = 2;

    while (prime <= Math.sqrt(max)) {
        // Cross off remaining multiples of prime.
        crossOff(flags, prime);

        // Find the next value which is true.
        prime = getNextPrime(flags, prime);
    }

    return flags;
};

const crossOff = (flags, prime) => {
    // Cross off remaining multiples of prime. We can start with (prime * prime), because if we have k * prime, where k < prime, this value would already have been crossed off in a prior iteration.
    for (let i = prime * prime; i < flags.length; i += prime) {
        flags[i] = false;
    }
};

const getNextPrime = (flags, prime) => {
    let next = prime + 1;
    while (next < flags.length && !flags[next]) {
        next++;
    }
    return next;
}