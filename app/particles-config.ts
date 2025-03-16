const particlesConfig = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#60a5fa", "#3b82f6", "#2563eb", "#1d4ed8", "#93c5fd"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#60a5fa",
      opacity: 0.6,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 1200,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 150,
        duration: 0.4
      },
      push: {
        particles_nb: 6
      }
    }
  },
  retina_detect: true
}

export { particlesConfig }
