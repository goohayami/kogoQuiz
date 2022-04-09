'use strict';

const $button = document.getElementsByTagName('button');
const length = $button.length;

const quiz =[
  // 1
  {
  question: 'すまふ',
  ansers :["住む",
           "抵抗する",
           "囲う",
           "謝る",],
  anser :  "抵抗する" ,      
  },
// 2
  {
  question: 'めざまし',
  ansers :["気にくわない",
           "著しい",
           "きわだっている",
           "目が覚める",],
  anser :  "気にくわない" , 
  },
// 3
  {
  question: 'ゆくりなし',
  ansers :["騒々しい",
           "突然だ",
           "うっとうしい",
           "忙しい",],
  anser :  "突然だ" , 
  },
// 4
  {
  question: 'なめげなり',
  ansers :["泣いている",
           "無理矢理だ",
           "いい加減だ",
           "無礼だ",],
  anser :  "無礼だ" , 
  },
// 5
  {
  question: 'まめやかなり',
  ansers :["真面目だ",
           "小心者だ",
           "穏やかだ",
           "怪しげだ",],
  anser :  "真面目だ" , 
  },
  // 6
  {
  question: 'まばゆし',
  ansers :["美しい",
           "輝いている",
           "恥ずかしい",
           "羨ましい",],
  anser :  "恥ずかしい" , 
  },
  // 7
  {
  question: 'まさなし',
  ansers :["うそつき",
           "難しい",
           "つまらない",
           "よくない",],
  anser :  "よくない" , 
  },
  // 8
  {
  question: 'いつしか',
  ansers :["そのうちに",
           "早くも",
           "いつの間にか",
           "いずれは",],
  anser :  "早くも" , 
  },
  // 9
  {
  question: 'あてなり',
  ansers :["身分が高い",
           "間違いだ",
           "適当である",
           "その人物だ",],
  anser :  "身分が高い" , 
  },
  // 10
  {
  question: 'おほとのごもる',
  ansers :["遊びにいく",
           "演奏なさる",
           "おやすみになる",
           "食事をする",],
  anser :  "おやすみになる" , 
  },
  
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < length){
    $button[buttonIndex].textContent = quiz[quizIndex].ansers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].anser === e.target.textContent){
    window.alert("正解です！");
    score++;
  } else {
    window.alert("不正解です！");
  }
  
  quizIndex++;

  if(quizIndex < quizLength) {
      setupQuiz();
  } else {
      window.alert(`"これでおしましいです！あなたのスコアは${score*10}点です"`);
  }
};


let handlerIndex = 0;
while(handlerIndex < length){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
};






