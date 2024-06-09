import {Link} from "react-router-dom";
const Navigation =()=>{
    return(
        <header>
        <div className="logo">HEALTH CHAIN 
        <img src="../src/logoTP.png" alt="healthy" width="25" height="25"/>
        </div>
        <nav>
          <ul>
          <li>
              <Link className="nav_link" to="/">
                Wallet
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-all-tasks">
                View All Records
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/create-task">
                Create Record
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/view-task">
                View Record
              </Link>
            </li>
            {/*<li>
              <Link className="nav_link" to="/update-task">
                Update Record
              </Link>
            </li>
    */}
            {/* <li>
              <Link className="nav_link" to="/delete-task">
                Delete Record
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
    )
}
export default Navigation;