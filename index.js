function receivesAFunction(cb) {
    cb();
}

const fn = (x) => x + 1;  
const returnsANamedFunction = () => fn;

function returnsAnAnonymousFunction() {
    return function() {
        1 + 4;
    }
}
