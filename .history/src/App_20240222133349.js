import "./App.css";
import IM1 from "./assets/im1.jpg";

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
          <img src={IM1} alt="alt" />
        </div>
      </header>
    </div>
  );
}

export default App;
