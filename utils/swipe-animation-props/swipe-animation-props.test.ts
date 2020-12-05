import { createSwipeAnimationprops } from "./swipe-animation-props";

type Id = "Primary" | "Secondary";

const classNames = (id: Id) => ({
    enter: `form${id}Enter`,
    enterActive: "formEnterActive",
    exit: "formExit",
    exitActive: `form${id}ExitActive`,
});

const createMockStylesheet = (id: Id) => {
    const styleMap = classNames(id);

    return {
        [styleMap.enter]: styleMap.enter,
        [styleMap.enterActive]: styleMap.enterActive,
        [styleMap.exit]: styleMap.exit,
        [styleMap.exitActive]: styleMap.exitActive,
    };
};

test("unmounts on exit", () => {
    const id: Id = "Primary";

    expect(
        createSwipeAnimationprops(
            id,
            500,
            createMockStylesheet(id),
            undefined,
            undefined
        ).unmountOnExit
    ).toBeTruthy();
});

test("returns the proper animation CSS classes for the primary animation object", () => {
    const id: Id = "Primary";

    expect(
        createSwipeAnimationprops(
            id,
            500,
            createMockStylesheet(id),
            undefined,
            undefined
        ).classNames
    ).toMatchObject(classNames(id));
});

test("returns the proper animation CSS classes for the secondary animation object", () => {
    const id: Id = "Secondary";

    expect(
        createSwipeAnimationprops(
            id,
            500,
            createMockStylesheet(id),
            undefined,
            undefined
        ).classNames
    ).toMatchObject(classNames(id));
});
