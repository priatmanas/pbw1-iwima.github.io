import { Link } from 'react-router-dom';
import '../App.css';

function headnav() {
    return(
        <div class='item2'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/materi">Materi</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default headnav;