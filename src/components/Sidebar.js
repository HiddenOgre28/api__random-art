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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
        accumsan sagittis. Nunc sit amet convallis lacus, sed pulvinar odio.
        Nullam at tincidunt neque. Sed lobortis turpis ornare quam feugiat, ut
        molestie risus sagittis. Proin ut tincidunt odio. In suscipit turpis
        purus, sed tincidunt metus congue eget. Fusce maximus, justo a eleifend
        vulputate, tortor quam rhoncus nibh, eu maximus mauris urna sed ante.
        Vestibulum pharetra turpis sit amet purus finibus, sit amet varius ex
        pharetra. Vestibulum sagittis tempor sem sagittis sollicitudin.
      </p>
      <h3 className="Sidebar__socials">You can find me at:</h3>
      <ul className="Sidebar__socials__links">
          <li><a href="#" target="blank_"><img src={github} alt=""></img></a></li>
          <li><a href="#" target="blank_"><img src={linkedin} alt=""></img></a></li>
          <li><a href="#" target="blank_"><img src={twitter} alt=""></img></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
