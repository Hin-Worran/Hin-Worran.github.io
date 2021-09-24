//绑定组件
const input_min = document.querySelector('#minNum');
const input_max = document.querySelector('#maxNum');
const output = document.querySelector('.output');
const button = document.querySelector('button');

console.log(this);
input_min.focus();


//绑定事件
input_min.addEventListener('change', generateRandNum);
input_max.addEventListener('change', generateRandNum);
button.addEventListener('click',generateRandNum);


//函数——生成随机数
function generateRandNum (e) {
    console.log(e);
    let minNum = input_min.value;
    let maxNum = input_max.value;
    let randNum = Number(minNum) + Math.floor(Math.random() * (maxNum - minNum + 1));
    console.log(randNum);
    if(isNaN(randNum)){
        output.textContent = '请输入一个数字';
    }
    else{
        output.textContent = '生成的随机数是：' + randNum;
    }
}