// Các câu chúc năm mới
const messages = [
    "Chúc mừng năm mới! An khang thịnh vượng!",
    "Chúc bạn một năm mới tràn đầy sức khỏe và hạnh phúc!",
    "Năm mới đến, chúc bạn thành công rực rỡ và may mắn không ngừng!",
    "Chúc bạn một năm mới ngập tràn niềm vui và sự an lành!",
    "Đầu năm hỷ sự khắp nơi, chúc bạn thành công, nụ cười chẳng phai. Chúc xuân thêm sắc thêm tài, lòng người trọn vẹn, ngày mai sáng ngời.",
    "Chúc bạn/mọi người một năm may mắn quanh năm, sức khỏe dồi dào, bình an trọn vẹn.",
    "Chúc bạn và gia đình một năm mới an khang thịnh vượng, gia đình hạnh phúc trọn vẹn yêu thương.",
    "Chúc xuân như ý, nhà nhà ấm no, mỗi ngày một phúc, mỗi giờ thêm vui.",
    "Cả năm tiền bạc dồi dào, công việc hanh thông, thành công rực rỡ.",
    
];

// Lấy các phần tử
const openCardButton = document.getElementById("openCardButton");
const messageBox = document.getElementById("messageBox");
const messageElement = document.getElementById("message");
const fallingFlowers = document.getElementById("fallingFlowers");
const audioPlayer = document.getElementById('audioPlayer');

// Sự kiện khi nhấn nút "Chúc Mừng Năm Mới"
openCardButton.addEventListener("click", () => {
    // Ẩn tấm thiệp và hiển thị câu chúc
    document.getElementById("card").style.display = "none";
    messageBox.style.display = "block";
    openCardButton.style.display = "none";


    // Chọn câu chúc ngẫu nhiên
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
    // Hiệu ứng hoa mai rơi
    createFallingFlowers();
});

// Hàm tạo hiệu ứng hoa mai rơi
function createFallingFlowers() {
    const numFlowers = 20; // Số lượng hoa mai rơi

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Đặt hoa mai tại vị trí ngẫu nhiên trên màn hình
        flower.style.left = Math.random() * 100 + "%";
        flower.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Thời gian rơi ngẫu nhiên

        fallingFlowers.appendChild(flower);

        // Xóa hoa mai sau khi hoàn thành animation
        flower.addEventListener("animationend", () => {
            flower.remove();
        });
    }
}
