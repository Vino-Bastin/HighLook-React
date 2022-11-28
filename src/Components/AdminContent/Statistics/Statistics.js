import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { getStatistics } from "../../../Store/reducers/userReducers";

import StatisticsFilters from "./StatisticsFilters";

const Statistics = () => {
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const onSearchFilterHandler = (filters) => {
    getStatistics(dispatch, setData, auth.JWT, filters);
  };

  return (
    <>
      <h3>Statistics</h3>
      <StatisticsFilters onSearchFilter={onSearchFilterHandler} />
      <br></br>
      {data && (
        <div className="container content">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart data={data}>
              <CartesianGrid vertical={false} opacity={0.2} />
              <XAxis
                dataKey="month"
                tickFormatter={(str) => str.substring(0, 3)}
              />
              <YAxis tickLine={false} tickCount={8} />
              <Tooltip />
              <Bar dataKey="totalOrders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default Statistics;
