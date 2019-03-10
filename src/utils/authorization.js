const authorization = () => {
  const token = localStorage.getItem('token');
  return token
};

export default authorization