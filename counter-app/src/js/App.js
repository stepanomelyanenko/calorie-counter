import '../css/style.css';
import '../css/normalize.css'

import {useState} from 'react';
import {calculateResult, Gender, InitialParams} from "./const";

function App() {
  const [isCalculationAvailable, setIsCalculationAvailable] = useState(false);
  const [isResetAvailable, setIsResetAvailable] = useState(false);
  const [isResultAvailable, setIsResultAvailable] = useState(false);

  const [params, setParams] = useState(InitialParams);

  const [result, setResult] = useState({
    maintenance: 0,
    loss: 0,
    gain: 0
  });

  const checkCalculationAvailable = () => {
    if (params.age > 0 && params.height > 0 && params.weight > 0) {
      setIsCalculationAvailable(true);
    } else {
      setIsCalculationAvailable(false);
    }
  };

  const genderChangeHandle = (evt) => {
    setParams({
      ...params,
      gender: evt.target.value,
    });
    setIsResetAvailable(true);
    checkCalculationAvailable();
  };

  const ageChangeHandle = (evt) => {
    setParams({
      ...params,
      age: evt.target.value,
    });
    setIsResetAvailable(true);
    checkCalculationAvailable();
  };

  const heightChangeHandle = (evt) => {
    setParams({
      ...params,
      height: evt.target.value,
    });
    setIsResetAvailable(true);
    checkCalculationAvailable();
  }

  const weightChangeHandle = (evt) => {
    setParams({
      ...params,
      weight: evt.target.value,
    });
    setIsResetAvailable(true);
    checkCalculationAvailable();
  };

  const activityChangeHandle = (evt) => {
    setParams({
      ...params,
      activity: evt.target.value,
    });
    setIsResetAvailable(true);
    checkCalculationAvailable();
  }

  const onCalculateClickHandle = (evt) => {
    evt.preventDefault();
    setResult(calculateResult(params));
    setIsResultAvailable(true);
  }

  const onResetClickHandle = (evt) => {
    evt.preventDefault();
    setParams(InitialParams);
    setIsResetAvailable(false);
    setIsResultAvailable(false);
  }

  return (
      <main className="main">
        <div className="container">
          <article className="counter">
            <h1 className="counter__heading heading-main">
              Счётчик калорий
            </h1>
            <form className="counter__form form" name="counter" action="#" method="post">
              <div className="form__item">
                <h2 className="heading">
                  Пол
                </h2>
                <ul className="switcher">
                  <li className="switcher__item">
                    <input
                        id="gender-male"
                        name="gender"
                        value="male"
                        type="radio"
                        onClick={genderChangeHandle}
                        checked={params.gender === Gender.MALE}
                        required
                    />
                    <label htmlFor="gender-male">
                      Мужчина
                    </label>
                  </li>
                  <li className="switcher__item">
                    <input
                        id="gender-female"
                        name="gender"
                        value="female"
                        type="radio"
                        onClick={genderChangeHandle}
                        checked={params.gender === Gender.FEMALE}
                        required
                    />
                    <label htmlFor="gender-female">
                      Женщина
                    </label>
                  </li>
                </ul>
              </div>
              <fieldset className="form__item form__parameters" name="parameters">
                <legend className="visually-hidden">
                  Физические параметры
                </legend>
                <div className="inputs-group">
                  <div className="input">
                    <div className="input__heading">
                      <label className="heading" htmlFor="age">
                        Возраст
                      </label>
                      <span className="input__heading-unit">
                    лет
                  </span>
                    </div>
                    <div className="input__wrapper">
                      <input
                          type="text"
                          id="age"
                          name="age"
                          placeholder="0"
                          inputMode="decimal"
                          maxLength="3"
                          value={params.age}
                          onChange={ageChangeHandle}
                          required
                      />
                    </div>
                  </div>
                  <div className="input">
                    <div className="input__heading">
                      <label className="heading" htmlFor="height">
                        Рост
                      </label>
                      <span className="input__heading-unit">
                    см
                  </span>
                    </div>
                    <div className="input__wrapper">
                      <input
                          type="text"
                          id="height"
                          name="height"
                          placeholder="0"
                          inputMode="decimal"
                          maxLength="3"
                          value={params.height}
                          onChange={heightChangeHandle}
                          required
                      />
                    </div>
                  </div>
                  <div className="input">
                    <div className="input__heading">
                      <label className="heading" htmlFor="weight">
                        Вес
                      </label>
                      <span className="input__heading-unit">
                    кг
                  </span>
                    </div>
                    <div className="input__wrapper">
                      <input
                          type="text"
                          id="weight"
                          name="weight"
                          placeholder="0"
                          inputMode="decimal"
                          maxLength="3"
                          value={params.weight}
                          onChange={weightChangeHandle}
                          required
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form__item">
                <legend className="heading">
                  Физическая активность
                </legend>
                <ul className="radios-group">
                  <li className="radio">
                    <div className="radio__wrapper">
                      <input
                          id="activity-minimal"
                          name="activity"
                          value="min"
                          type="radio"
                          checked={params.activity === 'min'}
                          onChange={activityChangeHandle}
                          required
                      />
                      <label htmlFor="activity-minimal">
                        Минимальная
                      </label>
                    </div>
                    <p className="radio__description">
                      Сидячая работа и нет физических нагрузок
                    </p>
                  </li>
                  <li className="radio">
                    <div className="radio__wrapper">
                      <input
                          id="activity-low"
                          name="activity"
                          value="low"
                          type="radio"
                          checked={params.activity === 'low'}
                          onChange={activityChangeHandle}
                          required
                      />
                      <label htmlFor="activity-low">
                        Низкая
                      </label>
                    </div>
                    <p className="radio__description">
                      Редкие, нерегулярные тренировки, активность в быту
                    </p>
                  </li>
                  <li className="radio">
                    <div className="radio__wrapper">
                      <input
                          id="activity-medium"
                          name="activity"
                          value="medium"
                          type="radio"
                          checked={params.activity === 'medium'}
                          onChange={activityChangeHandle}
                          required
                      />
                      <label htmlFor="activity-medium">
                        Средняя
                      </label>
                    </div>
                    <p className="radio__description">
                      Тренировки 3-5 раз в неделю
                    </p>
                  </li>
                  <li className="radio">
                    <div className="radio__wrapper">
                      <input
                          id="activity-high"
                          name="activity"
                          value="high"
                          type="radio"
                          checked={params.activity === 'high'}
                          onChange={activityChangeHandle}
                          required
                      />
                      <label htmlFor="activity-high">
                        Высокая
                      </label>
                    </div>
                    <p className="radio__description">
                      Тренировки 6-7 раз в неделю
                    </p>
                  </li>
                  <li className="radio">
                    <div className="radio__wrapper">
                      <input
                          id="activity-maximal"
                          name="activity"
                          value="max"
                          type="radio"
                          checked={params.activity === 'max'}
                          onChange={activityChangeHandle}
                          required
                      />
                      <label htmlFor="activity-maximal">
                        Очень высокая
                      </label>
                    </div>
                    <p className="radio__description">
                      Больше 6 тренировок в неделю и физическая работа
                    </p>
                  </li>
                </ul>
              </fieldset>
              <div className="form__submit">
                <button
                    className="form__submit-button button"
                    name="submit"
                    type="button"
                    onClick={onCalculateClickHandle}
                    disabled={!isCalculationAvailable}
                >
                  Рассчитать
                </button>
                <button
                    className="form__reset-button"
                    name="reset"
                    type="reset"
                    onClick={onResetClickHandle}
                    disabled={!isResetAvailable}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FD3636" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z"/>
                  </svg>
                  <span>
                    Очистить поля и расчёт
                  </span>
                </button>
              </div>
            </form>
            <section className={isResultAvailable ? "counter__result": "counter__result counter__result--hidden"}>
              <h2 className="heading">
                Ваша норма калорий
              </h2>
              <ul className="counter__result-list">
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-norm">{result.maintenance}</span> ккал
                  </h3>
                  <p>
                    поддержание веса
                  </p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-minimal">{result.loss}</span> ккал
                  </h3>
                  <p>
                    снижение веса
                  </p>
                </li>
                <li className="counter__result-item">
                  <h3>
                    <span id="calories-maximal">{result.gain}</span> ккал
                  </h3>
                  <p>
                    набор веса
                  </p>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
  );
}

export default App;

