let log = document.getElementById('log') as Element;
let labyrinth = document.getElementById('labyrinth') as Element;

if(window.localStorage.getItem('userName') == null){
    window.localStorage.setItem('userName','Yuka');
}

window.localStorage.setItem('userHP','10');
window.localStorage.setItem('userLevel','1');
window.localStorage.setItem('userMoney','100');
window.localStorage.setItem('userItem',JSON.stringify(['나무 검','사과']));

let monster = {
    slime:{
        name:"slime",
        info:"별로 신경쓰이지 않는 슬라임이다",
        hp:5,
        maxHp:15,
        level:1,
        maxLevel:5
    }
};

let count : number = 0;

labyrinth.addEventListener('click',()=>{
    count++;
    log.innerHTML = `<p>${count} | ${window.localStorage.getItem('userName')}이(가) ${monster.slime.name}을(를) 잡았다!</p>` + log.innerHTML;
    window.localStorage.setItem('logData',`<p>========[ ${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일 ${new Date().getHours()}시 ${new Date().getMinutes()}분 ${new Date().getSeconds()}초 ]========</p>${log.innerHTML}`);
});

window.addEventListener('load',()=>{
    document.querySelector('#log').innerHTML = window.localStorage.getItem('logData');
});

document.getElementById('name')?.addEventListener('input',()=>{
    window.localStorage.setItem('userName',document.getElementById('name')?.value);
});