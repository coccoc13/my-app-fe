import axios from "axios";

const baseUrl = "https://coccoc-manga.herokuapp.com";

export default axios.create({
  baseUrl
})