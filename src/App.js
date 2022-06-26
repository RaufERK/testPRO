import React, { memo, useState, useEffect } from 'react';

const protoAPI = 'http://194.67.78.219:8080/';

// {
//   "externalId": "1",
//   "name": "Реестровое дело лесничества"
// },

function AppContainer() {
  const [listArr, setListArr] = useState(null);

  const getCaseesList = async () => {
    try {
      const response = await fetch(protoAPI, {
        method: 'GET',
        cors: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('NOT ok!!!!');
      const result = await response.json();
      setListArr(result);
    } catch (error) {
      console.log('ERROR===>');
      console.log(error);
    }
  };
  useEffect(() => {
    getCaseesList();
  }, []);
  return (
    <p>
      <h1>Реестровыые Дела:</h1>
      <ol>
        {listArr &&
          listArr.map(({ externalId, name }) => (
            <li key={externalId}>{name}</li>
          ))}
      </ol>
    </p>
  );
}

export const App = memo(AppContainer);
