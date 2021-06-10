import './App.css';
import profile from './assets/images/profile.png';
import project1 from './assets/images/project1.jpg';

function App()
{
  return (
    <div className="App">
      <div className="main_body">
        <div className="wrapper_main">
          <div className="glass">
            <div className="side__menu">
              <div className="profile">
                <img src={profile} alt="" />
                <h2>sandeep rapolu</h2>
                <h4>React Frontend Developer</h4>
              </div>
              <div className="menu__list">
                <div className="menu_item">
                  <span>Home</span>
                </div>
                <div className="menu_item">
                  <span>Skills</span>
                </div>
                <div className="menu_item">
                  <span>Projects</span>
                </div>
                <div className="menu_item">
                  <span>Mail</span>
                </div>
              </div>
            </div>
            <div className="dashboard">
              <div className="header__search">
                <h2>Active project list</h2>
                <input type="text" />
              </div>
              <div className="project_list">
                <div className="project_card">
                  <img src={project1} alt="" />
                  <div className="project_details">
                    <h3>Marrior Game</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo?</span>
                  </div>
                </div>
                <div className="project_card">
                  <img src={project1} alt="" />
                  <div className="project_details">
                    <h3>Marrior Game</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo?</span>
                  </div>
                </div>
                <div className="project_card">
                  <img src={project1} alt="" />
                  <div className="project_details">
                    <h3>Marrior Game</h3>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nemo?</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
}

export default App;
