import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//...

export const client = createClient({
  projectId: "e5hpfn2z",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
  token:
    "skxWxkd1E6M8HfC1C3FJJWujugL7ZNj4k2BbpJloKJvfMZfN0JU9qXg945L85xmHTh2kMa5OTMqQefrtTNEh7iw2TXqQvWbMaKxLH5wJUCJ8bYwpIVVbbnhwv0IH2wiDOYDxJe1GC7OoG9GoByuMsTiRbFaTCEUVqO7PyiPhPPx1kAguzpap",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  return builder.image(source);
};
