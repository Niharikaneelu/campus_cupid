import { useMemo, useState } from 'react';
import AvatarMark from './AvatarMark';
import ProfileField from './ProfileField';
import GenderSpecification from './GenderSpecification';
import ProfilePhotoUploader from './ProfilePhotoUploader';
import SettingToggle from './SettingToggle';
import StatusBadge from './StatusBadge';
import ThemeButton from './ThemeButton';

const defaultProfileState = (session) => ({
  name: session?.name || '',
  headline: 'Looking for something genuine, warm, and low pressure.',
  bio: 'I love good coffee, long conversations, and evenings that end with a sunset walk.',
  university: 'Campus East',
  location: 'Near central campus',
  genderIdentity: 'Prefer not to say',
  pronouns: 'She/her',
  interestedIn: 'Everyone',
  interests: 'Coffee, music, badminton, indie films',
});

const defaultSettingsState = {
  showAge: true,
  showDistance: true,
  profileVisible: true,
  matchAlerts: true,
  messageAlerts: true,
  emailDigest: false,
};

function ProfileSection({ session }) {
  const [profile, setProfile] = useState(() => defaultProfileState(session));
  const [settings, setSettings] = useState(defaultSettingsState);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  const avatarLabel = useMemo(() => profile.name || session?.name || 'C', [profile.name, session?.name]);

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }));
  };

  const handleSettingChange = (name) => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      [name]: !currentSettings[name],
    }));
  };

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    setAvatarPreview(URL.createObjectURL(selectedFile));
    setSaveMessage('Photo selected. Save profile to keep this update in the UI.');
  };

  const handleSaveProfile = () => {
    setSaveMessage('Profile settings saved successfully.');
  };

  return (
    <div className="profile-grid">
      <section className="profile-overview-card">
        <StatusBadge>Profile setup</StatusBadge>
        <div className="profile-overview-header">
          <AvatarMark>{avatarLabel.slice(0, 1)}</AvatarMark>
          <div>
            <h2>{profile.name || session?.name}</h2>
            <p>{session?.email}</p>
          </div>
        </div>
        <div className="profile-summary-tags" aria-label="Gender specification summary">
          <span>{profile.genderIdentity}</span>
          <span>{profile.pronouns}</span>
          <span>Interested in {profile.interestedIn}</span>
        </div>
        <div className="profile-metrics">
          <div>
            <strong>3</strong>
            <span>photos</span>
          </div>
          <div>
            <strong>18</strong>
            <span>likes</span>
          </div>
          <div>
            <strong>6</strong>
            <span>matches</span>
          </div>
        </div>

        <ProfilePhotoUploader
          preview={avatarPreview}
          onChange={handlePhotoChange}
        />
      </section>

      <section className="profile-edit-card">
        <div className="profile-card-heading">
          <h3>About you</h3>
          <p>Update your profile and the settings that control how people see and contact you.</p>
        </div>

        <div className="profile-fields-grid">
          <ProfileField
            label="Display name"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Your name"
          />
          <ProfileField
            label="Headline"
            name="headline"
            value={profile.headline}
            onChange={handleProfileChange}
            placeholder="A short line about you"
          />
          <ProfileField
            label="University"
            name="university"
            value={profile.university}
            onChange={handleProfileChange}
            placeholder="Your college or university"
          />
          <ProfileField
            label="Location"
            name="location"
            value={profile.location}
            onChange={handleProfileChange}
            placeholder="Where you are based"
          />
        </div>

        <GenderSpecification
          genderIdentity={profile.genderIdentity}
          pronouns={profile.pronouns}
          interestedIn={profile.interestedIn}
          onChange={handleProfileChange}
        />

        <ProfileField
          label="Bio"
          name="bio"
          value={profile.bio}
          onChange={handleProfileChange}
          as="textarea"
          rows={5}
          placeholder="Write a short intro about yourself"
        />

        <ProfileField
          label="Interests"
          name="interests"
          value={profile.interests}
          onChange={handleProfileChange}
          placeholder="Separate interests with commas"
        />

        <div className="settings-section">
          <div className="profile-card-heading">
            <h3>Settings</h3>
            <p>Choose how your profile appears and which alerts you want to receive.</p>
          </div>

          <div className="settings-grid">
            <SettingToggle
              label="Show age"
              description="Display your age on discovery cards."
              checked={settings.showAge}
              onChange={() => handleSettingChange('showAge')}
            />
            <SettingToggle
              label="Show distance"
              description="Let people see how close you are on campus."
              checked={settings.showDistance}
              onChange={() => handleSettingChange('showDistance')}
            />
            <SettingToggle
              label="Profile visible"
              description="Keep your profile discoverable in the swipe feed."
              checked={settings.profileVisible}
              onChange={() => handleSettingChange('profileVisible')}
            />
            <SettingToggle
              label="Match alerts"
              description="Get notified when a mutual like becomes a match."
              checked={settings.matchAlerts}
              onChange={() => handleSettingChange('matchAlerts')}
            />
            <SettingToggle
              label="Message alerts"
              description="Receive alerts for new chats and replies."
              checked={settings.messageAlerts}
              onChange={() => handleSettingChange('messageAlerts')}
            />
            <SettingToggle
              label="Email digest"
              description="Get a weekly summary of new matches and activity."
              checked={settings.emailDigest}
              onChange={() => handleSettingChange('emailDigest')}
            />
          </div>
        </div>

        {saveMessage && <div className="form-message success">{saveMessage}</div>}

        <div className="profile-actions-row">
          <ThemeButton variant="secondary" type="button" onClick={() => setProfile(defaultProfileState(session))}>
            Reset profile
          </ThemeButton>
          <ThemeButton variant="primary" type="button" onClick={handleSaveProfile}>
            Save profile
          </ThemeButton>
        </div>
      </section>
    </div>
  );
}

export default ProfileSection;