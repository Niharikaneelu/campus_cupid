import AvatarMark from './AvatarMark';
import BrandPill from './BrandPill';
import StatusBadge from './StatusBadge';
import ThemeButton from './ThemeButton';

const navItems = ['discover', 'matches', 'messages', 'profile'];

function SidebarPanel({ session, activeSection, onSectionChange }) {
  return (
    <aside className="sidebar-panel">
      <BrandPill>Campus Cupid</BrandPill>
      <div className="profile-summary">
        <AvatarMark>{session?.name?.slice(0, 1) || 'C'}</AvatarMark>
        <div>
          <h2>{session?.name}</h2>
          <p>{session?.email}</p>
        </div>
      </div>

      <nav className="main-nav" aria-label="Primary">
        {navItems.map((item) => (
          <ThemeButton
            key={item}
            variant="nav"
            type="button"
            className={activeSection === item ? 'active' : ''}
            onClick={() => onSectionChange(item)}
          >
            {item}
          </ThemeButton>
        ))}
      </nav>

      <div className="sidebar-card">
        <StatusBadge>Ready to match</StatusBadge>
        <h3>Boost your profile</h3>
        <p>Add photos, interests, and a short bio to improve discovery results.</p>
      </div>
    </aside>
  );
}

export default SidebarPanel;