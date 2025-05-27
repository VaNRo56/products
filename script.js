// script.js

// Функція діалогу з користувачем (alert, prompt, confirm, цикл)
function userDialog() {
  alert("Ласкаво просимо до магазину свіжих продуктів!");

  let attempts = 3;

  while (attempts > 0) {
    let answer = prompt("Введіть назву продукту, який хочете придбати:");

    if (answer === null) {
      alert("Ви скасували вибір продукту.");
      break;
    }

    answer = answer.trim();

    if (answer === "") {
      alert("Ви не ввели назву продукту. Спробуйте ще раз.");
      attempts--;
      continue;
    }

    if (confirm(`Ви дійсно хочете купити: ${answer}?`)) {
      alert(`Дякуємо за замовлення продукту: ${answer}! Скоро ми з вами зв'яжемося.`);
      break;
    } else {
      alert("Спробуйте вибрати інший продукт.");
    }
    attempts--;
  }

  if (attempts === 0) {
    alert("Ви вичерпали кількість спроб вибору продукту.");
  }
}

// Функція показу інформації про розробника з параметрами і значенням за замовчуванням
function showDeveloperInfo(lastName, firstName, position = "студент") {
  alert(`Розробник сайту магазину свіжих продуктів:\n${lastName} ${firstName}\nПосада: ${position}`);
}

// Функція порівняння двох рядків та вивід більшого через alert
function compareStrings(str1, str2) {
  const bigger = str1.length >= str2.length ? str1 : str2;
  alert(`Більший рядок за довжиною:\n${bigger}`);
}

// Зміна фону сторінки на 30 секунд
function changeBackgroundTemporarily() {
  const originalColor = document.body.style.backgroundColor || "#f5f5dc";
  document.body.style.backgroundColor = "#d1ffd6"; // світло-зелений фон

  setTimeout(() => {
    document.body.style.backgroundColor = originalColor;
  }, 30000);
}

// Перенаправлення на іншу сторінку (Wikipedia)
function goToWikipedia() {
  location.href = "https://www.wikipedia.org";
}

// Автоматичний запуск діалогу при завантаженні сторінки
window.addEventListener("load", () => {
  userDialog();

  // Приклад роботи з DOM

  // getElementById: Змінюємо колір заголовка магазину
  const headerTitle = document.getElementById("header-title");
  if (headerTitle) {
    headerTitle.style.color = "darkgreen";
  }

  // querySelectorAll: Знаходимо всі параграфи з класом "info" і робимо текст жирним
  const infoParagraphs = document.querySelectorAll("p.info");
  infoParagraphs.forEach((p, i) => {
    p.style.fontWeight = "bold";
    p.textContent += ` (Пункт ${i + 1})`;
  });

  // Створення і вставка нового елемента в кінець body
  const newDiv = document.createElement("div");
  const newText = document.createTextNode("Заходьте ще");
  newDiv.appendChild(newText);
  document.body.appendChild(newDiv);

  // Використання prepend: додаємо елемент на початок body
  const prependedDiv = document.createElement("div");
  prependedDiv.textContent = "Вітаємо Вас";
  document.body.prepend(prependedDiv);

  // Використання after: додаємо елемент після header
  const afterDiv = document.createElement("div");
  afterDiv.textContent = "Прогорніть нижче";
  const header = document.querySelector("header");
  if (header) {
    header.after(afterDiv);
  }

  // Використання replaceWith: замінюємо старий заголовок новим
  const oldTitle = document.getElementById("header-title");
  if (oldTitle) {
    const replacementTitle = document.createElement("h2");
    replacementTitle.textContent = "Новий заголовок замість старого";
    oldTitle.replaceWith(replacementTitle);
  }

  // Використання remove: видаляємо перший абзац з класом info (якщо є)
  if (infoParagraphs.length > 0) {
    infoParagraphs[0].remove();
  }

  // Демонстрація innerHTML, outerHTML, nodeValue, textContent
  const firstProductName = document.querySelector("table tr:nth-child(2) td:nth-child(2)");
  if (firstProductName) {
    console.log("innerHTML:", firstProductName.innerHTML);
    console.log("outerHTML:", firstProductName.outerHTML);

    // Змінимо innerHTML:
    firstProductName.innerHTML = "<b>Зелене яблуко</b>";

    // Отримаємо текстовий вузол та змінимо nodeValue
    const textNode = firstProductName.firstChild;
    if (textNode) {
      console.log("nodeValue:", textNode.nodeValue);
      textNode.nodeValue = "Зелене яблуко";
    }

    console.log("textContent:", firstProductName.textContent);
  }

  // Використання document.write - викликаємо один раз (зазвичай застосовується під час завантаження)
  // Тут для демонстрації (але в реальних проєктах document.write використовується обережно)
  // document.write("<p>Текст доданий через document.write.</p>");
});

