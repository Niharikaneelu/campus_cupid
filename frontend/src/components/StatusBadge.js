function StatusBadge({ children, className = '' }) {
  const classes = ['status-badge', className].filter(Boolean).join(' ');

  return <span className={classes}>{children}</span>;
}

export default StatusBadge;