import React, { useEffect, useState } from 'react';
import axios from 'axios';

var question = 'who are you';  // Change the text of the question

const ChatBotPage = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization:
        'Bearer ya29.a0AfB_byDIOvDZ6PGb2MFpJvsWOyYL4OU-HdWCa4pG8SAPqOUFIMtK9b4qAz2YDXH6NBruKuj9iGWVYtSsZKlkjnviKnNBbllDAzfFk7Ep-9kU2BYfQMRdCcPD2Y1lDzwPgU2lEktpUX9l53igYbaPce0h_jp1nO8fPWnEyoWCOgjFeANR_J5MrPWgPURMZcj3Pc_rJSh7aI2GJIs-DcgEoSNJ2-_of8PU9h-wPQzXjj4QXaV8Sf99GoGbw_mudnvnfZj4uWmrt_IM4UEtELRXmxv5hOgxz0OAFO6Aa3jKppKoqSpmxHqmJE7Iis4DO0xD8TtB36Ed4V5KaAqUo4ufn5e_Nev_48pRcSjPWjR0g-CJ7vk0t_Ca1dGyv__To9KFNFR4gnvZWCfOX1VOVVhIyLD_NVRJpWE_M7mi397faCgYKAdYSARMSFQHGX2Mi7wXptwBtzCLsrMjCGy8nwA0431',
    };

    const requestData = {
      queryInput: {
        text: {
          text: question,
          languageCode: 'en',
        },
      },
    };

    axios
      .post(
        'https://dialogflow.googleapis.com/v2beta1/projects/testagent-xdib/locations/global/agent/sessions/cca35651-bad9-a3ad-47fe-174bcab0a599:detectIntent',
        requestData,
        { headers },
      )
      .then((response) => {
        setResponseData(response.data.queryResult.fulfillmentText); // Change the path to get the value
      })
      .catch((error) => {
        console.error('Response not found. Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>ChatBot Page</h1>
      {responseData && (
        <div>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ChatBotPage;
