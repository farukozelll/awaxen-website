"use client";

import React, { useEffect } from "react";
import "./styles.scss";
import Parallaxx from "parallax-js";

const Parallax: React.FC = () => {
  useEffect(() => {
    // Initialize Parallax after component is mounted
    const scene = document.getElementById("scene");
    if (scene) {
      new Parallaxx(scene);
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="parallax">
      {/* Parallax Wrapper */}
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="0.5"></div>

            <div className="one" data-depth="0.3">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.20">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.30">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.20">
              TEK PLATFORM, <br />SAYISIZ ÇÖZÜM
            </p>
            <p className="p404" data-depth="0.05">
              Tek Platform, <br />Sayısız Çözüm
            </p>
          </div>

          {/* Text Section */}
          <div className="text">
            <article>
              <p>
                Güneş panellerindeki kusurları tespit eden yenilikçi teknolojilerle daha güvenli, 
                daha verimli bir enerji geleceği için buradayız.
              </p>
              <div id="buttonGroup" className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    id="btn1"
                    className="btn group mb-4 w-50 bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Çalışmaya Başla
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    id="btn1"
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Demo İste
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parallax;