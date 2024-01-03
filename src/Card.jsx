export default function Card({imageSrc, description}) {
  const cardStyle = {
    border: '1px solid black',
    borderRadius: '5px',
  };

  return (
    <div style={cardStyle}>
      <img src={imageSrc} alt="test" />
      <p>{description}</p>
    </div>
  )
}