// Прив’язка функцій до кнопок через addEventListener
document.addEventListener("DOMContentLoaded", () => {
  const showDevBtn = document.getElementById("show-developer");
  if (showDevBtn) {
    showDevBtn.addEventListener("click", () => {
      showDeveloperInfo("Чесноков", "Іван");
    });
  }

  const compareStrBtn = document.getElementById("compare-strings");
  if (compareStrBtn) {
    compareStrBtn.addEventListener("click", () => {
      let s1 = prompt("Введіть перший рядок:");
      if (s1 === null) return;
      let s2 = prompt("Введіть другий рядок:");
      if (s2 === null) return;
      compareStrings(s1, s2);
    });
  }

  const changeBgBtn = document.getElementById("change-bg");
  if (changeBgBtn) {
    changeBgBtn.addEventListener("click", () => {
      changeBackgroundTemporarily();
    });
  }

  const goWikiBtn = document.getElementById("go-wikipedia");
  if (goWikiBtn) {
    goWikiBtn.addEventListener("click", () => {
      goToWikipedia();
    });
  }
});


// 1) Події миші та обробники

function handleClickAttr(event) {
  alert("Ви натиснули кнопку магазину!");
}

const btnProp = document.getElementById("btnProp");
btnProp.onclick = function(event) {
  alert("Натиснули кнопку допомоги у магазині.");
};

function handler1(event) {
  console.log("Обробник 1: дія для магазину");
}
function handler2(event) {
  console.log("Обробник 2: додатковий лог для магазину");
}

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", handler1);
btnAdd.addEventListener("click", handler2);

const objHandler = {
  handleEvent(event) {
    alert(`Ви взаємодієте з елементом магазину`);
  }
};
const btnObj = document.getElementById("btnObj");
btnObj.addEventListener("click", objHandler);

function removableHandler() {
  alert("Ви видалили продукти");
  btnRemove.removeEventListener("click", removableHandler);
}
const btnRemove = document.getElementById("btnRemove");
btnRemove.addEventListener("click", removableHandler);

// 2) Підсвічування елементів списку

const list = document.getElementById("productList");
list.addEventListener("click", function(event) {
  Array.from(list.children).forEach(li => li.classList.remove("highlight"));
  if (event.target.tagName === "LI") {
    event.target.classList.add("highlight");
  }
});

// 3) Меню з кнопками магазину і поведінкою

const menu = document.getElementById("menu");
menu.addEventListener("click", function(event) {
  const behavior = event.target.dataset.behavior;
  if (!behavior) return;

  switch(behavior) {
    case "alert":
      alert("Ви активували повідомлення магазину!");
      break;
    case "log":
      console.log("Активована дія для журналу магазину");
      break;
    case "changeColor":
      event.target.style.backgroundColor = "lightgreen";
      break;
    default:
      console.log("Невідома дія магазину");
  }
});
// Підсвічування елементів при наведенні

const apple = document.getElementById("apple");
const basket = document.getElementById("basket");

apple.addEventListener("mouseover", (event) => {
  event.target.style.filter = "brightness(1.2)";
});
apple.addEventListener("mouseout", (event) => {
  event.target.style.filter = "none";
});

basket.addEventListener("mouseover", (event) => {
  basket.classList.add("highlight");
});
basket.addEventListener("mouseout", (event) => {
  basket.classList.remove("highlight");
});

// Перетягування яблука в корзину

let isDragging = false;
let offsetX, offsetY;

apple.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - apple.offsetLeft;
  offsetY = event.clientY - apple.offsetTop;
  apple.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;
  apple.style.left = event.clientX - offsetX + "px";
  apple.style.top = event.clientY - offsetY + "px";
});

document.addEventListener("mouseup", (event) => {
  if (!isDragging) return;
  isDragging = false;
  apple.style.cursor = "grab";

  // Перевіряємо, чи яблуко над кошиком
  const basketRect = basket.getBoundingClientRect();
  const appleRect = apple.getBoundingClientRect();

  const isOverBasket =
    appleRect.left < basketRect.right &&
    appleRect.right > basketRect.left &&
    appleRect.top < basketRect.bottom &&
    appleRect.bottom > basketRect.top;

  if (isOverBasket) {
    alert("Яблуко покладено у кошик! Дякуємо за покупку!");
    // Можна прибрати яблуко або повернути на початок:
    apple.style.left = "50px";
    apple.style.top = "100px";
  }
});
