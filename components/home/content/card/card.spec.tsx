import { fireEvent, render } from "@testing-library/react";
import Router from "next/router";
import { HomeContentCard } from "./card";

describe("home content card", () => {
    it("redirects to the url when clicked", () => {
        const routerSpy = jest.spyOn(require("next/router"), "useRouter");
        const routerPush = jest.fn();

        Router.events.on("routeChangeStart", routerPush);

        routerSpy.mockImplementation(() => ({
            push: routerPush,
        }));

        const { getByText } = render(
            <HomeContentCard
                title="OAuth 2.0 Update"
                description="A new"
                href="/uuid"
                imgPath="/img.png"
            />
        );

        const container = getByText("description");

        fireEvent.click(container);

        expect(routerPush).toHaveBeenCalled();
    });
});
