import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URI } from '../utils/constants';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = ({ page }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_URI}/cards?page=${page}`);
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
  }, [page]);

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

  const withImages = cards.filter(card => card.imageUrl);

  return (
    <>
      {withImages.map(card => {
        return (
          <Link key={card.id} to={`/card/${card.id}`}>
            <Card
              name={card.name}
              rarity={card.rarity}
              image={card.imageUrl}
              artist={card.artist}
            />
          </Link>
        );
      })}
    </>
  );
};

export default Home;
