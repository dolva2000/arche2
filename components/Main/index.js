import React from "react";

export default function index() {
  const event = [
    {
      img: "img/gallery/most_recent.jpg",
      badge: "Benediction",
      title: " La Benediction de nouveaux nées.",
      subtitle: "Le samedi 25/10/2055",
    },
    {
      img: "img/gallery/most_recent.jpg",
      badge: "Anonce",
      title: "Présentation des futurs mariés: Fr Plamedi et Sr Bijoux",
      subtitle: "Le samedi 25/10/2023",
    },
    {
      img: "img/gallery/weeklyNews1.jpg",
      badge: "Lecture Biblique",
      title: "De Genèse 1 à Genèse 20",
      subtitle: "Du Lundi au Dimanche",
    },
  ];
  return (
    <main>
      <div className="trending-area fix pt-25 gray-bg">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-8">
                <div className="slider-active">
                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="img/trending/trending_top2.jpg" alt="" />
                        <div className="trend-top-cap">
                          <span
                            className="bgg"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                            data-duration="1000ms"
                          >
                            Jeudi
                          </span>
                          <h2>
                            <a
                              href="latest_news.html"
                              data-animation="fadeInUp"
                              data-delay=".4s"
                              data-duration="1000ms"
                            >
                              Plus on se rapproche de Dieu, plus on vit sa main
                              dans nos vies.
                            </a>
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="1000ms"
                          >
                            Pasteur BWANGO Miracle
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="img/trending/trending_top02.jpg" alt="" />
                        <div className="trend-top-cap">
                          <span
                            className="bgr"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                            data-duration="2000ms"
                          >
                            Dimache
                          </span>
                          <h2>
                            <a
                              href=""
                              data-animation="fadeInUp"
                              data-delay=".4s"
                              data-duration="2000ms"
                            >
                              La résurection de Christ est le secret de la
                              victoire sur l'ennemi ou l'opposition.
                            </a>
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="2000ms"
                          >
                            Pasteur BWANGO Miracle
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-slider">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="img/trending/trending_top03.jpg" alt="" />
                        <div className="trend-top-cap">
                          <span
                            className="bgb"
                            data-animation="fadeInUp"
                            data-delay=".2s"
                            data-duration="1000ms"
                          >
                            Mardi
                          </span>
                          <h2>
                            <a
                              href=""
                              data-animation="fadeInUp"
                              data-delay=".4s"
                              data-duration="1000ms"
                            >
                              Ton environnement a une grande influence sur ton
                              epanouissement, il est important de connaitre là
                              où Dieu t'a appelé à y être.
                            </a>
                          </h2>
                          <p
                            data-animation="fadeInUp"
                            data-delay=".6s"
                            data-duration="1000ms"
                          >
                            Pasteur BWANGO Miracle
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="img/trending/trending_top3.jpg" alt="" />
                        <div className="trend-top-cap trend-top-cap2">
                          <span className="bgb">Samedi</span>
                          <h2>
                            <a href="">
                              La prière des mamans et les jeunes soeurs
                            </a>
                          </h2>
                          <p>Chaque Samedi: 08h00 à 9h45</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="trending-top mb-30">
                      <div className="trend-top-img">
                        <img src="img/trending/trending_top4.jpg" alt="" />
                        <div className="trend-top-cap trend-top-cap2">
                          <span className="bgg">SAMEDI</span>
                          <h2>
                            <a href="">Réunion de la jeunesse</a>
                          </h2>
                          <p>Le Samedi à 16h00 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trending-area fix pt-25">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-8">
                <div className="small-tittle mb-20">
                  <h4>Evenement</h4>
                </div>
                <div className="slider-active">
                  {event?.map((ev) => (
                    <div className="single-slider">
                      <div className="trending-top mb-30">
                        <div className="trend-top-img">
                          <img src={ev.img} alt="" />
                          <div className="trend-top-cap">
                            <span
                              className="bgr"
                              data-animation="fadeInUp"
                              data-delay=".2s"
                              data-duration="1000ms"
                            >
                              {ev.badge}
                            </span>
                            <h2>
                              <a
                                href="latest_news.html"
                                data-animation="fadeInUp"
                                data-delay=".4s"
                                data-duration="1000ms"
                              >
                                {ev.title}
                              </a>
                            </h2>
                            <p
                              data-animation="fadeInUp"
                              data-delay=".6s"
                              data-duration="1000ms"
                            >
                              {ev.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="weekly2-news-area pt-50 pb-30 gray-bg">
        <div className="container">
          <div className="weekly2-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="home-banner2 d-none d-lg-block"></div>
              </div>
              <div className="col-lg-9">
                <div className="slider-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="small-tittle mb-30">
                        <h4>NOS IMAGES</h4>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="weekly2-news-active d-flex">
                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="img/gallery/weeklyNews1.jpg" alt="" />
                          </div>
                          <div className="weekly2-caption">
                            <h4>nous somme renouvelle par la parole de Dieu</h4>
                          </div>
                        </div>

                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="img/gallery/weeklyNews2.jpg" alt="" />
                          </div>
                          <div className="weekly2-caption">
                            <h4>nous somme renouvelle par la parole de Dieu</h4>
                          </div>
                        </div>

                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="img/gallery/weeklyNews2.jpg" alt="" />
                          </div>
                          <div className="weekly2-caption">
                            <h4>nous somme renouvelle par la parole de Dieu</h4>
                          </div>
                        </div>

                        <div className="weekly2-single">
                          <div className="weekly2-img">
                            <img src="img/gallery/weeklyNews1.jpg" alt="" />
                          </div>
                          <div className="weekly2-caption">
                            <h4>nous somme renouvelle par la parole de Dieu</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="youtube-area video-padding d-none d-sm-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video-items-active">
                <div className="video-items text-center">
                  <video controls></video>
                </div>
                <div className="video-items text-center">
                  <video controls></video>
                </div>
                <div className="video-items text-center">
                  <video controls></video>
                </div>
                <div className="video-items text-center">
                  <video controls></video>
                </div>
                <div className="video-items text-center">
                  <video controls></video>
                </div>
              </div>
            </div>
          </div>
          <div className="video-info">
            <div className="row">
              <div className="col-12">
                <div className="testmonial-nav text-center">
                  <div className="single-video">
                    <video controls></video>
                    <div className="video-intro">
                      <h4>Old Spondon News - 2020</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <video controls></video>
                    <div className="video-intro">
                      <h4>Banglades News Video</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <video controls></video>
                    <div className="video-intro">
                      <h4>Latest Video - 2020</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <video controls></video>
                    <div className="video-intro">
                      <h4>Spondon News -2019</h4>
                    </div>
                  </div>
                  <div className="single-video">
                    <video controls></video>
                    <div className="video-intro">
                      <h4>Latest Video - 2020</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       */}
      <div className="weekly3-news-area pt-10 pb-130">
        <div className="container">
          <div className="weekly3-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-wrapper">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Revivez nos cultes</h4>
                      <div className="weekly3-news-active dot-style d-flex">
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="img/gallery/weekly2News1.jpg" alt="" />
                          </div>
                          <div className="weekly3-caption">
                            <h4>Nous somme benis dans chaque cultes</h4>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="img/gallery/weekly2News2.jpg" alt="" />
                          </div>
                          <div className="weekly3-caption">
                            <h4>Nous somme benis dans chaque cultes</h4>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="img/gallery/weekly2News3.jpg" alt="" />
                          </div>
                          <div className="weekly3-caption">
                            <h4>Nous somme benis dans chaque cultes</h4>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="img/gallery/weekly2News4.jpg" alt="" />
                          </div>
                          <div className="weekly3-caption">
                            <h4>Nous somme benis dans chaque cultes</h4>
                          </div>
                        </div>
                        <div className="weekly3-single">
                          <div className="weekly3-img">
                            <img src="img/gallery/weekly2News2.jpg" alt="" />
                          </div>
                          <div className="weekly3-caption">
                            <h4>Nous somme benis dans chaque cultes</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
