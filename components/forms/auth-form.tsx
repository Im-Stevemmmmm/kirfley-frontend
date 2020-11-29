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

    function animationProps(id: "primary" | "secondary") {
        const timeout = 500;

        return {
            in: id === "primary" ? isSigningUp : !isSigningUp,
            classNames: {
                enter: styles[`form-${id}-enter`],
                enterActive: styles["form-enter-active"],
                exit: styles["form-exit"],
                exitActive: styles[`form-${id}-exit-active`],
            },
            unmountOnExit: true,
            timeout,
            onEnter: () => setAnimationIsPlaying(true),
            onExit: () =>
                setTimeout(() => setAnimationIsPlaying(false), timeout),
        };
    }

    return (
        <div id={styles["animation-container"]}>
            <CSSTransition {...animationProps("primary")}>
                <SignupForm formSwapHandler={handleFormSwap} />
            </CSSTransition>

            <CSSTransition {...animationProps("secondary")}>
                <LoginForm formSwapHandler={handleFormSwap} />
            </CSSTransition>
        </div>
    );
}
