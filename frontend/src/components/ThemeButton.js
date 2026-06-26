function ThemeButton({ variant = 'primary', className = '', children, ...rest }) {
  const variantClassName = {
    primary: 'primary-button',
    secondary: 'secondary-button',
    filter: 'filter-pill',
    nav: 'main-nav-button',
    like: 'like-button',
    dislike: 'dislike-button',
  }[variant] || 'primary-button';

  const classes = [variantClassName, className].filter(Boolean).join(' ');

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default ThemeButton;