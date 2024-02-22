import "./App.css";
import IM1 from "./assets/im1.jpg";
import IM2 from "./assets/im2.jpg";
import IM3 from "./assets/im3.jpg";
import PR from "./assets/pr.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Practice Report
        <div>
          <b>Вступ</b>
          <div>
            З 2 9 січня по 16 лютого ми проходили виробничу практику у ТОВ
            “TRANSOFT GROUP”. TRANSOFT GROUP - це компанія, яка спеціалізується
            на розробці та підтримці рішень, заснованих на Magento, щоб сприяти
            трансформації бізнесу, підвищенню клієнтського досвіду та
            операційній ефективності в різних галузях. Використовуючи передові
            технології та глибокі галузеві знання, TRANSOFT GROUP розробляє
            інноваційні рішення, які допомагають клієнтам досягти своїх
            бізнес-цілей та впевнено конкурувати на ринку.
          </div>
          <div style={{ margin: "50px 0" }}>
            <img src={PR} alt="alt" width="100%" />
            <b>Фото з бази практики</b>
          </div>
          <div style={{ margin: "50px 0" }}>
            <img src={IM1} alt="alt" width="100%" />
            <b>Фото з адмін панелі 1</b>
          </div>
          <div style={{ margin: "50px 0" }}>
            <img src={IM2} alt="alt" width="100%" />
            <b>Фото з адмін панелі 2</b>
          </div>
          <div style={{ margin: "50px 0" }}>
            <img src={IM3} alt="alt" width="100%" />
            <b>Фото з вебсайту</b>
          </div>
          <b>Висновок</b>
          <div style={{ margin: "50px 0" }}>
            З 29 січня по 16 лютого ми проходили виробничу практику. Темою
            практики була розробка модулю із використанням LAMP. У цьому звіті
            підведені підсумки роботи за період проходження виробничої практики.
            На проекті було використано такі технології: Apache, Magento 2,
            composer, ElasticSearch, MySQL, PHP. Дана виробнича практика була
            для мене надзвичайно корисною. Протягом виробничої практики я
            удосконалив свої знання та навички використання вище описаних
            модулів. Я розробив адмінську панель з можливістю створення сторінки
            новин, підтягнув свої знання і практичні навички у використанні
            Magento та створенням архітектури проекту. Отже, виробнича практика
            була для мене корисною та цікавою.
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
