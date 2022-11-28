import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import FallBackMessage from "../../../utils/FallBackMessage";

const PaymentDetails = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <FallBackMessage>
          You Don't have any Payment Details. Please apply filters
        </FallBackMessage>
      ) : (
        <div className="container content">
          <ResponsiveContainer width="95%" height={400}>
            <BarChart data={data}>
              <CartesianGrid vertical={false} opacity={0.2} />
              <XAxis
                dataKey="name"
                tickFormatter={(str) => str.split(" ")[0]}
              />
              <YAxis tickLine={false} tickCount={8} />
              <Tooltip />
              <Bar dataKey="pant" fill="#1D1CE5" />
              <Bar dataKey="shirt" fill="#7978FF" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
};

export default PaymentDetails;
