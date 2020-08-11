import axios from "axios";

import { GET_LEADS, DELETE_LEAD } from "./types";

// GET Leads
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
    axios
      .delete(`/api/leads/${id}/`)
      .then((res) => {
        // dispatch(createMessage({ deleteLead: 'Lead Deleted' }));
        dispatch({
          type: DELETE_LEAD,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };
