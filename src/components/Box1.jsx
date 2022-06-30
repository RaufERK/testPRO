import { observer } from 'mobx-react';
import { useEffect } from 'react';

const Box1 = ({ store }) => {
  useEffect(() => {
    const interval = setInterval(() => store.increase(), 1000);
    return () => clearInterval(interval);
  }, [store]);
  return (
    <div className='box'>
      <h1>BOX 1 BOX 1 BOX 1 BOX 1 BOX 1 BOX 1 BOX 1 BOX 1 BOX 1 </h1>
      <h1>SecondPasses {store && store.secondsPassed}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        voluptatibus dolores, sint dolorum repellendus omnis tenetur delectus
        temporibus natus sapiente sit, est soluta nihil id quia blanditiis
        quidem eum nesciunt voluptate aut similique nulla! Aut atque suscipit
        nostrum reiciendis nemo facilis deleniti, vitae eveniet nam provident,
        fugit laborum? Incidunt consequuntur ad ex iure placeat laboriosam
        reprehenderit iusto sit delectus possimus quasi sequi culpa eaque est,
        earum, sed quos cumque, dolorum eius doloribus facilis odio magni dolor
        sunt? Dolores quis, recusandae odio explicabo rerum obcaecati expedita
        dignissimos possimus laudantium adipisci quo, atque aut accusamus fugit
        saepe animi est sed! Nulla, excepturi!
      </p>
    </div>
  );
};

export default observer(Box1);
