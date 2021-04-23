function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction(params) {
    return fn = () => {`This is a string ${params}`}
}

function returnsAnAnonymousFunction(params) {
    return () => {`This is a string ${params}`}
}

//
