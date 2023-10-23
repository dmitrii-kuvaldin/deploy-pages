import { FC, useState } from 'react';

const CityPage: FC = () => {
  const [isBerlin, setIsBerlin] = useState(true);

  const cityData = isBerlin
    ? {
      name: 'Berlin',
      description: 'Capital of Germany',
      imageUrl:
        'https://content.r9cdn.net/rimg/dimg/94/77/3c308be3-lm-1035-172eedc4c70.jpg?width=1366&height=768&xhint=2600&yhint=3239&crop=true',
    }
    : {
      name: 'Paris',
      description: 'Capital of France',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
    };

  const toggleCity = () => {
    setIsBerlin((prevIsBerlin) => !prevIsBerlin);
  };

  return (
    <div className='App'>
      <h1>{cityData.name}</h1>
      <button onClick={toggleCity}>
        {isBerlin ? 'To Paris' : 'To Berlin'}
      </button>
      <p>{cityData.description}</p>
      <div className='berlinImg'>
        <img  src={cityData.imageUrl} alt='' />
      </div>
    </div>
  );
};

export default CityPage;
