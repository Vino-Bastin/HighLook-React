import React from "react";
import { useSelector } from "react-redux";

import styles from "./MenuContent.module.css";

import UserButton from "./UserButton";
import MenuButton from "./MenuButton";

import mywork from "./../../Assests/My Works.png";
import NewOrder from "./../../Assests/New Order.png";
import Orders from "./../../Assests/Orders.png";
import Pants from "./../../Assests/Pants.png";
import Shirts from "./../../Assests/Shirts.png";
import Payments from "./../../Assests/Payments.png";
import Statistics from "./../../Assests/Statistics.png";
import NewUser from "./../../Assests/New User.png";

const MenuContent = () => {
  const { auth } = useSelector((state) => state);

  const superUser = ["admin", "lead-tailor"].includes(auth.userDetails.role);
  const admin = ["admin"].includes(auth.userDetails.role);

  return (
    <div className={styles.menu_content}>
      <div className={styles.menu_group}>
        <MenuButton path="my-works" buttonName="My Works" img={mywork} />
        {superUser && (
          <>
            <MenuButton
              path="new-order"
              buttonName="New Order"
              img={NewOrder}
            />
            <MenuButton path="orders" buttonName="Orders" img={Orders} />
            <MenuButton path="pants" buttonName="Pants" img={Pants} />
            <MenuButton path="shirts" buttonName="Shirts" img={Shirts} />
          </>
        )}
        {admin && (
          <>
            <MenuButton path="payments" buttonName="Payments" img={Payments} />
            <MenuButton
              path="statistics"
              buttonName="Statistics"
              img={Statistics}
            />
            <MenuButton path="new-user" buttonName="New User" img={NewUser} />
          </>
        )}
      </div>
      <div className={styles.menu_group}>
        <UserButton />
      </div>
    </div>
  );
};

export default MenuContent;
