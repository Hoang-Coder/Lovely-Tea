let products = [
    {
        name: "Hồng Trà Sữa Cookies",
        price: "21.000đ",
        image: "img/tra_sua(1).jpg",
        id: 1
    },
    {
        name: "Sữa Tươi Đường Đen Mochi",
        price: "21.000đ",
        image: "img/tra_sua(2).jpg",
        id: 2
    },
    {
        name: "Trà Sữa Mochi Trân Châu",
        price: "21.000đ",
        image: "img/tra_sua(3).jpg",
        id: 3
    },
    {
        name: "Sữa Tươi Cookies",
        price: "21.000đ",
        image: "img/tra_sua(4).jpg",
        id: 4
    },
    {
        name: "Sữa Dừa Trân Châu",
        price: "21.000đ",
        image: "img/tra_sua(5).jpg",
        id: 5
    },
    {
        name: "Hồng Trà Sữa",
        price: "21.000đ",
        image: "img/tra_sua(6).jpg",
        id: 6
    },
    {
        name: "Sữa Tươi Chân Trâu Đường Đen",
        price: "21.000đ",
        image: "img/tra_sua(7).jpg",
        id: 7
    },
    {
        name: "Sữa Dừa Mochi kéo dài",
        price: "21.000đ",
        image: "img/tra_sua(8).jpg",
        id: 8
    },
    {
        name: "Trà Sữa Mochi Matcha",
        price: "21.000đ",
        image: "img/tra_sua(9).jpg",
        id: 9
    },
    {
        name: "Sữa Dừa Mochi",
        price: "21.000đ",
        image: "img/tra_sua(10).jpg",
        id: 10
    },
    {
        name: "Trà Sữa Socola Cookies",
        price: "21.000đ",
        image: "img/tra_sua(11).jpg",
        id: 11
    },
    {
        name: "Trà Sữa Thạch Socola",
        price: "21.000đ",
        image: "img/tra_sua(12).jpg",
        id: 12
    },
    {
        name: "Trà Sữa Matcha Cookies",
        price: "21.000đ",
        image: "img/tra_sua(13).jpg",
        id: 13
    },
    {
        name: "Trà Đào Tươi",
        price: "21.000đ",
        image: "img/tra_sua(14).jpg",
        id: 14
    },
    {
        name: "Trà Sữa Chân Trâu Trắng",
        price: "21.000đ",
        image: "img/tra_sua(15).jpg",
        id: 15
    },
    {
        name: "Trà Sữa Kéo Sợi",
        price: "21.000đ",
        image: "img/tra_sua(16).jpg",
        id: 16
    },
]

console.log(products)
for (let product of products) {
    let card =
        `<div class ="card">
        <div class="image-container">
            <img src="${product.image}"/>
        </div>
        <div class="container">
            <div class="product-name">
                <h5 style="font-size: 15px">${product.name}</h5>
                <h6 style="font-size: 13px">$${product.price}</h6>
            </div>
            <button class="mua_hang" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i> &nbsp; Add to cart</button>
        </div>
    </div>`;
    document.getElementById("products").innerHTML += card;
}
function chuyen_doi1() {
    document.getElementById("dang_nhap").style.display = "none"
    document.getElementById("dang_ky").style.display = "flex"
}
function chuyen_doi2() {
    document.getElementById("dang_nhap").style.display = "flex"
    document.getElementById("dang_ky").style.display = "none"
}
tk = localStorage.getItem('userAccount_key')
if(!tk) {
    let userAccount = {
        acc: [
            {
                id: 1,
                name: "Hoàng",
                pass: "12345678",
                mail: "chukyanh01@gmail.com"
            },
        ]
    }
    localStorage.setItem('userAccount_key', JSON.stringify(userAccount));
}

function check_currentUser() {
    let cur = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : [];
    console.log(cur);
    if (cur.length > 0) {
        let user = document.getElementById("logined");
        user.innerHTML = user.innerHTML + cur[0];
        user.style.display = "flex"
        document.getElementById("login").style.display = "none"
    }
}
check_currentUser();

function register() {
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let mail = document.getElementById("mail").value;

    var arr = localStorage.getItem('userAccount_key');
    var txtArr = JSON.parse(arr)

    txtArr.acc.push(
        {
            id: txtArr.acc.at(-1).id + 1,
            name: name,
            pass: pass,
            email: mail,
        }
    )

    localStorage.setItem('userAccount_key', JSON.stringify(txtArr));
    alert("Đăng ký thành công!");
    location.reload()
    chuyen_doi2()
    alert("Xin hãy điền lại thông tin vừa đăng ký để đăng nhập")
}
function login() {
    var arr1 = localStorage.getItem('userAccount_key');
    let user = document.getElementById("log_name").value;
    if (user.length == 0) {
        alert("Tên đăng nhập không được bỏ trống")
    }
    else if (user.length < 2) {
        alert("Tên đăng nhập phải nhiều hơn 2 ký tự");
        return false;
    }

    var txtArr1 = JSON.parse(arr1);
    let tontai = 0;
    for (let item of txtArr1.acc) {
        if (user == item.name && document.getElementById("log_pass").value == item.pass) {
            tontai = 1;
        }
    }
    if (tontai == 1) {
        let currentUser = [user]
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location = "index.html";
    }
    else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}

function check_Register() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value
    let pass = document.getElementById("pass").value;
    let re_pass = document.getElementById("re-pass").value;
    if (name.length == 0 || pass.length == 0 || re_pass.length == 0) {
        alert("Bạn phải điền hết thông tin");
        return false;
    }
    else if (mail.length == 0 || mail.indexOf('@') == -1 || mail.indexOf('.') == -1) {
        alert("Cú pháp email không đúng")
        return false
    }
    else if (pass != re_pass) {
        alert("Xác nhận mật khẩu sai");
        return false;
    }

    let str_dstk = localStorage.getItem('userAccount_key');
    let dstk = JSON.parse(str_dstk);
    let check = 0;

    if (dstk.acc.length == 0) {
        check = 1;
    }
    else {
        for (let item of dstk.acc) {
            if (name == item.name) {
                alert("Tên tài khoản đã tồn tại!");
                return false;
            }
            else {
                check = 1;
            }
        }
    }
    if (check > 0) {
        register();
    }
}
let dang_xuat = 0
function menu_logout() {
    if (dang_xuat == 0) {
        document.getElementById('menu').style.display = 'flex'
        dang_xuat = 1
    }
    else if (dang_xuat == 1) {
        document.getElementById('menu').style.display = 'none'
        dang_xuat = 0
    }
}
function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}