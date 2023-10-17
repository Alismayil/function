// 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.

function toplam1(...numbers) {
    const arr = [...numbers]
    let cem = 0
    let cut
    let tek
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            cem = cem + arr[index]
            cut=cem
        }
    } return cut;
        
}
function end(callback, ...numbers) {
    return callback(...numbers)
}
cut =  end(toplam1,5,6,7,8,9,10)
console.log("cut ededlerin cemi: "+(end(toplam1,5,6,7,8,9,10)));


function toplam2(...numbers) {

    const arr = [...numbers]
    let cem = 0
    let cut
    let tek
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2 !== 0){
            cem = cem + arr[index]
            tek = cem

        }
    } return tek;
        
}
function end(callback, ...numbers) {
    return callback(...numbers)
}
tek =end(toplam2,5,6,7,8,9,10);
console.log("tek ededlerin cemi: "+(end(toplam2,5,6,7,8,9,10)))
hasil=cut*tek
console.log("tek ve cutun hasili: " + hasil);