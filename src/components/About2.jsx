import React, { useState } from "react";

export default function About() {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <div name="About" className="h-screen w-full mt-44">
      <section className="about h-screen w-full">
        <div className="row">
          <div className="column ">
            <div className="about-img "></div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                {/* <h2>Skills</h2> */}
                {/* to show the skills tab  */}
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>About me.</h2>
                <p>
                  I am front-end developer, who loves desinging too || And a
                  sketcher by hobby
                </p>
                <h3>
                  I Build Things For The Web <br /> Currently a front-end
                  focused developer lookong for the further opportunity to learn
                  and grow more, Have completed more then few task as a
                  freelacer
                </h3>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Web Developer</h3>
                  <p>
                    With over 6 months of experience in web development as a assistance software ingeneer (intern). I am a
                    highly dedicated professional with a good knowledge in
                    various web technologies. I have experience creating
                    responsive and dynamic websites and web components.
                  </p>
                </div>

                <div className="exp-column">
                  <h3> Designing skills</h3>
                  <p>
                    Designing is a part of my side skills and i am familiar with figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
