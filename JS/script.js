// Lấy tất cả các nút
const buttons = document.querySelectorAll('.btn');

// Biến để lưu nút đang được chọn
let activeButton = null;

// Lặp qua các nút và thêm sự kiện click
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Nếu có nút khác đang được chọn, bỏ class 'active' khỏi nó
        if (activeButton) {
            activeButton.classList.remove('active');
        }

        // Đặt nút hiện tại là nút được chọn và thêm class 'active'
        this.classList.add('active');
        activeButton = this;
    });
});
