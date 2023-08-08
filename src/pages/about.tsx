import React, { useState, useEffect } from "react";
import { Sheet, Button, Page, Text, useNavigate } from "zmp-ui";
import axios from "axios";

const AboutPage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = useState(false);
  const [apiData, setApiData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        // Update the state with the fetched data
        setApiData(response.data.title);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Page className="page">
      <p className="capitalize">Text get from api with Axios</p>
      <div className="section-container">
        <Text>{apiData}</Text>
      </div>
      <div>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => setActionSheetOpened(true)}
        >
          Back
        </Button>
      </div>
      <Sheet.Actions
        visible={actionSheetOpened}
        onClose={() => setActionSheetOpened(false)}
        actions={[
          [
            {
              text: "Go back",
              onClick: () => {
                navigate(-1);
              },
            },
            {
              text: "Action 1",
              close: true,
            },
            {
              text: "Action 2",
              close: true,
            },
          ],
          [
            {
              text: "Close",
              close: true,
              danger: true,
            },
          ],
        ]}
      ></Sheet.Actions>
    </Page>
  );
};

export default AboutPage;
