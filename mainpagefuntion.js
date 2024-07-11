const bg = document.querySelector('#bg');
const ranbg = document.querySelector('#randombg');
const dark = document.querySelector('#dark');
const realUpload = document.querySelector('#real-upload');
const bodybg = document.querySelector('body');

// 이미지 업로드
function getImageFiles(e) {
  const files = e.currentTarget.files;
  if (files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(event) {
      bodybg.style.backgroundImage = `url(${event.target.result})`;
    };
    reader.readAsDataURL(files[0]);
  }
}

function randombg(){
  bodybg.style.backgroundImage = `url("https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 100)}")`
}

bg.addEventListener('click', () => realUpload.click());
realUpload.addEventListener('change', getImageFiles);

ranbg.addEventListener('click', randombg)




//날짜, 시간 표시

let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
let daytxt = "Null";

if(day == 0){
  daytxt = "일요일";
}
else if(day == 1){
  daytxt = "월요일";
}
else if(day == 2){
  daytxt = "화요일";
}
else if(day == 3){
  daytxt = "수요일";
}
else if(day == 4){
  daytxt = "목요일";
}
else if(day == 5){
  daytxt = "금요일";
}
else if(day == 6){
  daytxt = "토요일";
}

let datetxt = document.querySelector('#date');

datetxt.innerHTML = (year+'.'+month+'.'+date+'.'+daytxt);

let hourbox = document.querySelector('#hour');
let minbox = document.querySelector('#min');
let secbox = document.querySelector('#sec');

function updateClock() {
  let nowtime = new Date();
  let hours = nowtime.getHours().toString().padStart(2, '0');
  let minutes = nowtime.getMinutes().toString().padStart(2, '0');
  let seconds = nowtime.getSeconds().toString().padStart(2, '0');
  hourbox.innerHTML = (hours);
  minbox.innerHTML = (minutes);
  secbox.innerHTML = (seconds);
}

// 매 초마다 시계 업데이트
setInterval(() => updateClock(), 1);

// 페이지 로드 시에도 시계 업데이트
updateClock();



