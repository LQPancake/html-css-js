export default function Card({fruit}) {
  return (
    <div className="card">
      <div className="card-emoji">{fruit.emoji}</div>
      <h2 className="card-title">{fruit.title}</h2>
      <p className="card-text">{fruit.text}</p>
    </div>
  );
}
