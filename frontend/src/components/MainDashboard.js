import FilterRow from './FilterRow';
import DiscoverySection from './DiscoverySection';
import MatchesSection from './MatchesSection';
import MessagesSection from './MessagesSection';
import ProfileSection from './ProfileSection';
import SidebarPanel from './SidebarPanel';
import Topbar from './Topbar';

function MainDashboard({
  session,
  activeSection,
  onSectionChange,
  onSignOut,
  onContinue,
  discoveryProfiles,
  matches,
  quickFilters,
}) {
  return (
    <main className="main-shell">
      <SidebarPanel
        session={session}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />

      <section className="content-panel">
        <Topbar activeSection={activeSection} onSignOut={onSignOut} onContinue={onContinue} />
        <FilterRow filters={quickFilters} />

        {activeSection === 'discover' && <DiscoverySection discoveryProfiles={discoveryProfiles} />}
        {activeSection === 'matches' && <MatchesSection matches={matches} />}
        {activeSection === 'messages' && <MessagesSection />}
        {activeSection === 'profile' && <ProfileSection session={session} />}
      </section>
    </main>
  );
}

export default MainDashboard;