'use client'
import React, {useEffect, useRef, useState} from "react";
import ChannelInfoContent from "@/components/ChannelInfoContent";
import OutLink from "@/components/OutLink";
import BroadCastingNotiButton from "@/components/BroadCastingNotiButton";
import SettingButton from "@/components/SettingButton";
import VideoPlayer from "@/components/VideoPlayer";

const StreamerPage: React.FC = () => {
  const [online, setOnline] = useState(true);
  const persistentPlayerContent = document.querySelector('[data-target="persistent-player-content"]');
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

  useEffect(() => {
    const updateStyles = () => {
      const element = videoWrapperRef.current;
      if (element) {
        const {top, left, width, height} = element.getBoundingClientRect();

        // 새로운 스타일 계산
        const newStyles = {
          ...videoWrapperStyles,
          top: `${top - 48}px`,
          left: `${left - 48}px`,
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
    <div>
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
                              className="Layout-sc-1xcs6mc-0 hzlEAx channel-page__video-player channel-page__video-player--home-carousel"
                              ref={videoWrapperRef}>
                              <div id='1234' className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
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
          <div className="channel-root__info channel-root__info--offline channel-root__info--home hMuFhl" style={{
            transition: 'transform 500ms ease 0ms',
            opacity: '1',
          }}>
            <ChannelInfoContent/>
          </div>
        </div>
        <div className="Layout-sc-1xcs6mc-0 cLfLtl"></div>
      </div>
      <VideoPlayer videoWrapperStyles={videoWrapperStyles}/>
    </div>

  )
}
export default StreamerPage;