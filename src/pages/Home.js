import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../utils/constants';

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_URI}/cards`);
        console.log(response);
        if (response.status === 200) {
          setCards(response.data.cards);
        } else {
          setError('An error occured');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) {
    return (
      <div className='spinner'>
        <span className='spinner-inner-1'></span>
        <span className='spinner-inner-2'></span>
        <span className='spinner-inner-3'></span>
      </div>
    );
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <>
      {cards.map(card => {
        return (
          <div key={card.id} style={{ padding: '1rem' }}>
            <h1>{card.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default Home;
