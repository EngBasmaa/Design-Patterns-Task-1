function range(start: number, end: number, step: number = 1) {
    return {
        next() {
            if (start < end) {
                start += step;
                return { value: start, done: false }
            }
            return { value: undefined, done: true }
        }
    }
}

const valuesOfRange = range(0,200,50)

console.log(valuesOfRange);

console.log(valuesOfRange.next());
console.log(valuesOfRange.next());
console.log(valuesOfRange.next());
console.log(valuesOfRange.next());
console.log(valuesOfRange.next());

