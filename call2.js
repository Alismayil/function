// 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

function toplam(...numbers) {
    const arr = [...numbers];
    let cem = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            cem = cem + arr[index];
        }
    }
    return cem;
}
function end(callback, ...numbers) {
    return callback(...numbers);
}
console.log(end(toplam, 2, 4, 4, 1, 2, 2, 2, 2, 1, 1, 1));
