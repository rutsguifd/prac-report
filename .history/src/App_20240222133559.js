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
          <div>
            <img src={PR} alt="alt" width="100%" />
            <b>Фото з бази практики</b>
          </div>

          <img src={IM1} alt="alt" />
          <b>Фото з бази практики</b>
          <img src={IM2} alt="alt" />
          <b>Фото з бази практики</b>
          <img src={IM3} alt="alt" />
          <b>Фото з бази практики</b>
        </div>
      </header>
    </div>
  );
}

export default App;
