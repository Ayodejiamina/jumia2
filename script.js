
let each_tota = "";
let sub_tot = document.getElementById('sub_tot')
let all_total = document.getElementById('tot')
let num = document.getElementById('num')
let totalss = document.getElementById('totalss')
totalss
const amounts =[];
for(let i=0;i<localStorage.length;i++){
    let product_key = localStorage.key(i);
    let product_get = localStorage.getItem(product_key)
    let all_product = JSON.parse(product_get)

    let product = `
<tr id ="items">
    <td><img src="${all_product[1]}" width = "100px"></td>
    <td>${all_product[0]}</td>
    <td>${all_product[2]}</td>
    <td>
        <input type ="number" onchange="change_num(this)" onkeyup="change_num(this)" id="num" value ="1">
    </td>
    <td id="totalss">${all_product[2]}</td>
    <td><button class ="btn btn-danger" onclick="delete_product(this)">Remove</button></td>
</tr>
    `
    all_total.innerHTML += product
    //amounts.push()
    amounts.push(Number(all_product[2].slice(1)));
    

}
sub_tot.innerHTML = "#" + amounts.reduce(reduce_all);


function change_num(y) {
 y.parentNode.nextElementSibling.innerHTML ="#"+ y.value * y.parentNode.previousElementSibling.innerHTML.slice(1)

// amounts[amounts.indexOf(parseInt(y.parentNode.previousElementSibling.innerHTML.slice(1)))] = y.value * y.parentNode.previousElementSibling.innerHTML.slice(1)
//         console.log(amounts);
//         sub_tot.innerHTML = "#" + amounts.reduce(reduce_all);
console.log(totalss.length)
    // for (let i = 0; i < totalss.length; i++) {
    //     sliced_value = totalss.innerHTML.slice(1);
    //     amounts.push(sliced_value);
    // }

console.log(amounts)

}



function delete_product(d){
    localStorage.removeItem(d.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML)
    d.parentNode.parentNode.remove()
}

function reduce_all(prevNum,currNum) {
    return prevNum + currNum;
}



