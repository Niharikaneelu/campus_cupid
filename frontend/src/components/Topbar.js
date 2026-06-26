import ThemeButton from './ThemeButton';

const sectionTitles = {
  discover: 'Find people you actually want to meet',
  matches: 'Your matches',
  messages: 'Chat inbox',
  profile: 'Profile overview',
};

function Topbar({ activeSection, onSignOut, onContinue }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">Campus dating dashboard</p>
        <h1>{sectionTitles[activeSection]}</h1>
      </div>
      <div className="topbar-actions">
        <ThemeButton variant="secondary" type="button" onClick={onSignOut}>
          Sign out
        </ThemeButton>
        <ThemeButton variant="primary" type="button" onClick={onContinue}>
          Continue browsing
        </ThemeButton>
      </div>
    </header>
  );
}

export default Topbar;