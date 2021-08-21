import client from "./client";

const getListings = () => client.get("/listings");

const postListing = (
  { title, images, price, description, location, category },
  onUploadProgress
) => {
  const data = new FormData();
  data.append("title", title);
  data.append("description", description);
  data.append("price", price);
  data.append("categoryId", category.value);
  if (location) data.append("location", JSON.stringify(location));
  images.forEach((image, index) =>
    data.append("images", {
      type: "image/jpeg",
      name: "image" + index,
      uri: image,
    })
  );

  return client.post("/listings", data, {
    onUploadProgress,
  });
};

export default {
  getListings,
  postListing,
};
