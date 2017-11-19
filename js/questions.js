var questions = [
  {
    type: "choose",
    question: "<h3>Що таке система?</h3>",
    answers: [
      "Комплекс системного забезпечення, що надає можливості створення, оновлення та пошуку інформації.",
      "Складна структура, яка взаємодіє з оточенням як єдине ціле",
      "Сукупність елементів й підсистем"
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Які бувають системи за субстанціональною ознакою?</h3>",
    answers: [
      "Природні, штучні, концептуальні",
      "Відкриті, закриті",
      "Математичні, хімічні, технічні"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Найпростіша неподільна частина системи це?</h3>",
    answers: [
      "Елемент",
      "Об’єкт",
      "Пристрій"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>З чого складається шкала Сааті?</h3>",
    answers: [
      "Оцінка та метод",
      "Предмет та пріорітет",
      "Ступінь переваги та міра важливості"
    ],
    correct: [3]
  },
  {
    type: "choose",
    question: "<h3>Який вид має символічна форма системи?</h3>",
    answers: [
      "(X, G, S)",
      "(<M, N>, R)",
      "(X, <U, Z>)"
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Що таке ієрархія?</h3>",
    answers: [
      "Об’єкт, що складається із множини елементів.",
      "Система, яка складається з незалежних підмножин (груп), при цьому об’єкти однієї групи знаходяться під впливом іншої групи",
      "Множина елементів та їх зв’язків",
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Дайте визначення терміну синергія?</h3>",
    answers: [
      "Цілеспрямованість дій компонентів посилює ефективність функціонування системи",
      "Цілі компонентів системи не збігаються з функціями системи",
      "Здатність системи зберігати працездатність при відмові її окремих елементів"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Наукова і методологічна концепція дослідження об’єктів, що є системами – це?</h3>",
    answers: [
      "Формальна система",
      "Загальна теорія систем",
      "Теорія систем"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Який вчений поставив задачу створення теорії системи, як самостійної наукової дисципліни?</h3>",
    answers: [
      "Томас Соаті",
      "Норберт Вінер",
      "Людвиг фон Берталанфі"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Алфавіт це?</h3>",
    answers: [
      "Скінчена кількість символів, що включає букви",
      "Неcкінчена кількість символів, що включає букви, символи операцій і зв'язок ",
      "Скінченна або неcкінчена кількість символів, що включає букви, символи операцій і зв'язок"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Установіть хронологічну послідовність етапу життєвого циклу системи</h3>",
    answers: [
      "Етап появи функціоналу потреби в системі; етап формування системи; етап нормального функціоналу, зростання і розвитку системи; етапи регресу",
      "Eтап формування системи; етап появи функціоналу потреби в системі; етап нормального функціоналу, зростання і розвитку системи; етапи регресу",
      "Етап появи функціоналу потреби в системі; етап формування системи; етапи регресу; етап нормального функціоналу, зростання і розвитку системи"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Що таке рівновага системи?</h3>",
    answers: [
      " Ситуація, коли всі чинники врівноважують один одного так, що змінна величина не змінюється",
      "Стан, в якому внутрішні процеси не приводять до зміни параметрів",
      "Певний усталений стан"
    ],
    correct: [3]
  }
];

$("document").ready(function () {
  $("#jQuizler").jQuizler(questions);
});