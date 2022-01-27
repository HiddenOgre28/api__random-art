import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import close from '../assets/close.svg';

function Sidebar( { sidebar, showSidebar } ) {
  return (
    <div className={!sidebar ? "Sidebar--hidden" : "Sidebar"}>
      <img src={close} alt="" className='Sidebar__close' onClick={showSidebar}></img>
      <h2 className="Sidebar__title">About</h2>
      <p className="Sidebar__description">
        I made this app so I can look at random pretty pictures. 
      </p>
      <p className="Sidebar__description">
        As of now, it can only fetch art from the Art Institute of 
        Chicago's archive, but I plan on adding more museums soon enough.
      </p>
      <h3 className="Sidebar__socials">You can find me at:</h3>
      <ul className="Sidebar__socials__links">
          <li><a href="https://github.com/yasledesma" target="blank_"><img src={github} alt=""></img></a></li>
          <li><a href="https://www.linkedin.com/in/yasmin-ledesma/" target="blank_"><img src={linkedin} alt=""></img></a></li>
          <li><a href="https://twitter.com/yasledesma28" target="blank_"><img src={twitter} alt=""></img></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
