import axios from "axios";

const baseUrl = "https://coccoc-manga.herokuapp.com";

export default {
  getSourceList() {
    return axios.get(`${baseUrl}/source-list`);
  },

  search(source, keyword, page) {
    return axios.get(`${baseUrl}/manga/${source}/search`, { params: { keyword: keyword, page: page } });
  },

  getDetail(source, url) {
    return axios.get(`${baseUrl}/manga/${source}/detail`, { params: { url: url } });
  },

  getChapter(source, url) {
    return axios.get(`${baseUrl}/manga/${source}/detail`, { params: { url: url } });
  }

}