import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URI } from '../utils/constants';
const CardSpec = () => {
  const { id } = useParams();
  let history = useHistory();

  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {}, []);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${API_URI}/cards/${id}`);
        console.log(response.data.card);
        if (response.status === 200) {
          setCard(response.data.card);
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
  }, [id]);

  if (!id) {
    history.push('/');
  }

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

  return <p>{card.name}</p>;
};

export default CardSpec;
