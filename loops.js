// let input = '';
// do {
//     input = prompt('Enter a number greater than 100:');
// } while (input <=100 && input);

prime: for (let i = 2; i<=10; i++){
    for (let j=2; j<i; j++) {
        if (i % j == 0) {
            continue prime;
        }
    }
    alert(i)
}