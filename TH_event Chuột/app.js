let imgBall = null;
imgBall = document.getElementById("ball");

//Tạo hàm init để khởi tạo imgBall mà Chúng Ta đã đặt Vị Trí Và các thuộc tính còn lại
function init() {
    imgBall = document.getElementById("ball");
    imgBall.style.position = 'relative';
    imgBall.style.left = '0px';
    imgBall.style.top = '0px';
}

//tạo hàm moveRight. để tăng khoảng cách trái 10px
//- co thể đặt giá trị âm ddeerdi chuyển sang phải
let right = true;

function moveRight() {
    let a = parseInt(imgBall.style.left);
    if (right === true) {
        a += 10;
        console.log(a);
        imgBall.style.left = a + 'px';
        if (a >= 500) {
            right = false;
        }
    }
    if (right === false) {
        a -= 10;
        console.log(a);
        imgBall.style.left = a + 'px';
        if (a <= 0) {
            right = true;
        }
    }
}

//gọi hàm init khi trình duyệt được tải lần đâu
window.onload = init;

