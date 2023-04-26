import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import arrow from "../assets/img/svg/arrow.svg";
import image from "../assets/img/svg/image.svg";
import threedot from "../assets/img/svg/threedot.svg";
import downbtn from "../assets/img/svg/downBtn.svg";
import bothimage from "../assets/img/png/image.png";
const HeroSection = () => {
  return (
    <div className="z_2 position-relative overflow-hidden">
      <div className="positionLightsky position-absolute animatoinOpacity bottom_0 top_20 start-0"></div>
      <div className="positionLightgreen position-absolute animatoinOpacity bottom-0 end-0"></div>
      <Container className="customContainer">
        <Row className="py-4 py-lg-5 align-items-end">
          <Col className="my-3 my-lg-0 position-relative  " lg={6}>
            <div className="h_450">
              {/* active-1 */}
              <div className="position1 animatoinCard1 box_1 text-center d-flex ">
                <p className="mb-0 fs_2xs fw-semibold"> Active leads</p>
                <div className="activeDot ms-3"></div>
              </div>
              {/* jordan-2 */}
              <div className="position2 animatoinCard2 box_2  p-4">
                <div className="d-flex aligm-items-start justify-content-between">
                  <h3 className="fs_xsm fw-semibold">
                    Jordan <span className="d-block">Wentworth</span>
                  </h3>
                  <p className="text_black_80 curser mb-0 fs_3xs fw-semibold newBtn">
                    New
                  </p>
                </div>
                <p className="fs_xsm fw-semibold text_green">$1,293,200</p>
                <p className="fs_3xs fw-normal">
                  Boston, MA <span className="d-block">Inheritance</span>
                </p>
                <p className="mb-0 fw-semibold fs_3xs">
                  {" "}
                  <span className="borderBox me-2"></span> Contacted
                </p>
              </div>
              {/* 5500-3 */}
              <div className="position3 animatoinCard3 box_3">
                <div className="p-2">
                  <h4 className="fs_2xs fw-normal ">5500 72nd Ave N</h4>
                  <p className="mb-0 mt-1 text_green fw-semibold">$150,000</p>
                  <p className="fs_xs mb-0 fw-normal">
                    Pinellas Park, FL{" "}
                    <span className="d-block">inheritance</span>
                  </p>
                </div>
                <button className=" btnBox  d-flex align-items-center justify-content-center ">
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
              {/* ciera-4 */}
              <div className="position4 animatoinCard4 box_4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img className="curser" src={image} alt="image" />
                    <div className="ms-2">
                      <p className="mb-0 fs_3xs fw-normal">Ciera Thomas</p>
                      <p className="mb-0 fs_3xs fw-normal text_white_10">
                        Edit
                      </p>
                    </div>
                  </div>
                  <img className="curser" src={threedot} alt="threedot" />
                </div>
                <div className="borderLine my-4"></div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-semibold fs_3xs">1.</p>
                  <div className="d-flex">
                    <div className=" line1"></div>
                    <div className="mx-1 line2"></div>
                    <div className=" line3"></div>
                  </div>
                  <img className="curser" src={downbtn} alt="down" />
                </div>
                <div className="d-flex align-items-center py-3 justify-content-between">
                  <p className="mb-0 fw-semibold fs_3xs">2.</p>
                  <div className="d-flex">
                    <div className="me-2 line4"></div>
                    <div className=" line5"></div>
                  </div>
                  <img className="curser" src={downbtn} alt="down" />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-semibold fs_3xs">3.</p>
                  <div className="d-flex">
                    <div className=" line6"></div>
                    <div className="mx-1 line7"></div>
                    <div className=" line8"></div>
                  </div>
                  <img className="curser" src={downbtn} alt="down" />
                </div>
              </div>
              {/* image-5 */}
              <div className="position5 animatoinCard5">
                <img
                  className="w_110 w_md_170"
                  src={bothimage}
                  alt="bothimage"
                />
              </div>
              {/* 2days-6 */}
              <div className="position6 animatoinCard6 box_6 p-3">
                <p className="text-end mb-0 fs_2xs fw-normal">
                  <svg
                    className="me-2"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.93965 0.282689C4.61928 -0.607002 1.17468 1.38174 0.284992 4.70211C-0.604699 8.02248 1.38404 11.4671 4.70441 12.3568C8.02478 13.2465 11.4694 11.2577 12.3591 7.93734C13.2488 4.61697 11.26 1.17238 7.93965 0.282689ZM5.02793 11.1494C2.3656 10.436 0.779029 7.68796 1.4924 5.02563C2.20577 2.3633 4.95379 0.776726 7.61612 1.4901C10.2785 2.20347 11.865 4.95149 11.1517 7.61382C10.4383 10.2762 7.69027 11.8627 5.02793 11.1494ZM7.43269 3.38209L6.52713 3.13944L5.55656 6.76167L8.17818 9.53468L8.87144 8.87927L6.59153 6.52135L7.43269 3.38209Z"
                      fill="#FFA140"
                    />
                  </svg>
                  2 days ago
                </p>
                <div className="d-flex aligm-items-start justify-content-between">
                  <h3 className="fs_3xs fw-normal">Mihail Lacusta</h3>
                </div>
                <p className="fs_3xs fw-semibold text_green">$1,329,0139</p>
                <p className="fs_2xs fw-normal">Business Sale</p>
                <p className="mb-0 fs_2xs fw-normal">
                  <span className="borderBox me-2"></span> Contacted
                </p>
              </div>
            </div>
            <Row className="justify-content-center align-items-center">
              <Col className="my-2 my-md-0 " xs={6} md={4}>
                <h3 className="text-center fs_md fw-semibold">400mm+</h3>
                <p className="text-center fs_sm text_black_50 fw-normal">
                  Data point used for analytics
                </p>
              </Col>
              <Col className="my-2 my-md-0 " xs={6} md={4}>
                <h3 className="text-center fs_md fw-semibold">$3Tn</h3>
                <p className="text-center fs_sm text_black_50 fw-normal">
                  Investable assets predicted per year
                </p>
              </Col>
              <Col className="my-2 my-md-0 " xs={6} md={4}>
                <h3 className="text-center fs_md fw-semibold">$77Bn</h3>
                <p className="text-center fs_sm text_black_50 fw-normal">
                  Predicted home value transacted per year
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="my-3 my-lg-0 ps-lg-4 ps-xl-5" lg={6}>
            <h1 className="fw-semibold fs_xl mb-0 ">
              Grow your business with Event-Driven Predictive Analytics
            </h1>
            <p className="mb-0 fs_sm mt-3 text_black_70 ">
              It is a long established fact that a reader will be distracted by
              the using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it the look at you.
            </p>
            <Row className="mt-3 mt-lg-5 pt-2  ">
              <Col className="my-3" sm={6}>
                <div className="bg_greenBox d-flex flex-column justify-content-between px-4 py-3 h-100">
                  <div>
                    <p className="mb-0 mt-1 text_white_70 fw-semibold">
                      boost your
                    </p>
                    <h4 className="mb-0 text-white  fw-semibold fs_md">
                      Financial <span className="d-block">Services</span>
                    </h4>
                  </div>
                  <div className="d-flex learnBtn align-items-center curser mt-4 justify-content-between">
                    <button className="fs_sm fw-semibold  bg-transparent border-0 text-white ">
                      Learn more
                    </button>
                    <svg
                      width="26"
                      height="12"
                      viewBox="0 0 26 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5303 6.59094C25.8232 6.29804 25.8232 5.82317 25.5303 5.53028L20.7574 0.757307C20.4645 0.464414 19.9896 0.464414 19.6967 0.757307C19.4038 1.0502 19.4038 1.52507 19.6967 1.81797L23.9393 6.06061L19.6967 10.3032C19.4038 10.5961 19.4038 11.071 19.6967 11.3639C19.9896 11.6568 20.4645 11.6568 20.7574 11.3639L25.5303 6.59094ZM0 6.81061H25V5.31061H0V6.81061Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
              <Col className="my-3 ps-md-0" sm={6}>
                <div className="bg_darkBox d-flex flex-column justify-content-between px-4 py-3 h-100">
                  <div>
                    <p className="mb-0 mt-1 text_white_50 fw-semibold">
                      boost your
                    </p>
                    <h4 className="mb-0 text-white  fw-semibold fs_md">
                      Real Estate
                    </h4>
                  </div>
                  <div className="d-flex learnBtn align-items-center curser mt-4 justify-content-between">
                    <button className="fs_sm fw-semibold  bg-transparent border-0 text-white ">
                      Learn more
                    </button>
                    <svg
                      width="26"
                      height="12"
                      viewBox="0 0 26 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.5303 6.59094C25.8232 6.29804 25.8232 5.82317 25.5303 5.53028L20.7574 0.757307C20.4645 0.464414 19.9896 0.464414 19.6967 0.757307C19.4038 1.0502 19.4038 1.52507 19.6967 1.81797L23.9393 6.06061L19.6967 10.3032C19.4038 10.5961 19.4038 11.071 19.6967 11.3639C19.9896 11.6568 20.4645 11.6568 20.7574 11.3639L25.5303 6.59094ZM0 6.81061H25V5.31061H0V6.81061Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
