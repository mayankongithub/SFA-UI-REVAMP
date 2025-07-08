import React, { useState, useEffect } from 'react';
import '../style/Login_page.css';

const Login_page = ({ setSubmitted }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonText, setButtonText] = useState('Sign In');
  

  // Check form validity and enable/disable button
  useEffect(() => {
    if (username.trim().length > 0 && password.trim().length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Disable the button immediately and keep it disabled
    setIsButtonDisabled(true);

    // Navigate directly to home page without any success messages or effects
    console.log("Login attempt, navigating to home page...");

    // Set submitted to true to show home page immediately
    if (typeof setSubmitted === 'function') {
      console.log("Setting submitted to true");
      setSubmitted(true);
    } else {
      console.error("setSubmitted is not a function", setSubmitted);
    }
  };

  // Enhanced input interactions
  const handleInputFocus = (e) => {
    const container = e.target.parentElement;
    container.style.transform = "scale(1.02) translateZ(10px)";
    container.style.transition = "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  };

  const handleInputBlur = (e) => {
    const container = e.target.parentElement;
    container.style.transform = "scale(1) translateZ(0)";
  };

  return (
    <div className="font-inter bg-gradient-to-br from-gray-50 to-gray-300 min-h-screen overflow-hidden relative">
      {/* Background container matching the CSS */}
      <div className="background-container">
        <div className="grid-overlay"></div>

        {/* Scanning lines from CSS */}
        <div className="scan-line"></div>
        <div className="scan-line"></div>

        {/* Background logos using CSS classes */}
        <div className="background-logo background-logo-1">
          <div className="logo-circle-bg"></div>
        </div>
        <div className="background-logo background-logo-2">
          <div className="logo-circle-bg"></div>
        </div>
        <div className="background-logo background-logo-3">
          <div className="logo-circle-bg"></div>
        </div>
        <div className="background-logo background-logo-4">
          <div className="logo-circle-bg"></div>
        </div>

      </div>

      {/* Data nodes from CSS */}
      <div className="data-node"></div>
      <div className="data-node"></div>
      <div className="data-node"></div>
      <div className="data-node"></div>
      <div className="data-node"></div>

      <div className="main-container">
        <div className="login-panel bg-white/95 backdrop-blur-[20px] border border-ddn-red/20 rounded-3xl p-[60px_50px] w-[500px] max-w-[90vw] relative overflow-hidden animate-panel-materialize shadow-[0_20px_40px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.8)] will-change-[transform,opacity] transform-gpu">
          {/* Futuristic header */}
          <div className="text-center mb-[50px] relative">
            <div className="w-[280px] h-[100px] mx-auto mb-5 relative animate-logo-assemble flex items-center justify-center will-change-[transform,opacity] transform-gpu">
              <img src="ddn-logo-dark-horizontal(1).png" alt="DDN Logo" className="max-w-full max-h-full w-auto h-auto object-contain will-change-[transform,opacity] transform-gpu" />
            </div>
            <h1 className="system-title text-4xl font-bold animate-title-shimmer mb-4 tracking-wide">DDN STORAGE</h1>
            <p className="text-gray-500 text-base font-normal tracking-[3px] uppercase animate-subtitle-glow">SFA Enterprise Portal</p>
          </div>

          {/* Advanced login form */}
          <form onSubmit={handleSubmit} className="relative animate-form-phase-in will-change-[transform,opacity] transform-gpu">
            <div className={`input-container relative mb-[30px] ${username.trim() ? 'has-value' : ''}`}>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full p-5 bg-white/80 border-2 border-ddn-red/20 rounded-2xl text-slate-700 text-base font-inter transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative z-[1] focus:border-ddn-red focus:shadow-[0_0_20px_rgba(220,53,69,0.2),inset_0_0_20px_rgba(220,53,69,0.05)] focus:bg-white/95 input-field"
                placeholder="Enter Your Username : "
                required
                autoComplete="username"
              />
              <label htmlFor="username" className="absolute top-[18px] left-5 text-gray-500 text-base font-normal transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none z-[2] input-label">Username</label>
            </div>

            <div className={`input-container relative mb-[30px] ${password.trim() ? 'has-value' : ''}`}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full p-5 bg-white/80 border-2 border-ddn-red/20 rounded-2xl text-slate-700 text-base font-inter transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] relative z-[1] focus:border-ddn-red focus:shadow-[0_0_20px_rgba(220,53,69,0.2),inset_0_0_20px_rgba(220,53,69,0.05)] focus:bg-white/95 input-field"
                placeholder="Enter Your Password : "
                required
                autoComplete="current-password"
              />
              <label htmlFor="password" className="absolute top-[18px] left-5 text-gray-500 text-base font-normal transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] pointer-events-none z-[2] input-label">Password</label>
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="access-button w-full p-5 border-none rounded-2xl bg-gradient-to-r from-ddn-red to-ddn-red-dark text-white text-lg font-semibold font-inter cursor-pointer relative overflow-hidden mt-5 transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] uppercase tracking-wide shadow-[0_8px_25px_rgba(220,53,69,0.3)] disabled:bg-gradient-to-r disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-[0_4px_15px_rgba(108,117,125,0.2)] hover:enabled:-translate-y-1 hover:enabled:shadow-[0_12px_35px_rgba(220,53,69,0.4),0_0_50px_rgba(220,53,69,0.2)] active:enabled:-translate-y-0.5"
            >
              <span className="relative z-[2] transition-all duration-[400ms] ease-out hover:text-shadow-[0_0_15px_rgba(255,255,255,0.8)]">{buttonText}</span>
            </button>

            <div id="systemStatus" className="text-center mt-6 font-mono text-sm opacity-0 translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_page;
