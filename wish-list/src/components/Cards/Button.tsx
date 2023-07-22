import { ButtonInterface } from "../../types/types";
import styles from "./Button.module.css"

const Button = ({ text, filled, type, href, icon } : ButtonInterface) => {
    const filledClass = filled ? styles.filled : "";

    return (
        <a href="#" className={`${styles.btn} ${styles[type.toLowerCase()]} ${filledClass}`}>
            <span>{text}</span>
            {icon}
        </a>
    );
}

export default Button;