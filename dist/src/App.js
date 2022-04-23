var _a;
var log = document.getElementById('log');
var labyrinth = document.getElementById('labyrinth');
if (window.localStorage.getItem('userName') == null) {
    window.localStorage.setItem('userName', 'Yuka');
}
window.localStorage.setItem('userHP', '10');
window.localStorage.setItem('userLevel', '1');
window.localStorage.setItem('userMoney', '100');
window.localStorage.setItem('userItem', JSON.stringify(['나무 검', '사과']));
var monster = {
    slime: {
        name: "slime",
        info: "별로 신경쓰이지 않는 슬라임이다",
        hp: 5,
        maxHp: 15,
        level: 1,
        maxLevel: 5
    }
};
var count = 0;
labyrinth.addEventListener('click', function () {
    count++;
    log.innerHTML = "<p>".concat(count, " | ").concat(window.localStorage.getItem('userName'), "\uC774(\uAC00) ").concat(monster.slime.name, "\uC744(\uB97C) \uC7A1\uC558\uB2E4!</p>") + log.innerHTML;
    window.localStorage.setItem('logData', "<p>========[ ".concat(new Date().getFullYear(), "\uB144 ").concat(new Date().getMonth() + 1, "\uC6D4 ").concat(new Date().getDate(), "\uC77C ").concat(new Date().getHours(), "\uC2DC ").concat(new Date().getMinutes(), "\uBD84 ").concat(new Date().getSeconds(), "\uCD08 ]========</p>").concat(log.innerHTML));
});
window.addEventListener('load', function () {
    document.querySelector('#log').innerHTML = window.localStorage.getItem('logData');
});
(_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () {
    var _a;
    window.localStorage.setItem('userName', (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value);
});