//스케쥴 표시
const weekdayTimetable = [{
  name: '심야 자습 1 타임',
  time: {
    start: {
      hour: 0,
      minute: 0
    },
    end: {
      hour: 0,
      minute: 50
    }
  }
},{
  name: '심야 자습 2 타임',
  time: {
    start: {
      hour: 1,
      minute: 0
    },
    end: {
      hour: 1,
      minute: 50
    }
  }
}, {
  name: '아침 기상',
  time: {
    start: {
      hour: 6,
      minute: 30
    },
    end: {
      hour: 7,
      minute: 20
    }
  }
}, {
  name: '아침 식사',
  time: {
    start: {
      hour: 7,
      minute: 20
    },
    end: {
      hour: 8,
      minute: 15
    }
  }
}, {
  name: '아침자율학습',
  time: {
    start: {
      hour: 8,
      minute: 15
    },
    end: {
      hour: 8,
      minute: 50
    }
  }
}, {
  name: '조회',
  time: {
    start: {
      hour: 8,
      minute: 50
    },
    end: {
      hour: 9,
      minute: 0
    }
  }
}, {
  name: '1교시',
  time: {
    start: {
      hour: 9,
      minute: 0
    },
    end: {
      hour: 9,
      minute: 50
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 9,
      minute: 50
    },
    end: {
      hour: 10,
      minute: 0
    }
  }
}, {
  name: '2교시',
  time: {
    start: {
      hour: 10,
      minute: 0
    },
    end: {
      hour: 10,
      minute: 50
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 10,
      minute: 50
    },
    end: {
      hour: 11,
      minute: 0
    }
  }
}, {
  name: '3교시',
  time: {
    start: {
      hour: 11,
      minute: 0
    },
    end: {
      hour: 11,
      minute: 50
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 11,
      minute: 50
    },
    end: {
      hour: 12,
      minute: 0
    }
  }
}, {
  name: '4교시',
  time: {
    start: {
      hour: 12,
      minute: 0
    },
    end: {
      hour: 12,
      minute: 50
    }
  }
}, {
  name: '점심시간',
  time: {
    start: {
      hour: 12,
      minute: 50
    },
    end: {
      hour: 13,
      minute: 50
    }
  }
}, {
  name: '5교시',
  time: {
    start: {
      hour: 13,
      minute: 50
    },
    end: {
      hour: 14,
      minute: 40
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 14,
      minute: 40
    },
    end: {
      hour: 14,
      minute: 50
    }
  }
}, {
  name: '6교시',
  time: {
    start: {
      hour: 14,
      minute: 50
    },
    end: {
      hour: 15,
      minute: 40
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 15,
      minute: 40
    },
    end: {
      hour: 15,
      minute: 50
    }
  }
}, {
  name: '7교시',
  time: {
    start: {
      hour: 15,
      minute: 50
    },
    end: {
      hour: 16,
      minute: 40
    }
  }
}, {
  name: '청소 및 종례',
  time: {
    start: {
      hour: 16,
      minute: 40
    },
    end: {
      hour: 17,
      minute: 0
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 17,
      minute: 0
    },
    end: {
      hour: 17,
      minute: 10
    }
  }
}, {
  name: '방과후 1타임',
  time: {
    start: {
      hour: 17,
      minute: 10
    },
    end: {
      hour: 17,
      minute: 50
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 17,
      minute: 50
    },
    end: {
      hour: 17,
      minute: 55
    }
  }
}, {
  name: '방과후 2타임',
  time: {
    start: {
      hour: 17,
      minute: 55
    },
    end: {
      hour: 18,
      minute: 35
    }
  }
}, {
  name: '저녁식사',
  time: {
    start: {
      hour: 18,
      minute: 35
    },
    end: {
      hour: 19,
      minute: 50
    }
  }
}, {
  name: '야간자율학습 1타임',
  time: {
    start: {
      hour: 19,
      minute: 50
    },
    end: {
      hour: 21,
      minute: 10
    }
  }
}, {
  name: '쉬는시간',
  time: {
    start: {
      hour: 21,
      minute: 10
    },
    end: {
      hour: 21,
      minute: 30
    }
  }
}, {
  name: '야간자율학습 2타임',
  time: {
    start: {
      hour: 21,
      minute: 30
    },
    end: {
      hour: 22,
      minute: 50
    }
  }
}, {
  name: '수면 준비',
  time: {
    start: {
      hour: 22,
      minute: 50
    },
    end: {
      hour: 23,
      minute: 50
    }
  }
}];

const weekendTimetable = [{
  name: '아침 기상',
  time: {
    start: {
      hour: 7,
      minute: 0
    },
    end: {
      hour: 7,
      minute: 50
    }
  }
}, {
  name: '아침 식사',
  time: {
    start: {
      hour: 7,
      minute: 50
    },
    end: {
      hour: 8,
      minute: 10
    }
  }
}, {
  name: '인원 점검',
  time: {
    start: {
      hour: 8,
      minute: 50
    },
    end: {
      hour: 9,
      minute: 0
    }
  }
}, {
  name: '오전 1타임',
  time: {
    start: {
      hour: 9,
      minute: 0
    },
    end: {
      hour: 10,
      minute: 20
    }
  }
}, {
  name: '쉬는 시간',
  time: {
    start: {
      hour: 10,
      minute: 20
    },
    end: {
      hour: 10,
      minute: 40
    }
  }
}, {
  name: '오전 2타임',
  time: {
    start: {
      hour: 10,
      minute: 40
    },
    end: {
      hour: 12,
      minute: 0
    }
  }
}, {
  name: '점심 식사',
  time: {
    start: {
      hour: 12,
      minute: 0
    },
    end: {
      hour: 14,
      minute: 0
    }
  }
}, {
  name: '1차 자습',
  time: {
    start: {
      hour: 14,
      minute: 0
    },
    end: {
      hour: 16,
      minute: 0
    }
  }
}, {
  name: '쉬는 시간',
  time: {
    start: {
      hour: 16,
      minute: 0
    },
    end: {
      hour: 16,
      minute: 20
    }
  }
}, {
  name: '2차 자습',
  time: {
    start: {
      hour: 16,
      minute: 20
    },
    end: {
      hour: 18,
      minute: 0
    }
  }
}, {
  name: '저녁 식사',
  time: {
    start: {
      hour: 18,
      minute: 0
    },
    end: {
      hour: 20,
      minute: 0
    }
  }
}, {
  name: '야자 1타임',
  time: {
    start: {
      hour: 20,
      minute: 0
    },
    end: {
      hour: 21,
      minute: 0
    }
  }
}, {
  name: '쉬는 시간',
  time: {
    start: {
      hour: 21,
      minute: 0
    },
    end: {
      hour: 21,
      minute: 20
    }
  }
}, {
  name: '야자 2타임',
  time: {
    start: {
      hour: 21,
      minute: 20
    },
    end: {
      hour: 22,
      minute: 20
    }
  }
}, {
  name: '생활관 이동',
  time: {
    start: {
      hour: 22,
      minute: 20
    },
    end: {
      hour: 22,
      minute: 40
    }
  }
}];

