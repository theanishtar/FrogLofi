

export const changImageBC = {

}

export function changImageBC() {
    document.querySelectorAll('.photo-item').addEventListener("click", function () {
        changeBC(this); // Truyền tham chiếu đến phần tử <a> khi sự kiện click xảy ra
    });
}