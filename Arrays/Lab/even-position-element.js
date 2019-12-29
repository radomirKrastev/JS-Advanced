function findEvenPositionElements(arr){
    let evenElements = arr.slice().filter((_, i) => i % 2 === 0).join(" ");

    return evenElements;
}

console.log(findEvenPositionElements(['20', '30', '40']));