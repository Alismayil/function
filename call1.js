// 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

function ededotta(...numbers) {
    const arr=[...numbers]
    let cem=0
    let edediorta
    for (let index = 0; index < arr.length; index++) {
        cem=cem+arr[index]
        edediorta=cem/arr.length
    }    
    return edediorta;
    
}
function end(callback,...numbers) {
    return callback(...numbers)
}
console.log(end(ededotta,2,5,8,5,3,1));