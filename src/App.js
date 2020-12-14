import logo from './images/logo.png';
import people from "./images/people.png";
import video from "./images/video.png";
import playbuttun from "./images/play-button.png";
import qpin from "./images/q.png";
import android from "./images/android.png";
import qr from "./images/qr.png";
import vk from "./images/vk.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";


import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} className=".logo" alt="logo" />
          <h3 className="">SLOGAN SLOGAN SLOGAN</h3>
        </div>
        <ul className="nav">
          <a href="#">
            <li>Главная</li>
          </a>
          <a href="#">
            <li>О приложении</li>
          </a>
          <a href="#">
            <li>О проетке</li>
          </a>
          <a href="#">
            <li>Скачать</li>
          </a>
          <a href="#">
            <li>Контакты</li>
          </a>
        </ul>
        <div className={'cards'}>
          <div className={'card'}>
            <img src={people} alt="" />
            <p className="p">Часто ли Вы опаздываете на работу (учёбу)?</p>
          </div>
          <div className="card">
            <img src={people} alt="" />
            <p className="p">Часто ли Вы опаздываете на работу (учёбу)?</p>
          </div>
          <div className="card">
            <img src={people} alt="" className="img" />
            <p className="p">Часто ли Вы опаздываете на работу (учёбу)?</p>
          </div>
        </div>
      </header>

      {/*    /* <!-- о приложении --> */}
      <section>
        <h3>О приложении</h3>
        <div className="banner">
          <img src={video} alt="" class="video" />
          <img src={playbuttun} alt="" class="play" />
        </div>
        <div className="fiveCards">
          <img src={qpin} alt="" className="app" />
          <img src={qpin} alt="" className="app" />
          <img src={qpin} alt="" className="app" />
          <img src={qpin} alt="" className="app" />
          <img src={qpin} alt="" className="app" />
        </div>
      </section>
      {/* <!-- о проекте --> */}
      <section>
        <h3>О проекте</h3>
        <div class="text">
          <p>Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают<br/>участникам на всех этапах развития их бизнеса: от<br/>разработки идеи до ее реализации.</p>
    </div>
    </section >
    {/* <!-- Скачать --> */}
    <section>
        <h3>Скачать</h3>
        <div className="dawnload">
            <img src={android} alt="" class="android"/>
            <img src={qr} alt="" class="code"/>
        </div>
        <div class="dText">
            <p>Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.</p>
        </div>
    </section>

    <footer>
        <div>
            <h3>Some</h3>
        </div>
        <div class="social">
            <img src={vk} alt=""/>
            <img src={facebook} alt=""/>
            <img src={instagram} alt=""/>
        </div>
        <div class="row">
            <div class="column">
                <h2>Контакты</h2>
                <br/>

                <p>Tel.: +996 (312) 915000 +
                    <br/> Еxt.<br/> Fax: +996 (312) 915 028</p>

            </div>
            <div class="column">
                <h2>Адреса</h2><br/>
                <p>American University of Central Asia
                    <br/> 7/6 Aaly Tokombaev Street<br/> Bishkek, Kyrgyz Republic 720060</p>
            </div>
            <div class="column">
                <h2>Помощь</h2><br/>
                <p>Помощь<br/>Помощь<br/>Помощь</p>

            </div>
        </div>

    </footer>
    </div >
  );
}

export default App;