const classSchedules = {
  1: ['', '', '','', '', '','국어','','수학','','음악','','사회','','컴일','','수학','','자율','','','','','','','','','',''],
  2: ['', '', '','','','','체육','','수학','','플밍','','py','','영어','','국어','','과학','','','','','','','','','',''],
  3: ['', '', '','','','','플밍','','사회','','컴일','','진로','','음악','','동아리','','자습','','','','','','','','','',''],
  4: ['', '', '','','','','체육','','과학','','py','','국어','','컴일','','영어','','영어','','','','','','','','','',''],
  5: ['', '', '','','','','사회','','음악','','과학','', '컴일', '','진로','', 'py','', '플밍','','','','','','','','','','']
};

function getCurrentActivity() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const weekday = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const isWeekend = (weekday === 0 || weekday === 6);
  const timetable = isWeekend ? weekendTimetable : weekdayTimetable;

  let currentActivity = null;
  let nextActivity = null;
  let currentClass = '';
  let nextClass = '';

  for (let i = 0; i < timetable.length; i++) {
    const activity = timetable[i];
    const start = activity.time.start;
    const end = activity.time.end;

    if ((currentHour > start.hour || (currentHour === start.hour && currentMinute >= start.minute)) &&
      (currentHour < end.hour || (currentHour === end.hour && currentMinute < end.minute))) {
      currentActivity = activity;
      nextActivity = timetable[(i + 1) % timetable.length];
      if (!isWeekend && classSchedules[weekday]) {
        currentClass = classSchedules[weekday][i]; // 각 교시를 대응
        nextClass = classSchedules[weekday][i+1]; // 각 교시를 대응
      }
      break;
    }
  }
  return { currentActivity, nextActivity, currentClass, nextClass };
}

