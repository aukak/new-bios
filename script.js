if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 0 },
    },
  });
} else {
  const isMobile = window.innerWidth < 768;

  tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#00ff7f", "#ff0000", "#0000ff"] },
      links: {
        color: "#00ff7f",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: { value: isMobile ? 50 : 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: ["circle", "triangle", "star"] },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  });
}

const nameEl = document.querySelector('.name');
const cursorChar = '_';
const nameList = ["Bog", "Sarah", "Trans and Lesbian", "Loving my GF <3"];
let nameIndex = 0; 
let prefix = "I am ";
let deleting = false;
let currentName = nameList[nameIndex];
let fullText = prefix + currentName;
let charIndex = 0;

nameEl.textContent = "";
nameEl.insertAdjacentHTML('beforeend', `<span class="cursor">${cursorChar}</span>`);

function typeName() {
  const cursor = nameEl.querySelector('.cursor');
  if (!deleting) {
    if (charIndex < fullText.length) {
      nameEl.textContent = fullText.slice(0, charIndex + 1);
      nameEl.appendChild(cursor);
      charIndex++;
      setTimeout(typeName, 100);
    } else {
      setTimeout(() => {
        deleting = true;
        typeName();
      }, 800);
    }
  } else {
    if (charIndex > prefix.length) {
      nameEl.textContent = fullText.slice(0, charIndex - 1);
      nameEl.appendChild(cursor);
      charIndex--;
      setTimeout(typeName, 50);
    } else {
      nameIndex = (nameIndex + 1) % nameList.length;
      currentName = nameList[nameIndex];
      fullText = prefix + currentName;
      deleting = false;
      setTimeout(typeName, 400);
    }
  }
}

typeName();
