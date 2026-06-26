import StatusBadge from './StatusBadge';
import ThemeButton from './ThemeButton';

function DiscoverySection({ discoveryProfiles }) {
  return (
    <div className="main-grid">
      <section className="deck-card">
        <div className="deck-header">
          <StatusBadge>Discovery</StatusBadge>
          <span className="mini-text">12 potential matches nearby</span>
        </div>

        <article className="profile-card-large">
          <div className="profile-photo-placeholder">S</div>
          <div className="profile-card-copy">
            <h2>Sana, 21</h2>
            <p>Psychology major at campus east. Loves sunset walks, playlists, and badminton.</p>
            <div className="tag-row">
              <span>Verified</span>
              <span>2 km away</span>
              <span>4 shared interests</span>
            </div>
          </div>
        </article>

        <div className="action-row">
          <ThemeButton variant="dislike" type="button">
            Dislike
          </ThemeButton>
          <ThemeButton variant="like" type="button">
            Like
          </ThemeButton>
        </div>
      </section>

      <section className="stack-column">
        {discoveryProfiles.map((profile) => (
          <article key={profile.name} className="suggestion-card">
            <div className="suggestion-head">
              <strong>
                {profile.name}, {profile.age}
              </strong>
              <span>{profile.course}</span>
            </div>
            <p>{profile.prompt}</p>
            <small>{profile.vibe}</small>
          </article>
        ))}
      </section>
    </div>
  );
}

export default DiscoverySection;