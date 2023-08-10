import React, { useEffect } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userInfo } from "zmp-sdk";
import { userState } from "../state";

import UserCard from "../components/user-card";
import { requestSendNotification } from "zmp-sdk/apis"; // Added import

useEffect(() => {
  // Request notification permission if not allowed
  if (Notification.permission !== "granted") {
    requestSendNotification({
      success: () => {
        // Handle successful API call
      },
      fail: (error) => {
        // Handle API call failure
        console.log(error);
      },
    });
  }
}, []);

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(userState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div className="section-container">
        <List>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/about")}>About</div>
          </List.Item>
          <List.Item suffix={<Icon icon="zi-arrow-right" />}>
            <div onClick={() => navigate("/user")}>User</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
