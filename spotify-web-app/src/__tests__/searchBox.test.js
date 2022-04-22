import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../pages/search/search";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "../components/store/store";

const store = createStore(reducer);

test("Search box value should be same as user typing", () => {
    render(
    <Provider store={store}>
        <Search/>
    </Provider>);

    const searchBox = screen.getByLabelText("searchBox");
    userEvent.type(searchBox, "cat");

    expect(searchBox.value).toBe("cat");
});