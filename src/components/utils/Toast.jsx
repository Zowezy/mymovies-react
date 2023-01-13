import React from 'react';
import { useToaster } from 'react-hot-toast';
function Toast() {
    const { toasts, handlers } = useToaster();
    const { startPause, endPause, calculateOffset, updateHeight } = handlers;
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 1,
          zIndex:999
        }}
        onMouseEnter={startPause}
        onMouseLeave={endPause}
      >
        {toasts.map((toast) => {
          const offset = calculateOffset(toast.id, {
            reverseOrder: false,
            margin: 0
          });
          const ref = (el) => {
            if (el && !toast.height) {
              const height = el.getBoundingClientRect().height;
            //   updateHeight(toast.id, height);
            }
          };
          return (
            <div
              key={toast.id}
              ref={ref}
              style={{
                margin: '2px 0',
                padding: "35px 100px",
                borderRadius:'12px 12px 0px 0px',
                background: toasts.type === 'success' ? `#fd3f3f;` : `#46d14b`,
                transition: "all 1s ease-out",
                opacity: toast.visible ? 1 : 0,
                transform: `translateY(${offset}px)`,
                animation: `fadein 1s`,
                color:'white',
                fontWeight:'bold'
              }}
            >
              {toast.message}
            </div>
          );
        })}
      </div>
    );
}

export default Toast