function formatTimeRemaining(endHour, endMinute) {
  const now = new Date();
  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  const remainingTime = endTime - now;
  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateTimetable() {
  const { currentActivity, nextActivity, currentClass, nextClass } = getCurrentActivity();
  const weekday = new Date().getDay();
  const isWeekend = (weekday === 0 || weekday === 6);

  if (currentActivity) {
    const end = currentActivity.time.end;
    const remainingTime = formatTimeRemaining(end.hour, end.minute);
    const activityName = isWeekend ? currentActivity.name : `${currentActivity.name} (${currentClass})`;
    const remainhour = remainingTime.substring(0, 2);
    const remainmin = remainingTime.substring(3, 5);
    const remainsec = remainingTime.substring(6, 8);
    document.getElementById('remainhour').innerText = `${remainhour}`;
    document.getElementById('remainmin').innerText = `${remainmin}`;
    document.getElementById('remainsec').innerText = `${remainsec}`;
  } else {
    document.getElementById('remainhour').innerText = `00`;
    document.getElementById('remainmin').innerText = `00`;
    document.getElementById('remainsec').innerText = `00`;
  }

  if (nextActivity) {
    if(nextClass === '' || nextClass === undefined){
      const nextActivityName = isWeekend ? nextActivity.name : `${nextActivity.name}`;
      document.getElementById('remaintxt').innerText = `${nextActivityName}까지 남은 시간`;
    }
    else{
      const nextActivityName = isWeekend ? nextActivity.name : `${nextActivity.name} (${nextClass})`;
      document.getElementById('remaintxt').innerText = `${nextActivityName}까지 남은 시간`;
    }
  } else {
    document.getElementById('remaintxt').innerText = '다음 활동 없음';
  }
}

setInterval(updateTimetable, 1);
updateTimetable();


//todo리스트

let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let toDoList = document.getElementById('toDoList');    // 할 일 리스트창
let isLinethrough = 0
let istodofocuson = 0;

function todofocuson(){
  istodofocuson = 1;
  console.log(`on ${istodofocuson}`);
}

function todofocusoff(){
  istodofocuson = 0;
  console.log(`off ${istodofocuson}`);
}

function addtodolist(){
  var list = document.createElement('li');     // html 'li' 태그 만들기
  if (!inputBox.value)            // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert('내용을 입력해 주세요');
  else
  {

      list.innerText = inputBox.value;  // <li>입력된 할 일</li>
      toDoList.appendChild(list);       // 할 일 리스트창에 자식으로 붙이기
      inputBox.value= "";               // 할 일 입력창 초기화

  }
  list.addEventListener('click', function(){      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
    if (isLinethrough == 0){
      list.style.textDecoration = "line-through";
      isLinethrough = 1;
    }
    else{
      list.style.textDecoration = "none";
      isLinethrough = 0;
    }
  })
  list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
    toDoList.removeChild(list);
  })
}


addToDo.addEventListener('click', addtodolist)


document.addEventListener('keydown', function(event) {
  if (!istodofocuson) return
  if (event.keyCode === 13) {
    addtodolist()
  }
});

//test

//유튜브 링크 입력하면 재생

let inputlinkBox = document.getElementById('inputlinkField');  // 할 일 입력창
let addlinkbutton = document.getElementById('addlink');      // 버튼
let isytfocuson = 0;
let linksplit;
let reallink;
let ytplayer = document.querySelector('#ytplayer');
let romutrigger = document.querySelector('#trigger');

function ytfocuson(){
  isytfocuson = 1;
}

function ytfocusoff(){
  isytfocuson = 0;
}


romutrigger.addEventListener('dblclick', function (){
  ytplayer.src = (`https://www.youtube.com/embed/wLOvisqLDwI?si=89sRGA2V3JKP-5kT?autoplay=1&mute=1`);
  console.log('romu');
})


addlinkbutton.addEventListener('click', function(){    // 버튼에 클릭 이벤트가 발생하면
  if (!inputlinkBox.value){
    alert('링크를 입력해 주세요');
    inputlinkBox.value = '';
  }
  else
  {
    linksplit = inputlinkBox.value.split('=');
    reallink = linksplit[1];
    if(reallink === undefined){
      alert('잘못된 링크입니다');
      console.log("wrong link")
      inputlinkBox.value = '';
    }
    else{
      ytplayer.src = (`https://www.youtube.com/embed/${reallink}`);
      inputlinkBox.value = '';
      console.log(reallink);
    }

  }
})


document.addEventListener('keydown', function(event) {
  if (!isytfocuson) return
  if (event.keyCode === 13) {
    if (!inputlinkBox.value){
      alert('링크를 입력해 주세요');
      inputlinkBox.value = '';
    }
    else {
      linksplit = inputlinkBox.value.split('=');
      reallink = linksplit[1];
      if(reallink === undefined){
        alert('잘못된 링크입니다');
        console.log("wrong link")
        inputlinkBox.value = '';
      }
      else{
        ytplayer.src = (`https://www.youtube.com/embed/${reallink}`);
        inputlinkBox.value = '';
        console.log(reallink);
      }
    }
  }
});



//배경 색

