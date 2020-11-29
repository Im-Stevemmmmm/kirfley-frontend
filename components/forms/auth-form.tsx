import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "../../styles/auth-form.module.scss";
import LoginForm from "../login-form";
import SignupForm from "../signup-form";

export interface AuthFormProps {
    formSwapHandler: () => void;
}

export default function AuthForm() {
    const [isSigningUp, setSigningUp] = useState(false);
    const [animationIsPlaying, setAnimationIsPlaying] = useState(false);

    function handleFormSwap() {
        if (animationIsPlaying) return;

        setSigningUp(!isSigningUp);
    }

    function animationProps(id: "Primary" | "Secondary") {
        const timeout = 500;

        return {
            in: id === "Primary" ? isSigningUp : !isSigningUp,
            classNames: {
                enter: styles[`form${id}Enter`],
                enterActive: styles["formEnterActive"],
                exit: styles["formExit"],
                exitActive: styles[`form${id}ExitActive`],
            },
            unmountOnExit: true,
            timeout,
            onEnter: () => setAnimationIsPlaying(true),
            onExit: () =>
                setTimeout(() => setAnimationIsPlaying(false), timeout),
        };
    }

    return (
        <div id={styles.animationContainer}>
            <CSSTransition {...animationProps("Primary")}>
                <SignupForm formSwapHandler={handleFormSwap} />
            </CSSTransition>

            <CSSTransition {...animationProps("Secondary")}>
                <LoginForm formSwapHandler={handleFormSwap} />
            </CSSTransition>
        </div>
    );
}
