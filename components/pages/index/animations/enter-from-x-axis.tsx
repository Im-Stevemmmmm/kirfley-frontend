import { animated, useSpring } from "react-spring";
import { FadeIn } from "utils/animations/fade-in";
import { ComponentChildren } from "utils/component-children/component-children";

type Direction = "left" | "right";

interface EnterFromXAxisProps extends ComponentChildren {
    direction: Direction;
}

export const EnterFromXAxis = ({
    direction,
    children,
}: EnterFromXAxisProps) => {
    const distance = "100px";
    const delay = 800;

    const getDirectionSign = (value: Direction) => (value == "left" ? "-" : "");

    const animation = useSpring({
        from: {
            transform: `translateX(${getDirectionSign(direction)}${distance})`,
        },
        to: {
            transform: "translateX(0)",
        },
        delay,
    });

    return (
        <FadeIn delay={delay}>
            <animated.div style={animation}>{children}</animated.div>
        </FadeIn>
    );
};
