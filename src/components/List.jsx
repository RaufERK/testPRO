import React, { memo, useEffect } from 'react';
import { observer } from 'mobx-react';

const protoAPI = 'http://194.67.78.219:8080/';

function ListFoo({ store }) {
  // const [listArr, setListArr] = useState(null);

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
      // setListArr(result);
      store.setList(result);
    } catch (error) {
      console.log('ERROR===>');
      console.log(error);
    }
  };
  useEffect(() => {
    getCaseesList();
  }, [store]);
  return (
    <div className='box'>
      <h1>Реестровыые Дела:</h1>
      <ol>
        {store?.list &&
          store.list.map(({ externalId, name }) => (
            <li key={externalId}>{name}</li>
          ))}
      </ol>
    </div>
  );
}

export const List = observer(ListFoo);
