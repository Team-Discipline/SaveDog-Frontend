'use client'
import React, {useEffect, useRef, useState} from "react";
import ChannelInfoContent from "@/components/ChannelInfoContent";
import OutLink from "@/components/OutLink";
import BroadCastingNotiButton from "@/components/BroadCastingNotiButton";
import SettingButton from "@/components/SettingButton";

const StreamerPage: React.FC = () => {
  const [online, setOnline] = useState(true);
  const persistentPlayerContent = document.querySelector('[data-target="persistent-player-content"]');
  const [volume, setVolume] = useState("0.5");
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [videoWrapperStyles, setVideoWrapperStyles] = useState({
    // top: '0px',
    // width: '379.733px',
    // height: '213.6px',
    // left: '0px',
    // position: 'absolute' as 'absolute',
    // overflow: 'hidden',
    // zIndex: '1'
    position: 'absolute' as 'absolute',
    overflow: 'hidden',
    zIndex: '1',
  });
  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(event.target.value)
  }

  useEffect(() => {
    const updateStyles = () => {
      const element = videoWrapperRef.current;
      if (element) {
        const { top, left, width, height } = element.getBoundingClientRect();

        // 새로운 스타일 계산
        const newStyles = {
          ...videoWrapperStyles,
          top: `${top-48}px`,
          left: `${left-48}px`,
          width: `${width}px`,
          height: `${height}px`,
        }
        // 스타일 업데이트
        setVideoWrapperStyles((prevStyles) => {
          // 이전 스타일과 새로운 스타일이 같으면 업데이트하지 않음
          if (JSON.stringify(prevStyles) !== JSON.stringify(newStyles)) {
            return newStyles;
          }
          return prevStyles;
        });
      }
    };
    updateStyles();

    window.addEventListener('resize', updateStyles);

    // Cleanup 함수를 이용하여 이벤트 리스너를 해제합니다.
    return () => {
      window.removeEventListener('resize', updateStyles);
    };
  }, [videoWrapperStyles]);

  // if (persistentPlayerContent) {
  //   // 해당 요소가 존재하면 클래스 추가
  //   persistentPlayerContent.classList.add('InjectLayout-sc-1i43xsx-0', 'persistent-player');
  // }

  return (
    <div className="InjectLayout-sc-1i43xsx-0 iA-duFH twilight-main">
      <header id="twilight-sticky-header-root"></header>
      <div className="root-scrollable scrollable-area" data-a-target="root-scroller" data-simplebar="init">
        <div className="simplebar-track vertical" style={{visibility: 'visible'}}>
          <div className="simplebar-scrollbar" style={{top: '2px', height: '597px'}}></div>
        </div>
        <div className="simplebar-track horizontal" style={{visibility: 'hidden'}}>
          <div className="simplebar-scrollbar" style={{left: '2px', width: '1055px'}}></div>
        </div>
        <div className="simplebar-scroll-content" style={{paddingRight: '22px', marginBottom: '-44px'}}>
          <div className="simplebar-content home__scrollable-content"
               style={{paddingBottom: '22px', marginRight: '-22px'}}>
            <div className="Layout-sc-1xcs6mc-0 jNrYjU root-scrollable__wrapper">
              <div className="channel-root channel-root--home channel-root--unanimated"
                   style={{
                     backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='200px'><text x='15' y='27%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 </text><text x='5' y='60%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk</text><text x='0' y='93%' fill='white' font-size='4rem' font-weight='600' opacity='0.1' font-family='Roobert,Helvetica Neue,Helvetica,Arial,sans-serif'>xk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tmxk319 tm</text></svg>")`,
                     backgroundColor: '#9147ff',
                   }}
              >
                <div className="Layout-sc-1xcs6mc-0 dcyYPL">
                  <div className="channel-root__player channel-root__player--offline">
                    <div className="resize-detector">
                      <div className="resize-detector">
                        <div className="resize-detector__grow" style={{width: '100000px', height: '100000px'}}></div>
                      </div>
                      <div className="resize-detector">
                        <div className="resize-detector__shrink"></div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}>
                      <div className="home">
                        <div className="Layout-sc-1xcs6mc-0 fpmStH">
                          <div className="Layout-sc-1xcs6mc-0 ixiIRM">
                            <div className="Layout-sc-1xcs6mc-0 dnISBD home-offline-hero"
                                 style={{position: 'relative'}}>
                              <div className="resize-detector">
                                <div className="resize-detector">
                                  <div className="resize-detector__grow"
                                       style={{width: '100000px', height: '100000px'}}></div>
                                </div>
                                <div className="resize-detector">
                                  <div className="resize-detector__shrink"></div>
                                </div>
                              </div>
                              <div className="Layout-sc-1xcs6mc-0 hMuFhi">
                                <div className="InjectLayout-sc-1i43xsx-0 home-carousel-info kwMNMO">
                                  <div className="Layout-sc-1xcs6mc-0 jkCpei">
                                    <div className="Layout-sc-1xcs6mc-0 iNkiyZ">
                                      <div className="Layout-sc-1xcs6mc-0 plvaC">
                                        <div
                                          className="Layout-sc-1xcs6mc-0 exGAHk channel-status-info channel-status-info--offline">
                                          <p className="CoreText-sc-1txzju1-0 fQYeyD">오프라인</p>
                                        </div>
                                      </div>
                                      <div className="Layout-sc-1xcs6mc-0 golbyW">
                                        <h2
                                          className="CoreText-sc-1txzju1-0 ScTitleText-sc-d9mj2s-0 loYYIe ezNtJL tw-title">
                                          <span>괴물쥐123</span>님은 오프라인 상태입니다.
                                        </h2>
                                      </div>
                                      <div className="Layout-sc-1xcs6mc-0 fMazMU">
                                        <h3 className="CoreText-sc-1txzju1-0 kksMWj home-carousel-info--subtitle"></h3>
                                      </div>
                                      <div className="Layout-sc-1xcs6mc-0 daZyRV">
                                        {/* 외부 링크 생성 재사용성 고려!!*/}
                                        <OutLink/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="Layout-sc-1xcs6mc-0">
                                    <span className="CoreText-sc-1txzju1-0 dLeJdh">
                                      <div className="Layout-sc-1xcs6mc-0 xxjeD home-notify-cta">
                                        <BroadCastingNotiButton/>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <div className="Layout-sc-1xcs6mc-0 jILLSw home-video__wrapper"
                                     data-a-target="home-offline-carousel">
                                  <div className="Layout-sc-11xcs6mc-0 copBMt home-video">
                                    <div
                                      className="Layout-sc-1xcs6mc-0 hzlEAx channel-page__video-player channel-page__video-player--home-carousel" ref={videoWrapperRef}>
                                      <div id='1234' className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect" >
                                        <div className="ScAspectSpacer-sc-18km980-0 fCNuzu"></div>
                                        <div data-target="persistent-player-content"
                                             className="Layout-sc-1xcs6mc-0 gMJXeQ"></div>
                                        <div className="resize-detector">
                                          <div className="resize-detector">
                                            <div className="resize-detector__grow"
                                                 style={{width: '100000px', height: '100000px'}}></div>
                                          </div>
                                          <div className="resize-detector">
                                            <div className="resize-detector__shrink"></div>
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
                    </div>
                  </div>
                  <div className="channel-root__info channel-root__info--offline channel-root__info--home" style={{
                    transition: 'transform 500ms ease 0ms',
                    opacity: '1',
                    marginTop: '500px',
                    minHeight: '500px'
                  }}>
                    <ChannelInfoContent/>
                  </div>
                </div>
                <div className="Layout-sc-1xcs6mc-0 cLfLtl"></div>
              </div>
              <div className="InjectLayout-sc-1i43xsx-0 persistent-player" data-a-player-state=""
                   style={videoWrapperStyles}>
                <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                  <div className="ScAspectSpacer-sc-18km980-0 fCNuzu"></div>
                  <div className="Layout-sc-1xcs6mc-0 video-player" data-a-target="video-player"
                       data-a-player-type="channel_home_carousel" data-test-selector="video-player__video-layout">
                    <div
                      className="Layout-sc-1xcs6mc-0 kgRWSQ video-player__container video-player__container--resize-calc"
                      data-test-selector="video-player__video-container">
                      <div className="resize-detector">
                        <div className="resize-detector">
                          <div className="resize-detector__grow" style={{width: '100000px', height: '100000px'}}></div>
                        </div>
                        <div className="resize-detector">
                          <div className="resize-detector__shrink"></div>
                        </div>
                      </div>
                      <div data-test-selector="sda-wrapper"
                           className="stream-display-ad__wrapper stream-display-ad__wrapper_squeezeback stream-display-ad__wrapper-hidden">
                        <div data-test-selector="sda-container" className="stream-display-ad__container_squeezeback"
                             style={{height: '90px', width: '160px', background: 'black'}}>
                          <div data-test-selector="sda-transform"
                               className="stream-display-ad__transform-container_squeezeback">
                            <div data-test-selector="sda-frame" id="stream-lowerthird"
                                 className="stream-display-ad__frame_squeezeback"
                                 style={{transform: 'translateX(-50%) scale(1)'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="Layout-sc-1xcs6mc-0 video-ref" data-a-target="video-ref">
                        <video playsInline={true} webkit-playsinline={'true'}></video>
                        <div className="Layout-sc-1xcs6mc-0 video-player__default-player">
                          <div className="Layout-sc-1xcs6mc-0 gMJXeQ video-player__overlay">
                            {/*미리보기 영상*/}
                            {/*<div*/}
                            {/*  style={{*/}
                            {/*    backgroundColor: 'rgb(25, 23, 28)',*/}
                            {/*    backgroundImage: 'url("https://static-cdn.jtvnw.net/jtv_user_pictures/1f3baf60-ca9e-42c1-abc1-ef155210656c-channel_offline_image-1920x1080.jpeg")',*/}
                            {/*    width: '100%',*/}
                            {/*    height: '100%',*/}
                            {/*    backgroundPosition: '50% center',*/}
                            {/*    backgroundRepeat: 'no-repeat',*/}
                            {/*    backgroundSize: 'contain'*/}
                            {/*  }}*/}
                            {/*></div>*/}
                            <div className="Layout-sc-1xcs6mc-0 SugpE">
                              <div data-a-target="ax-overlay" className="Layout-sc-1xcs6mc-0 SugpE avap-ads-container">
                                <iframe id="amazon-video-ads-iframe"
                                        style={{
                                          width: '100%',
                                          height: '100%',
                                          border: '0px',
                                          display: 'none'
                                        }}></iframe>
                              </div>
                              <div className="ScTransitionBase-sc-hx4quq-0 kCJKkK tw-transition" aria-hidden="true">
                                <div className="Layout-sc-1xcs6mc-0 gFPiDL" style={{width: '334px', height: '92px'}}>
                                  <div aria-hidden="true" className="Layout-sc-1xcs6mc-0 hGhdke">
                                    <div className="Layout-sc-1xcs6mc-0 hcBory"
                                         style={{minWidth: '92px', width: '92px', minHeight: '92px', height: '92px'}}>
                                      <div className="Layout-sc-1xcs6mc-0">
                                        <div id="amazon-companion-ad-div"
                                             style={{
                                               width: '100%',
                                               height: '100%',
                                               border: '0px',
                                               display: 'none',
                                               overflow: 'hidden'
                                             }}></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ScTransitionBase-sc-hx4quq-0 jJXXMJ tw-transition" aria-hidden="true">
                              <div className="Layout-sc-1xcs6mc-0 iXkPaN top-bar">
                                <div className="Layout-sc-1xcs6mc-0">
                                  <div className="Layout-sc-1xcs6mc-0 top-bar--pointer-enabled"></div>
                                </div>
                                <div className="Layout-sc-1xcs6mc-0 jjAyLi">
                                  <div className="Layout-sc-1xcs6mc-0 xxjeD top-bar--pointer-enabled">
                                    <div className="Layout-sc-1xcs6mc-0 htiGKh">
                                      <div
                                        className="ScMediaCardStatWrapper-sc-anph5i-0 jRUNHm tw-media-card-stat">오프라인
                                      </div>
                                    </div>
                                    <div className="Layout-sc-1xcs6mc-0 htiGKh"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="Layout-sc-1xcs6mc-0 egOlwh ScTransitionBase-sc-hx4quq-0 dtAmne follow-panel-overlay tw-transition"
                              data-test-selector="follow-panel-overlay" aria-hidden="false"><p
                              className="CoreText-sc-1txzju1-0 jvPbzs">tmxk319 채널을 팔로우하고 생방송 알림 받기</p>
                              <div className="Layout-sc-1xcs6mc-0 jnMKgW">
                                <div className="Layout-sc-1xcs6mc-0 ijOchg">
                                  <div>
                                    <div role="status" aria-live="polite" className="Layout-sc-1xcs6mc-0 gbJVYO"></div>
                                    <button
                                      className="ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 bTXTVH gmCwLG">
                                      <div className="ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr">
                                        <div data-a-target="tw-core-button-label-text"
                                             className="Layout-sc-1xcs6mc-0 fPOYzN">알림 켜기
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ScTransitionBase-sc-hx4quq-0 jJXXMJ tw-transition" aria-hidden="false">
                              <div data-a-target="player-controls"
                                   className="Layout-sc-1xcs6mc-0 cZvFKh player-controls" data-a-visible="true">
                                <div className="Layout-sc-1xcs6mc-0 kqEiLc"></div>
                                <section className="Layout-sc-1xcs6mc-0 skip-to-target" id="channel-player"
                                         aria-label="플레이어 컨트롤" aria-hidden="false" tabIndex={0}>
                                  <div className="Layout-sc-1xcs6mc-0 iNwAOC">
                                    <div className="Layout-sc-1xcs6mc-0 kqyuWK player-controls__right-control-group"
                                         style={{position: 'relative'}}>
                                      <div className="Layout-sc-1xcs6mc-0">
                                        <div
                                          className="Layout-sc-1xcs6mc-0 ScLayoutCssVars-sc-10awzi2-1 ibyWQL bGGTFx tw-root--theme-dark"></div>
                                        <div className="Layout-sc-1xcs6mc-0">
                                          <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                            <button
                                              className="ScCoreButton-sc-ocjdkq-0 caieTg ScButtonIcon-sc-9yap0r-0 dOOPAe"
                                              aria-label="설정" aria-haspopup="menu"
                                              data-a-target="player-settings-button">
                                              <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                                                <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                                                  <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                                                    <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
                                                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20"
                                                         x="0px" y="0px" role="presentation" aria-hidden="true"
                                                         focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG">
                                                      <g>
                                                        <path d="M10 8a2 2 0 100 4 2 2 0 000-4z"></path>
                                                        <path fillRule="evenodd"
                                                              d="M9 2h2a2.01 2.01 0 001.235 1.855l.53.22a2.01 2.01 0 002.185-.439l1.414 1.414a2.01 2.01 0 00-.439 2.185l.22.53A2.01 2.01 0 0018 9v2a2.01 2.01 0 00-1.855 1.235l-.22.53a2.01 2.01 0 00.44 2.185l-1.415 1.414a2.01 2.01 0 00-2.184-.439l-.531.22A2.01 2.01 0 0011 18H9a2.01 2.01 0 00-1.235-1.854l-.53-.22a2.009 2.009 0 00-2.185.438L3.636 14.95a2.009 2.009 0 00.438-2.184l-.22-.531A2.01 2.01 0 002 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 00-.438-2.185L5.05 3.636a2.01 2.01 0 002.185.438l.53-.22A2.01 2.01 0 009 2zm-4 8l1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
                                                              clipRule="evenodd"></path>
                                                      </g>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="resize-detector">
                                        <div className="resize-detector">
                                          <div className="resize-detector__grow"
                                               style={{width: '100000px', height: '100000px'}}></div>
                                        </div>
                                        <div className="resize-detector">
                                          <div className="resize-detector__shrink"></div>
                                        </div>
                                      </div>
                                      <div className="Layout-sc-1xcs6mc-0 kiFVbr"></div>
                                      <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                        <button
                                          className="ScCoreButton-sc-ocjdkq-0 caieTg ScButtonIcon-sc-9yap0r-0 dOOPAe"
                                          aria-label="전체 화면 (f)" aria-haspopup="menu"
                                          data-a-target="player-fullscreen-button">
                                          <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                                            <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg">
                                              <svg width="20" height="20" viewBox="0 0 20 20" focusable="false"
                                                   aria-hidden="true" role="presentation">
                                                <path
                                                  d="M7 3H2v5h2V5h3V3zm11 5V3h-5v2h3v3h2zm-5 9v-2h3v-3h2v5h-5zm-9-5H2v5h5v-2H4v-3z"></path>
                                              </svg>
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div className="InjectLayout-sc-1i43xsx-0 celebration__overlay kNREXL"></div>
                          </div>
                        </div>
                      </div>
                      <div hidden={true} className="Layout-sc-1xcs6mc-0">
                        <div className="ScTransitionBase-sc-hx4quq-0 jJXXMJ tw-transition" aria-hidden="false">
                          <div data-a-target="player-controls" className="Layout-sc-1xcs6mc-0 cZvFKh player-controls"
                               data-a-visible="true">
                            <div className="Layout-sc-1xcs6mc-0 kqEiLc"></div>
                            <section className="Layout-sc-1xcs6mc-0 skip-to-target" id="channel-player"
                                     aria-label="플레이어 컨트롤" aria-hidden="true" tabIndex={0}>
                              <div className="Layout-sc-1xcs6mc-0 iNwAOC">
                                <div className="Layout-sc-1xcs6mc-0 cFsYRp player-controls__left-control-group">
                                  <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                    <button className="ScCoreButton-sc-ocjdkq-0 caieTg ScButtonIcon-sc-9yap0r-0 dOOPAe"
                                            aria-label="플레이 (space/k)" aria-haspopup="menu"
                                            data-a-target="player-play-pause-button" data-a-player-state="paused">
                                      <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                                        <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                                          <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                                            <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
                                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px"
                                                 y="0px" role="presentation" aria-hidden="true" focusable="false"
                                                 className="ScIconSVG-sc-1q25cff-1 jpczqG">
                                              <g>
                                                <path
                                                  d="M5 17.066V2.934a.5.5 0 01.777-.416L17 10 5.777 17.482A.5.5 0 015 17.066z"></path>
                                              </g>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  <div>
                                    <div className="Layout-sc-1xcs6mc-0 xxjeD">
                                      <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                        <button
                                          className="ScCoreButton-sc-ocjdkq-0 caieTg ScButtonIcon-sc-9yap0r-0 dOOPAe"
                                          aria-label="음소거 (m)" aria-haspopup="menu"
                                          data-a-target="player-mute-unmute-button">
                                          <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                                            <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                                              <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                                                <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
                                                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20"
                                                     x="0px" y="0px" role="presentation" aria-hidden="true"
                                                     focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG">
                                                  <g>
                                                    <path
                                                      d="M5 7l4.146-4.146a.5.5 0 01.854.353v13.586a.5.5 0 01-.854.353L5 13H4a2 2 0 01-2-2V9a2 2 0 012-2h1zM14 10a2 2 0 00-2-2v4a2 2 0 002-2z"></path>
                                                  </g>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </button>
                                      </div>
                                      <div
                                        className="ScTransitionBase-sc-hx4quq-0 bJbdjR tw-transition volume-slider__slider-container"
                                        aria-hidden="true">
                                        <div className="Layout-sc-1xcs6mc-0 hsXgFK">
                                          <div className="Layout-sc-1xcs6mc-0 cEJUrN">
                                            <div className="Layout-sc-1xcs6mc-0 hPfSAv">
                                              <div className="InjectLayout-sc-1i43xsx-0 jbmPmA"></div>
                                            </div>
                                            <div className="Layout-sc-1xcs6mc-0 isvDZh"><label
                                              htmlFor="player-volume-slider-fad4e6a8-e101-44f2-b49a-80fc2d62946a"
                                              className="InjectLayout-sc-1i43xsx-0 cmeMuc">볼륨</label>
                                              <div className="Layout-sc-1xcs6mc-0 hueYfv"><input
                                                id="player-volume-slider-fad4e6a8-e101-44f2-b49a-80fc2d62946a"
                                                aria-valuemin={0} aria-valuemax={100} aria-valuenow={50}
                                                aria-valuetext="50%"
                                                className="ScRangeInput-sc-q01wc3-0 jrnSjt tw-range" type="range"
                                                min="0" max="1" step="0.01" data-a-target="player-volume-slider"
                                                data-a-visible="false" value="0.5" onChange={handleVolume}/>
                                                <div className="ScRangeFill-sc-q01wc3-1 glWFpG">
                                                  <div className="ScRangeFillContainer-sc-q01wc3-2 kHNWNi">
                                                    <div data-test-selector="tw-range__fill-value-selector"
                                                         className="ScRangeFillValue-sc-q01wc3-3 jcNjiR"
                                                         style={{width: '50%'}}></div>
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
                                <div className="Layout-sc-1xcs6mc-0 kqyuWK player-controls__right-control-group"
                                     style={{position: 'relative'}}>
                                  <div className="Layout-sc-1xcs6mc-0">
                                    <div
                                      className="Layout-sc-1xcs6mc-0 ScLayoutCssVars-sc-10awzi2-1 ibyWQL bGGTFx tw-root--theme-dark"></div>
                                    <div className="Layout-sc-1xcs6mc-0">
                                      <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                        <SettingButton/>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="resize-detector">
                                    <div className="resize-detector">
                                      <div className="resize-detector__grow"
                                           style={{width: '100000px', height: '100000px'}}></div>
                                    </div>
                                    <div className="resize-detector">
                                      <div className="resize-detector__shrink"></div>
                                    </div>
                                  </div>
                                  <div className="Layout-sc-1xcs6mc-0 kiFVbr"></div>
                                  <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                                    <button className="ScCoreButton-sc-ocjdkq-0 caieTg ScButtonIcon-sc-9yap0r-0 dOOPAe"
                                            aria-label="전체 화면 (f)" aria-haspopup="menu"
                                            data-a-target="player-fullscreen-button">
                                      <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR">
                                        <div className="ScFigure-sc-wkgzod-0 fewniq tw-svg">
                                          <svg width="20" height="20" viewBox="0 0 20 20" focusable="false"
                                               aria-hidden="true" role="presentation">
                                            <path
                                              d="M7 3H2v5h2V5h3V3zm11 5V3h-5v2h3v3h2zm-5 9v-2h3v-3h2v5h-5zm-9-5H2v5h5v-2H4v-3z"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'none'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Layout-sc-1xcs6mc-0 fYwRhm snackbar-list__container snackbar-overlay__list" aria-live="polite">
        <div className="Layout-sc-1xcs6mc-0 iEVzKC">
          <div className="InjectLayout-sc-1i43xsx-0 hWukFy snackbar-list__items tw-transition-group"></div>
        </div>
      </div>
    </div>
  )
}
export default StreamerPage;