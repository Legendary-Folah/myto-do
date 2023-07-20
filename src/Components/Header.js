import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <div className="header">
            My To-Do!
            <FontAwesomeIcon icon={faNoteSticky} />
        </div>
    )
}

export default Header;