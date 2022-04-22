import { rest } from "msw";
import { setupServer } from "msw/node";
import mockResponse from "./response";

// const apiKey = "TQx9J71IRBSdwXcWHxKjzd3qBEyXjvZb";
export const server = setupServer(
  rest.get(
    `https://api.spotify.com/v1/search`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json(mockResponse)
      );
    }
  )
);