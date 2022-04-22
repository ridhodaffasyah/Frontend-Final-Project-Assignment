import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Search from "../pages/search/search";
import { server } from "../__mock_data__/server";
import responseMock from "../__mock_data__/response";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "../components/store/store";

const store = createStore(reducer);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("The App should fetch the API then return correct response", async () => {
    render(
    <Provider store={store}>
        <Search />
    </Provider>);

    const searchBox = screen.getByLabelText("searchBox");
    userEvent.type(searchBox, "Tulus"); // typing cat

    const button = screen.getByLabelText("Search");
    userEvent.click(button); // click button

    // fetchAPI
    fetch("https://api.spotify.com/v1/search", { method: "GET" });

    await waitFor(() => {
      expect(screen.queryAllByTestId("track")).toHaveLength(responseMock.data.length);
    });
  });