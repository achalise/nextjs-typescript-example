import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = (props: any) => (
    <div>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;