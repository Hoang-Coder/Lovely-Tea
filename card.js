let demsolan = 0
function dathang() {
    if (demsolan <= 1) {
        alert("Bạn đã đặt hàng thành công")
        alert("Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi")
    }
    else if (demsolan >= 2) {
        luachondathang = prompt("Bạn đã đặt hàng rồi, Bạn có muốn đặt hàng lần nữa ko. Nhập [Y] hoặc [N]")
        if (luachondathang.indexOf('Y') != -1) {
            alert("Cảm ơn bạn đã tin tưởng chúng tôi Số đơn hàng của bạn là:"+" "+demsolan)
        }
    }
    demsolan ++
}
var currentUser = JSON.parse(localStorage.getItem("currentUser"))[0]; 
var carts = localStorage.getItem("giohang") 
        ? JSON.parse(localStorage.getItem("giohang")) 
        : []; 
var current_cart, cart_detail;

function addToCart(productID) {
    let dem = 0;
    if (cart_detail == undefined ) { 
        carts.push({
            user: currentUser,  
            cart_detail: [{ 
                id: productID, 
                quantity: 1, 
            }]
        });
    }
    else { 
        for (let item of cart_detail) { 
            if (item.id == productID) { 
                dem = 1;
            }
        }
        if (dem == 1) { 
            for (let item of cart_detail) { 
                if (item.id == productID) {
                    item.quantity++;    
                }
            }
        }
        else { 
            cart_detail.push({ 
                id: productID,
                quantity: 1,
            });
        }
    }
    localStorage.setItem("giohang", JSON.stringify(carts)); 
    update_noti_cart(); 
}
function update_noti_cart() { 
    if (localStorage.getItem("giohang") && currentUser != null) { 
        carts = JSON.parse(localStorage.getItem("giohang"));
        current_cart = carts.find((u) => u.user == currentUser); 
        if(current_cart){ 
            cart_detail = current_cart.cart_detail; 
        }else{
            cart_detail = [];
        }
        document.getElementById("cart_count").innerText = cart_detail.length; 
    }
    else{
        document.getElementById("cart_count").innerText = "0";
    }
}
update_noti_cart() 
