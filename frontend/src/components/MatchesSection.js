import AvatarMark from './AvatarMark';

function MatchesSection({ matches }) {
  return (
    <div className="matches-grid">
      {matches.map((match) => (
        <article key={match.name} className="match-card">
          <AvatarMark size="small">{match.name.slice(0, 1)}</AvatarMark>
          <div>
            <h3>{match.name}</h3>
            <p>{match.note}</p>
            <small>{match.status}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export default MatchesSection;