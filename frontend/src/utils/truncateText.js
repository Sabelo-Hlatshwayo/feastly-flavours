const truncateText = (text) => {
  return text.length > 30 ? `${text.slice(0, 31)}...` : `${text}`;
};

export default truncateText;
