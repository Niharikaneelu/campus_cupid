function ProfileField({ label, as = 'input', children, ...rest }) {
  let field;

  if (as === 'textarea') {
    field = <textarea {...rest} />;
  } else if (as === 'select') {
    field = (
      <select {...rest}>
        {children}
      </select>
    );
  } else {
    field = <input type="text" {...rest} />;
  }

  return (
    <label className="profile-field">
      <span>{label}</span>
      {field}
    </label>
  );
}

export default ProfileField;