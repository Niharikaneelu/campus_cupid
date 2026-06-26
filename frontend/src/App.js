import { useEffect, useMemo, useState } from 'react';
import './App.css';
import AuthScreen from './components/AuthScreen';
import MainDashboard from './components/MainDashboard';

const demoAccount = {
  name: 'Aanya',
  email: 'demo@campuscupid.app',
  password: 'campus123',
};

const emptyForm = {
  name: '',
  email: '',
  password: '',
};

const discoveryProfiles = [
  {
    name: 'Maya',
    age: 21,
    course: 'Computer Science',
    prompt: 'Looking for coffee walks, hackathons, and late-night study snacks.',
    vibe: 'Bookish, playful, ambitious',
  },
  {
    name: 'Kabir',
    age: 22,
    course: 'Business Analytics',
    prompt: 'Swipe right if you like campus events, badminton, and honest communication.',
    vibe: 'Outgoing, grounded, sporty',
  },
  {
    name: 'Sara',
    age: 20,
    course: 'Design',
    prompt: 'I can help you pick playlists, outfits, and the best café on campus.',
    vibe: 'Creative, warm, stylish',
  },
];

const matches = [
  {
    name: 'Nia',
    note: 'Matched 12 minutes ago',
    status: 'Online now',
  },
  {
    name: 'Arjun',
    note: 'Last message: “Want to grab chai after class?”',
    status: 'Seen 4 min ago',
  },
  {
    name: 'Isha',
    note: 'Matched yesterday',
    status: 'New match',
  },
];

const quickFilters = ['Nearby', 'Age 18-24', 'Same interests', 'Verified profiles'];

function loadSession() {
  try {
    const rawSession = localStorage.getItem('campusCupidSession');
    return rawSession ? JSON.parse(rawSession) : null;
  } catch {
    return null;
  }
}

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [activeSection, setActiveSection] = useState('discover');
  const [formData, setFormData] = useState(emptyForm);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [session, setSession] = useState(() => loadSession());

  useEffect(() => {
    if (session) {
      localStorage.setItem('campusCupidSession', JSON.stringify(session));
      return;
    }

    localStorage.removeItem('campusCupidSession');
  }, [session]);

  const title = useMemo(() => {
    if (session) {
      return `Welcome back, ${session.name}`;
    }

    return activeTab === 'login' ? 'Welcome back' : 'Create your profile';
  }, [activeTab, session]);

  const subtitle = session
    ? 'You are signed in. The main experience is ready with discovery, matches, and chat.'
    : 'Sign in or create an account to start building your campus dating profile.';

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const resetMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetMessages();
    setFormData(emptyForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetMessages();

    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();
    const name = formData.name.trim();

    if (!email || !password || (activeTab === 'register' && !name)) {
      setErrorMessage('Please fill in every required field.');
      return;
    }

    if (activeTab === 'login') {
      const isDemoAccount =
        email === demoAccount.email && password === demoAccount.password;

      if (!isDemoAccount) {
        setErrorMessage('Invalid login details. Try the demo account or register a new profile.');
        return;
      }

      setSession({
        name: demoAccount.name,
        email: demoAccount.email,
      });
      setSuccessMessage('Signed in successfully.');
      return;
    }

    setSession({
      name,
      email,
    });
    setSuccessMessage('Account created successfully.');
    setActiveTab('login');
    setFormData(emptyForm);
  };

  const handleSignOut = () => {
    setSession(null);
    setFormData(emptyForm);
    setActiveTab('login');
    setActiveSection('discover');
    resetMessages();
  };

  const handleContinueToDiscovery = () => {
    setActiveSection('discover');
  };

  return (
    session ? (
      <MainDashboard
        session={session}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onSignOut={handleSignOut}
        onContinue={handleContinueToDiscovery}
        discoveryProfiles={discoveryProfiles}
        matches={matches}
        quickFilters={quickFilters}
      />
    ) : (
      <AuthScreen
        title={title}
        subtitle={subtitle}
        activeTab={activeTab}
        formData={formData}
        errorMessage={errorMessage}
        successMessage={successMessage}
        onTabChange={handleTabChange}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    )
  );
}

export default App;
