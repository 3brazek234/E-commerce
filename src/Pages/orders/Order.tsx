import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      setError('Please enter an order number');
      return;
    }
    // Here you would typically make an API call to fetch order details
    // For now, we'll just navigate to a results page with the order number
    navigate(`/order-tracking/${orderNumber}`);
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: '600',
        color: '#1a202c',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        Track Your Order
      </h1>
      
      <p style={{
        color: '#4a5568',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Enter your order number to check the status of your order
      </p>

      <form onSubmit={handleTrackOrder}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="orderNumber" style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#4a5568',
            marginBottom: '0.5rem'
          }}>
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => {
              setOrderNumber(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your order number"
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              border: `1px solid ${error ? '#e53e3e' : '#e2e8f0'}`,
              borderRadius: '0.375rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
          />
          {error && (
            <p style={{
              color: '#e53e3e',
              fontSize: '0.875rem',
              marginTop: '0.5rem'
            }}>
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            backgroundColor: '#4299e1',
            color: 'white',
            padding: '0.75rem',
            fontSize: '1rem',
            fontWeight: '500',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3182ce'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4299e1'}
        >
          Track Order
        </button>
      </form>

      {/* <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#f7fafc',
        borderRadius: '0.5rem',
        borderLeft: '4px solid #4299e1'
      }}>
        <h3 style={{
          fontSize: '1.125rem',
          fontWeight: '600',
          color: '#2d3748',
          marginBottom: '0.75rem'
        }}>
          Can't find your order number?
        </h3>
        <p style={{ color: '#4a5568', lineHeight: '1.5' }}>
          Your order number was included on your receipt and in the confirmation email you received when you placed your order. 
          If you can't find it, please check your email's spam or junk folder.
        </p>
      </div> */}
    </div>
  );
};

export default Order;