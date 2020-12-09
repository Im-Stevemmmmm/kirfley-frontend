import { fireEvent, render } from "@testing-library/react";
import { TrendingCard } from "./trending-card";

test("renders the proper title", () => {
    const { getByText } = render(
        <TrendingCard title="Steve" content="Some content" url="/signup" />
    );

    expect(getByText("Steve")).toBeInTheDocument;
});

test("renders the proper content", () => {
    const { getByText } = render(
        <TrendingCard title="Steve" content="Some content" url="/signup" />
    );

    expect(getByText("Some content")).toBeInTheDocument;
});

test("sends the user to the card's url on click", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const routerPush = jest.fn();

    useRouter.mockImplementation(() => ({
        push: routerPush,
    }));

    const { getByText } = render(
        <TrendingCard title="Steve" content="Some content" url="/signup" />
    );

    const trendingCard = getByText("Steve");

    fireEvent.click(trendingCard);

    expect(routerPush).toHaveBeenCalledWith("/signup");
});
