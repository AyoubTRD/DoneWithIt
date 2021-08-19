import colors from "./colors";

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
  imageInput: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 0,
    height: 140,
    width: 140,
    backgroundColor: colors.lightgrey,
    overflow: "hidden",
  },
};
