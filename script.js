const info = {  //1a
    os: navigator.platform,
    browser: navigator.userAgent,
    language: navigator.language,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height
};

localStorage.setItem("userInfo", JSON.stringify(info));

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//1b
document.getElementById("footer").innerHTML += `
<br><br>
<b>ОС:</b> ${userInfo.os}<br>
<b>Браузер:</b> ${userInfo.browser}<br>
<b>Мова:</b> ${userInfo.language}<br>
<b>Розмір екрану:</b> ${userInfo.screenWidth} x ${userInfo.screenHeight}
`;
// 2 a
fetch('https://jsonplaceholder.typicode.com/posts/10/comments')
    .then(response => response.json())
    .then(comments => {
        const list = document.createElement('ul');

        comments.forEach(comment => {
            const item = document.createElement('li');
            item.innerHTML = `<strong>${comment.name}</strong><br>${comment.body}`;
            list.appendChild(item);
        });

        document.getElementById('comments').appendChild(list);
    })
    .catch(error => console.log('Помилка:', error));

    // 3
    setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

document.getElementById("close").onclick = function () {
    document.getElementById("modal").style.display = "none";
};
const themeBtn = document.getElementById("themeToggle");
// 4
themeBtn.onclick = function () {
    document.body.classList.toggle("dark-theme");
};
const hour = new Date().getHours();

if (hour >= 21 || hour < 7) {
    document.body.classList.add("dark-theme");
}