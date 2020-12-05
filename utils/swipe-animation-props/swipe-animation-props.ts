import { Dispatch, SetStateAction } from "react";

export const createSwipeAnimationprops = (
    id: "Primary" | "Secondary",
    timeout: number,
    styles: {
        readonly [key: string]: string;
    },
    state: boolean,
    setState: Dispatch<SetStateAction<boolean>>
) => ({
    in: id === "Primary" ? state : !state,
    classNames: {
        enter: styles[`form${id}Enter`],
        enterActive: styles["formEnterActive"],
        exit: styles["formExit"],
        exitActive: styles[`form${id}ExitActive`],
    },
    unmountOnExit: true,
    timeout,
    onEnter: () => setState(true),
    onExit: () => setTimeout(() => setState(false), timeout),
});
