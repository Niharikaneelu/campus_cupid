import ProfileField from './ProfileField';

const genderOptions = [
  'Woman',
  'Man',
  'Non-binary',
  'Transgender',
  'Genderqueer',
  'Prefer not to say',
];

const pronounOptions = ['She/her', 'He/him', 'They/them', 'Any pronouns', 'Ask me'];

const interestOptions = ['Women', 'Men', 'Everyone', 'Non-binary people'];

function GenderSpecification({ genderIdentity, pronouns, interestedIn, onChange }) {
  return (
    <section className="gender-spec-card">
      <div className="profile-card-heading">
        <h3>Gender specification</h3>
        <p>Set how you identify and who you want to see on the app.</p>
      </div>

      <div className="profile-fields-grid">
        <ProfileField
          label="Gender identity"
          name="genderIdentity"
          as="select"
          value={genderIdentity}
          onChange={onChange}
        >
          {genderOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </ProfileField>

        <ProfileField
          label="Pronouns"
          name="pronouns"
          as="select"
          value={pronouns}
          onChange={onChange}
        >
          {pronounOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </ProfileField>
      </div>

      <ProfileField
        label="Interested in"
        name="interestedIn"
        as="select"
        value={interestedIn}
        onChange={onChange}
      >
        {interestOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </ProfileField>
    </section>
  );
}

export default GenderSpecification;