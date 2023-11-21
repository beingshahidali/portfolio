import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 450,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.8,
          },
          move: {
            direction: "left",
            speed: 0.9,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;



// import React from "react";
// import Particles from "react-tsparticles";

// function Particle() {
//   return (
//     <Particles
//       id="tsparticles"
//       params={{x
//         particles: {
//           number: {
//             value: 8,
//             density: {
//               enable: true,
//               value_area: 80,
//             },
//           },
//           color: {
//             value: "#ffffff",
//           },
//           shape: {
//             type: "circle",
//             stroke: {
//               width: 0,
//               color: "#000000",
//             },
//             polygon: {
//               nb_sides: 5,
//             },
//             image: {
//               src: "img/github.svg",
//               width: 100,
//               height: 100,
//             },
//           },
//           opacity: {
//             value: 0.5,
//             random: false,
//             anim: {
//               enable: false,
//               speed: 1,
//               opacity_min: 0.1,
//               sync: false,
//             },
//           },
//           size: {
//             value: 10,
//             random: true,
//             anim: {
//               enable: false,
//               speed: 80,
//               size_min: 0.1,
//               sync: false,
//             },
//           },
//           line_linked: {
//             enable: true,
//             distance: 300,
//             color: "#ffffff",
//             opacity: 0.2,
//             width: 2,
//           },
//           move: {
//             enable: true,
//             speed: 12,
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: {
//               enable: false,
//               rotateX: 600,
//               rotateY: 1200,
//             },
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: {
//               enable: false,
//               mode: "repulse",
//             },
//             onclick: {
//               enable: true,
//               mode: "push",
//             },
//             resize: true,
//           },
//           modes: {
//             grab: {
//               distance: 800,
//               line_linked: {
//                 opacity: 1,
//               },
//             },
//             bubble: {
//               distance: 800,
//               size: 8,
//               duration: 2,
//               opacity: 0.8,
//               speed: 0,
//             },
//             repulse: {
//               distance: 400,
//               duration: 0.4,
//             },
//             push: {
//               particles_nb: 4,
//             },
//             remove: {
//               particles_nb: 2,
//             },
//           },
//         },
//         retina_detect: true,
//       }}
//     />
//   );
// }

// export default Particle;

