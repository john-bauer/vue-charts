import axios from "axios";
let baseUrl = "https://swapi.dev";

const TodosApi = {
  getAllPeople() {
    return axios
      .get(baseUrl + "/api/people")
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  }
};

export default TodosApi;
