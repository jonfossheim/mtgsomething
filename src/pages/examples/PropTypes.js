import PropTypes from 'prop-types';

const PropPage = () => {
  const WithTax = ({ amount, taxRate }) => {
    const total = amount + amount / taxRate;

    return <div>{total}</div>;
  };

  WithTax.propTypes = {
    amount: PropTypes.number,
    taxRate: PropTypes.number
  };

  WithTax.defaultProps = {
    amount: 0,
    taxRate: 10
  };

  return <WithTax amount={'hello'} />;
};

export default PropPage;
