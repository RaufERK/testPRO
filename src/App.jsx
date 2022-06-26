import React, { memo, useState, useEffect } from 'react';

const protoAPI = 'http://194.67.78.219:8080/';

function AppContainer() {
  const [regCasesList, setRegCasesList] = useState(['NO DATA']);

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

      setRegCasesList(await response.json());
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
      {/* <ol>
        {regCasesList.map((el) => (
          <li>{el}</li>
        ))}
      </ol> */}
      <pre>{regCasesList}</pre>
    </p>
  );
}

export const App = memo(AppContainer);
