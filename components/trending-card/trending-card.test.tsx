import { fireEvent, render } from "@testing-library/react";
import { TrendingCard } from "./trending-card";

test("renders the proper title", () => {
    const { getByText } = render(<TrendingCard title="Steve" url="/signup" />);

    expect(getByText("Steve")).toBeInTheDocument;
});

test("sends the user to the card's url on click", () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");
    const routerPush = jest.fn();

    useRouter.mockImplementation(() => ({
        push: routerPush,
    }));

    const { getByText } = render(<TrendingCard title="Steve" url="/signup" />);

    const trendingCard = getByText("Steve");

    fireEvent.click(trendingCard);

    expect(routerPush).toHaveBeenCalledWith("/signup");
});
