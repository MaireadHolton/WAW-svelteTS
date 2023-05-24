import axios from "axios";
import { latestVisit, loggedInUser } from "../stores";
import type {County, Visit} from "../services/visit-types"

export const wawService = {

 baseUrl = "http://localhost:4000",

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/users/authenticate`,
        { email, password }
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + response.data.token;
      if (response.data.success) {
        loggedInUser.set({
          email: email,
          token: response.data.token,
          _id: response.data.id
        });
        localStorage.visit = JSON.stringify({
          email: email,
          token: response.data.token,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async logout() {
    loggedInUser.set({
      email: "",
      token: "",
      _id: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("visit");
  },

  async signup(firstName: string, lastName: string, email: string, password: string): Promise<boolean> {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },

  reload() {
    const visitCredentials = localStorage.visit;
    if (visitCredentials) {
        const savedUser = JSON.parse(visitCredentials);
        loggedInUser.set({
            email: savedUser.email,
            token: savedUser.token,
            _id: savedUser._id
        });
        axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
},

  async createVisit(visit: Visit): Promise<boolean> {
    try {
      const response = await axios.post(this.baseUrl + "api/counties/" + visit.county + "/visits", visit);
      latestVisit.set(visit);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  },

  async getAllCounties(): Promise<County[]> {
    try {
      const response = await axios.get(this.baseUrl + "api/counties");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getAllVisits(): Promise<Visit[]> {
    try {
      const response = await axios.get(this.baseUrl + "api/visits");
      return response.data;
    } catch (error) {
      return [];
    }
  },

    async getVisitsByCounty(county: County): Promise<Visit[]> {
     try {
        const response = await axios.get(`${this.baseUrl}/api/counties/${counties._id}/visits`);
        return response.data;
        } catch (error) {
        return [];
        }
    }
};