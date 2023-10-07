
import styles from "./header.module.css";

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
};

const Header = ({children}: { children: string }) => {
    return (
        <div className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={styles.logo} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>{children}</div>
        </div>
    );
}

export default Header;