import React from 'react';

// CSS for the toast is bundled inside the component
const toastStyles = `
.dark-mode-toast {
  position: fixed;
  bottom: 30px; 
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background-color: #ffffffff; 
  color: black;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 1001; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  animation: fadeInOut 3s ease-in-out forwards;
}

/* On dark mode, make the toast white */
body.dark-mode .dark-mode-toast {
    background-color: #000000ff;
    color: #ffffffff;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  15% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  85% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}`
;

const DarkModeToast = ({ message }) => {
  return (
    <>
      <style>{toastStyles}</style>
      <div className="dark-mode-toast">
        {message}
      </div>
    </>
  );
};

export default DarkModeToast;