function handlePaste(event) {
  const clipboardData = (event.clipboardData || window.clipboardData).getData('text').trim();
  const mainBody = document.querySelector('body');

  // 정규식을 이용해 클립보드의 데이터가 RGB 값인지 또는 헥스 코드인지 확인
  const rgbPattern = /^\(?\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)?$/;
  const hexPattern = /^#?([0-9A-F]{3}){1,2}$/i;

  if (rgbPattern.test(clipboardData)) {
    mainBody.style.backgroundImage = 'none';
    // RGB 값일 경우 앞에 'rgb(' 와 ')'를 추가
    const formattedRgb = clipboardData.replace(/[^\d,]/g, '').trim(); // 숫자와 쉼표를 제외한 모든 문자 제거
    mainBody.style.backgroundColor = `rgb(${formattedRgb})`;
  } else if (hexPattern.test(clipboardData)) {
    mainBody.style.backgroundImage = 'none';
    // 클립보드 데이터가 '#' 없이 6자리 또는 3자리 헥스 코드인 경우 처리
    const color = clipboardData.startsWith('#') ? clipboardData : `#${clipboardData}`;
    mainBody.style.backgroundColor = color;
  }

  // 핸들러를 제거하여 한 번만 실행되도록 함
  document.removeEventListener('paste', handlePaste);
}

document.addEventListener('keydown', function(event) {
  // Ctrl+V 키가 눌렸을 때 처리
  if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
    document.addEventListener('paste', handlePaste);
    console.log("복사 성공")
  }
});

//날씨 구현
let wbutton = document.querySelector('#refreshweather');
const API_KEY = 'd446c98bdfa541df10b9ecbe492387d4';
let weatherdes = document.querySelector('#weather');
const wsuccess = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getWeather(latitude, longitude);
  console.log(position)
}

const wfail = () => {
  alert("위치 정보를 불러올 수 없습니다")
}

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((weatherresponse) => {
      return weatherresponse.json();
    })
    .then((weatherjson) => {
      console.log(weatherjson);
      const temperature = Math.round(weatherjson.main.temp);
      const place = weatherjson.name;
      const description = weatherjson.weather[0].description;
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${API_KEY}`
      )
        .then((kolocationresponse) => {
          return kolocationresponse.json();
        })
        .then((kolocationjson) => {
          console.log(kolocationjson);
          const kolocation = kolocationjson[0].local_names.ko;
          weatherdes.innerHTML = (`${kolocation} ${temperature}°C`);
          console.log(kolocation, temperature);
        })
    })
}

wbutton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(wsuccess, wfail);
})

window.onload=function () {
  navigator.geolocation.getCurrentPosition(wsuccess, wfail);
}


//로그인
function init() {
  if (location.href.indexOf("token") === -1) {
    if (!localStorage.getItem("email") || localStorage.getItem("email") === '') {
      location.href = "loginpage.html";
    }
  }else {
    const token = location.href.split("?")[1].split("&").filter(e => e.split("=")[0] === "token")[0].split("=")[1];
    const dataBase64 = token.split(".")[1];
    const data = JSON.parse(decodeURIComponent(escape(window.atob(dataBase64)))).data;
    localStorage.setItem("email", data.email);
    localStorage.setItem("num", data.number);
    localStorage.setItem("name", data.name);
    const email = localStorage.getItem("email");
    const num = localStorage.getItem("num");
    const name = localStorage.getItem("name");
    const personal_num = num.substring(2, 4).replace(/^0+/, '');
    const class_num = num.substring(1, 2);
    const grade = num.substring(0, 1);

    console.log(data);
    console.log(email);
    console.log(num);
    console.log(name);
    console.log(personal_num);
    console.log(class_num);
    console.log(grade);
  }
}

window.onload = () => init();
window.onload = () => timetable()

//시간표
function timetable(){
  fetch(
      `https://dimigo.net/api/timetable/1/3`
  )
      .then((timeres) => {
        return timeres.json();
      })
      .then((timejson) =>{
        console.log(timejson);
      })
}



// const getWeather = (lat, lon) => {
//   fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
//   )
//       .then((weatherresponse) => {
//         return weatherresponse.json();
//       })
//       .then((weatherjson) => {
//         console.log(weatherjson);
//         const temperature = Math.round(weatherjson.main.temp);
//         const place = weatherjson.name;
//         const description = weatherjson.weather[0].description;