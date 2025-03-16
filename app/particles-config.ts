// Matrix-Inspired Theme
const particlesConfig = {
  particles: {
    number: {
      value: 140,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#059669", "#10b981", "#34d399", "#064e3b", "#047857"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0.4,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#10b981",
      opacity: 0.6,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "trail"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 5,
        particles: {
          size: {
            value: 2
          },
          color: {
            value: "#34d399"
          }
        }
      },
      push: {
        particles_nb: 8
      }
    }
  },
  retina_detect: true
}

export { particlesConfig }
