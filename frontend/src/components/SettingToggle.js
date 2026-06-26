function SettingToggle({ label, description, checked, onChange }) {
  return (
    <label className={checked ? 'setting-toggle active' : 'setting-toggle'}>
      <div>
        <strong>{label}</strong>
        <p>{description}</p>
      </div>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}

export default SettingToggle;