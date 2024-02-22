"use client"

import React, {useEffect, useState} from 'react'
import StreamerProfileButton from "@/components/StreamerProfileButton";

export const SideBar = ({serverSideData}: any) => {
    const [clientSideData, setClientSideData] = useState(null);
    const [sidebarWidth, setSidebarWidth] = useState(56);
    const [windowWidth, setWindowWidth] = useState(0);
    const [extend, setExtend] = useState(false)

    const handleExtend = () => {
      console.log("handle", extend);
      setExtend(!extend);
      setSidebarWidth(!extend ? 15 : 4);
      // // //extend == false: 사이드바 닫힌 상태 & window 크기가 1200이상일때 확장가능
      // if (!extend) {
      //   setSidebarWidth(14);
      // } else {
      //   setSidebarWidth(3);
      // }
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // 사이드바 테스트용 더미데이터
    const streamerInfo = [
      {
        streamerId: 'aba4647',
        streamerName: '랄로',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/e85f1e19-e793-4a07-bbc5-5135981dc4f8-profile_image-70x70.png",
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '2400'
      },
      {
        streamerId: 'airikanna_stellive',
        streamerName: '아이리_칸나',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/57ee5d17-c96e-4046-bc00-1eab91bb9466-profile_image-70x70.png",
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '1063'
      },
      {
        streamerId: 'rkdwl12',
        streamerName:'강지',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/fe75f0b7-a0a2-4dc0-bde1-edcb7a4fd32e-profile_image-70x70.png",
        game: 'Just Chatting',
        isLive: '방송 중',
        viewers: '684',
      },
      {
        streamerId: 'handongsuk',
        streamerName: '한동숙',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/c5a2baa2-74ed-4b72-b047-8326572c9bfa-profile_image-70x70.png",
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '2172',
      },
      {
        streamerId: 'tmxk319',
        streamerName: '괴물쥐123',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/59b10cc7-772e-48a9-92df-066e9a35862b-profile_image-70x70.jpg",
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '3368',
      },
      {
        streamerId: 'arahashitabi_stellive',
        streamerName: '아라하시_타비',
        profileImage: "https://static-cdn.jtvnw.net/jtv_user_pictures/1489b16c-5e9e-4c95-8339-f4abd273f8a8-profile_image-70x70.png",
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '800',
      },
      {
        streamerId: 'mlchoins',
        streamerName: '명훈',
        profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/571589a1-c1bd-4396-9177-8be8bfd1f646-profile_image-70x70.png',
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '334',
      },
      {
        streamerId: 'xkwhd',
        streamerName: '피닉스박1',
        profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/00d773d6-0c5c-443a-947a-f3d765b95b4e-profile_image-70x70.jpg',
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '1,045',
      },
      {
        streamerId: 'ayatsunoyuni_stellive',
        streamerName: '아야츠노_유니',
        profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bcd45a9c-d209-42d3-aa59-c546b6155891-profile_image-70x70.png',
        game: 'Just Chatting',
        isLive: '방송 중',
        viewers: '580',
      },
      {
        streamerId: 'shirayukihina_stellive',
        streamerName: '시라유키_히나',
        profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/2c7b236c-2586-48dc-ba29-18e966ab2a48-profile_image-70x70.png',
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '333',
      },
      {
        streamerId: 'nenekomashiro_stellive',
        streamerName: '네네코_마시로',
        profileImage: 'https://static-cdn.jtvnw.net/jtv_user_pictures/99903ff6-40c3-489c-b449-f8e338c716da-profile_image-70x70.png',
        game: '마인크래프트',
        isLive: '방송 중',
        viewers: '573',
      },
    ]
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('');
          const data = await res.json();
          setClientSideData(data);
        };

        setSidebarWidth(window.innerWidth >= 1200 ? (extend ? 15 : 3) : 3);

        fetchData().then(r => console.log(r));
        // 화면 크기에 따른 사이드바 크기 조정

        if (typeof window != 'undefined') {
          window.addEventListener('resize', handleResize);

          return () => {
            window.removeEventListener('resize', handleResize);
          }
        }
      }, [extend]
    )

    return (
      <div className={'bg-gray-200'} style={{width: `${sidebarWidth}rem`}}>
        <div className='bg-gray-200' style={{position: 'relative'}}>
          <div>
            <div
              className={`Layout-sc-1xcs6mc-0 collapse-toggle ${ typeof window !== 'undefined' && window.innerWidth < 1200 ? 'hidden' : extend ? 'gazthU' : 'kpdiXD'}`}>
              <div className="inline-flex kBtJDm">
                <button onClick={handleExtend} className="ScCoreButton-sc-ocjdkq-0 bTXTVH ScButtonIcon-sc-9yap0r-0 eSFFfM"
                        aria-label="측면 탐색 확장"
                        data-a-target="side-nav-arrow">
                  <div className="ButtonIconFigure-sc-1emm8lf-0 fjwcvR" style={{width: '1.25rem', height: '1.25rem'}}>
                    <div className="ScIconLayout-sc-1q25cff-0 cASLMj">
                      <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
                        <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>

                        <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                             role="presentation" aria-hidden="true" focusable="false"
                             className={`ScIconSVG-sc-1q25cff-1 jpczqG" ${extend && windowWidth>=1200 ? 'flip-horizontal' : ''}`}>
                          <g>
                            <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="side-bar-contents">
              <nav className="Layout-sc-1xcs6mc-0 skip-to-target" id="side-nav" aria-label="왼쪽 내비게이션" aria-hidden="false"
                   tabIndex={0}>
                <div className="Layout-sc-1xcs6mc-0 jxGBqp">
                  <div className="Layout-sc-1xcs6mc-0">
                    <div className="Layout-sc-1xcs6mc-0">
                      <div aria-label="추천 채널" className="Layout-sc-1xcs6mc-0 dcyYPL side-nav-section" role="group">
                        {extend && windowWidth > 1200 ? <div className='m-2 pt-2 font-semibold text-xs'><h2>추천채널</h2></div> :
                          <div className="InjectLayout-sc-1i43xsx-0 kBtJDm">
                            <div className="Layout-sc-1xcs6mc-0 kYEeAt side-nav-header"
                                 data-a-target="side-nav-header-collapsed">
                              <div className="ScFigure-sc-wkgzod-0 caxXaW tw-svg">
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                  <path fillRule="evenodd"
                                        d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z"
                                        clipRule="evenodd"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        }
                        <div className="relative InjectLayout-sc-1i43xsx-0 hWukFy tw-transition-group">
                          {streamerInfo.map((info) => (
                            <StreamerProfileButton key={info.streamerId} info={info} collapsed={extend}/>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="side-info-container">
                      <div id="96711070f35141ed51f373c7a9ba808f"></div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
;

export async function getServerSideProps() {
  const serverSideData = 'Data from Server-Side';

  return {
    props: {serverSideData},
  }
}

export default SideBar;
