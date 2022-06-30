import { observer } from 'mobx-react';

const TimerView = ({ store }) => {
  return (
    <div className='box'>
      <button onClick={() => store.reset()}>
        Seconds passed: {store.secondsPassed}
      </button>
      {/* <pre>{JSON.stringify(store, null, 10)}</pre> */}
    </div>
  );
};

export default observer(TimerView);
