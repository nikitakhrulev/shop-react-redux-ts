import { SignUp } from "../ui/SignUp";

function Sidenav() {
    const openNav = () => {
        document.getElementById("mySidenav")!.style.width = "320px"; 
    };
      
    const closeNav = () => {
        document.getElementById("mySidenav")!.style.width = "0";
      }
    return (
        <div className="sidenav__wrapper">
            <button onClick={() => openNav()} className="open-sidenav-btn">Open Sidenav</button>
            <div id="mySidenav" className="sidenav">
                <div className="sidenav__heading">
                    <span>Register</span>
                </div>
                <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                <div className="sidenav__form-wrapper">
                    <SignUp />
                </div>
            </div>
        </div>
    );
}

export { Sidenav };
