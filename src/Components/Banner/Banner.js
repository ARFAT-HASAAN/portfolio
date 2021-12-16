import React from "react";
import banner from "../../images/myphoto.png";
import Particles from "react-tsparticles";

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="home" className="bg-green-900">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          emitters: {
            direction: "top",
            life: {
              count: 0,
              duration: 0.1,
              delay: 0.1,
            },

            rate: {
              delay: 0.5,
              quantity: 1,
            },
            size: {
              width: 100,
              height: 0,
            },
            position: {
              y: 100,
              x: 50,
            },
          },
          particles: {
            number: {
              value: 0,
            },
            destroy: {
              mode: "split",
              split: {
                count: 1,
                factor: { value: 1 / 3 },
                rate: {
                  value: 100,
                },
                particles: {
                  stroke: {
                    color: {
                      value: [
                        "#5bc0eb",
                        "#fde74c",
                        "#9bc53d",
                        "#e55934",
                        "#fa7921",
                      ],
                    },
                    width: 1,
                  },
                  number: {
                    value: 0,
                  },
                  collisions: {
                    enable: false,
                  },
                  opacity: {
                    value: 1,
                    animation: {
                      enable: true,
                      speed: 0.6,
                      minimumValue: 0.1,
                      sync: false,
                      startValue: "max",
                      destroy: "min",
                    },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: 1,
                    animation: {
                      enable: false,
                    },
                  },
                  life: {
                    count: 1,
                    duration: {
                      value: {
                        min: 1,
                        max: 2,
                      },
                    },
                  },
                  move: {
                    enable: true,
                    gravity: {
                      enable: false,
                    },
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "destroy",
                  },
                },
              },
            },
            life: {
              count: 1,
            },
            shape: {
              type: "line",
            },
            size: {
              value: { min: 0.1, max: 50 },
              animation: {
                enable: true,
                sync: true,
                speed: 150,
                startValue: "max",
                destroy: "min",
              },
            },
            stroke: {
              color: {
                value: "#ffffff",
              },
              width: 1,
            },
            rotate: {
              path: true,
            },
            move: {
              enable: true,
              gravity: {
                acceleration: 15,
                enable: true,
                inverse: true,
                maxSpeed: 100,
              },
              speed: { min: 10, max: 20 },
              outModes: {
                default: "destroy",
                top: "none",
              },
              // trail: {
              //   fillColor: "#000",
              //   enable: true,
              //   length: 10,
              // },
            },
          },
        }}
      />
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 flex items-center gap-4">
          <div className="mx-6 md:md-auto">
            <h1 className="font-bold md:text-7xl text-4xl py-2 text-white">
              Hi.
            </h1>
            <h1 className="font-bold md:text-7xl text-4xl py-2 text-white ">
              I'am Arfat.
            </h1>
            <h3 className="font-bold md:text-7xl text-4xl py-2 text-white">
              Web Developer
            </h3>
            <button className="bg-red-500 md:w-40 w-32 my-3 rounded-full md:py-3 py-2 px-4 md:px-6 font-bold text-xl text-white">
              <a
                href="https://drive.google.com/uc?export=download&id=1onZ7N2OsKWcb3L3ArzvI2ytCzLAzN4Nf"
                download
              >
                Resume
              </a>
            </button>
          </div>
          <div>
            <img src={banner} width="100%" alt="bannerpic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
