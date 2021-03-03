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
