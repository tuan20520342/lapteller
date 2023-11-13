import React, { useEffect, useState } from 'react';
import axios from 'axios';

var question = 'who are you';  // Change the text of the question

const ChatBotPage = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization:
        'Bearer ya29.a0AfB_byB-buP_CEq6uv3G8afQ87gHdOcoZ7yHMhna03GNvGuxdBBslNPSh7y_1d_MG9SPSJERIvFd2CBuBViIQUXxNUeV9G8Ax2uph9bnuZ1JVPNZ0-tk3LcThp76So9jsl2C3nSVBqpQV_Uo5Usl4y6yD8Yyrj6l_vuoCUXU12i_TYpaA_pBw-9yWSFp22B1IykMrSgZUdzSjVduZM7MeZI4lCOdLE81ICiQDe8rjJF4x58Y7-XM7dSDGlGjHUrN9YPB34r7DTCA0_FjdKDcymgGqBeShIc4h15Wo-5VHBJPEKkefvvRKmD8Q0E-IzmqjI_q5BmMLlukH5Pp6s_uEag5_CvYvLIVoaez3eO8hV4o8UMVvPfoknyV2ym1WWyrtCUkdRXG_I_gUozUUFzaWqcWDYlmPnOf3oCRKp8aCgYKAYoSARMSFQHGX2Mi1eQt6ul1f3_AyARsrZv7xQ0430',
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
      .catch((error) =>   {
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
