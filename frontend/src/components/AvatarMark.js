function AvatarMark({ children, size = 'default' }) {
  const className = size === 'small' ? 'avatar-mark small' : 'avatar-mark';

  return <div className={className}>{children}</div>;
}

export default AvatarMark;