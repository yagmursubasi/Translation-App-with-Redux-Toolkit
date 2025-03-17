import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "7b18520e29msh48b76cf15ed13b8p1a3854jsn747aebabad8c",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default api;
