
import styling from "../Style/Navbar.module.css"
function Navbar() {

    return (
        <div className={styling.navbar}>
          <div id={styling.second}>
            <p>Discover</p>
            <p>Start a project</p>
          </div>
          <div className={styling.logo}>    
             <img src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f" alt="logo" />        
          </div>
          <div id={styling.third}>
            <p>Search</p>
            <p>Login</p>
          </div>
        </div>
    
        
    )
}

export default Navbar;