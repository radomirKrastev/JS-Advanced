function extract(text) {

    let result = text.match(/\w+/mg).map(x => x.toUpperCase()).join(", ");

    console.log(result)
}

extract(`
    Hi, how are 
    you?`
);