import React, { useReducer } from "react";
import axios from "axios";
import DataContext from "./dataContext";
import DataReducer from "./dataReducer";

import //GET_ITEMS
"../actionTypes";

const DataState = props => {
  const initialState = {
    data: null,
    upcomingGoals: [
      {
        category: 'Housing',
        value: 1900
      },
      {
        category: 'Vehicles',
        value: 1000
      },
      {
        category: 'Food',
        value: 400
      },
      {
        category: 'Entertainment',
        value: 900
      },
      {
        category: 'Travel',
        value: 300
      },
      {
        category: 'Health',
        value: 100
      },
      {
        category: 'Fees',
        value: 155
      },
    ]
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const getData = async () => {
    try {
      // const res = await axios.get("https://api.leapos.ca/obp/v4.0.0/my/banks/78d7bcc927c76240f5999f9d7218aec/accounts/ACCOUNT_ID/transactions");
      // console.log(res)
      // dispatch({
      //   type: DATA_ITEMS,
      //   payload: revItems
      // });
    } catch (err) {
      // dispatch({
      //   type: ITEM_ERROR,
      //   payload: err.response
      // });
    }
  };

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        upcomingGoals: state.upcomingGoals,
        getData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
