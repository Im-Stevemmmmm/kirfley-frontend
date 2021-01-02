import { animated, useSpring } from "react-spring";
import { ComponentChildren } from "utils/component-children/component-children";

interface FadeInProps extends ComponentChildren {
    delay?: number;
}

export const FadeIn = ({ delay = 0, children }: FadeInProps) => {
    const animation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay,
    });

    return <animated.div style={animation}>{children}</animated.div>;
};
