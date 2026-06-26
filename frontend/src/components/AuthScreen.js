import BrandPill from './BrandPill';
import ThemeButton from './ThemeButton';

function AuthScreen({
  title,
  subtitle,
  activeTab,
  formData,
  errorMessage,
  successMessage,
  onTabChange,
  onInputChange,
  onSubmit,
}) {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <BrandPill>Campus Cupid</BrandPill>
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <ul className="feature-list" aria-label="Core auth features">
          <li>Secure sign in</li>
          <li>New user registration</li>
          <li>Browser session persistence</li>
        </ul>
      </section>

      <section className="auth-panel" aria-live="polite">
        <div className="auth-card">
          <div className="tab-group" role="tablist" aria-label="Authentication mode">
            <ThemeButton
              variant="nav"
              type="button"
              role="tab"
              aria-selected={activeTab === 'login'}
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => onTabChange('login')}
            >
              Login
            </ThemeButton>
            <ThemeButton
              variant="nav"
              type="button"
              role="tab"
              aria-selected={activeTab === 'register'}
              className={activeTab === 'register' ? 'active' : ''}
              onClick={() => onTabChange('register')}
            >
              Register
            </ThemeButton>
          </div>

          <form className="auth-form" onSubmit={onSubmit}>
            {activeTab === 'register' && (
              <label>
                Full name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
            )}

            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onInputChange}
                placeholder="name@college.edu"
                autoComplete="email"
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onInputChange}
                placeholder="Create a secure password"
                autoComplete={activeTab === 'login' ? 'current-password' : 'new-password'}
              />
            </label>

            {errorMessage && <div className="form-message error">{errorMessage}</div>}
            {successMessage && <div className="form-message success">{successMessage}</div>}

            <ThemeButton variant="primary" type="submit" className="auth-submit">
              {activeTab === 'login' ? 'Sign in' : 'Create account'}
            </ThemeButton>
          </form>

          <div className="demo-note">
            Demo login: <strong>demo@campuscupid.app</strong> / <strong>campus123</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthScreen;