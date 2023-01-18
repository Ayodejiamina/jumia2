

    let count_item = document.getElementById('count_item');
    //console.log(localStorage.length)
    count_item.innerHTML = localStorage.length;
       
    

function addCart(x){


//localStorage.clear()

    
    let  product_name = x.previousElementSibling.previousElementSibling.innerHTML;
    let product_price = x.previousElementSibling.innerHTML
    let product_image = x.previousElementSibling.previousElementSibling.previousElementSibling.alt
    const all_item = JSON.stringify([product_name,product_image,product_price])
    localStorage.setItem(product_name, all_item);

    count_item.innerHTML = localStorage.length;

}
