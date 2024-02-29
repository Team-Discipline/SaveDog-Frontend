import React from "react";
import streamerInfo from './SideBar'

interface StreamerInfo {
  streamerId: string;
  streamerName: string;
  profileImage: string;
  game?: string;
  isLive?: string;
  viewers?: string;
}

interface StreamerProfileButtonProps {
  info: StreamerInfo;
  collapsed: boolean;
}

const StreamerProfileButton: React.FC<StreamerProfileButtonProps> = ({info, collapsed}) => {
  return (
    <div>
      {/* collapsed 상태에 따라 다른 레이아웃 렌더링 */}
      {!collapsed ? (
        <div key={info.streamerName} className="ScTransitionBase-sc-hx4quq-0 hGaUsM tw-transition" aria-hidden="false"
             style={{transitionProperty: 'transform, opacity', transitionTimingFunction: 'ease'}}>
          <div>
            <div className="Layout-sc-1xcs6mc-0 cwtKyw side-nav-card" data-test-selector="side-nav-card-collapsed">
              <a className="ScCoreLink-sc-16kq0mq-0 eFqEFL InjectLayout-sc-1i43xsx-0 ejKUaQ side-nav-card tw-link"
                 href={`/${info.streamerId}`}>
                <div className="Layout-sc-1xcs6mc-0 bgXDR side-nav-card__avatar">
                  <div className="ScAvatar-sc-144b42z-0 dmnDPS tw-avatar">
                    <img className="InjectLayout-sc-1i43xsx-0 cXFDOs tw-image tw-image-avatar"
                         alt={`${info.streamerName}`}
                         src={info.profileImage}/>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div key={info.streamerName} className="ScTransitionBase-sc-hx4quq-0 hGaUsM tw-transition" aria-hidden="false"
             style={{transitionProperty: 'transform, opacity', transitionTimingFunction: 'ease'}}>
          <div>
            <div className="Layout-sc-1xcs6mc-0 cwtKyw side-nav-card" data-test-selector="side-nav-card-collapsed">
              <a className="ScCoreLink-sc-16kq0mq-0 eFqEFL InjectLayout-sc-1i43xsx-0 ivecvv side-nav-card__link tw-link"
                 href={`/${info.streamerId}`}>
                <div className="Layout-sc-1xcs6mc-0 bgXDR side-nav-card__avatar">
                  <div className="ScAvatar-sc-144b42z-0 dmnDPS tw-avatar">
                    <img className="InjectLayout-sc-1i43xsx-0 cXFDOs tw-image tw-image-avatar"
                         alt={`${info.streamerName}`}
                         src={info.profileImage}/>
                  </div>
                </div>
                <div className="Layout-sc-1xcs6mc-0 kGmdlm">
                  <div data-a-target="side-nav-card-metadata" className="Layout-sc-1xcs6mc-0 eza-dez">
                    <div className="Layout-sc-1xcs6mc-0 xxjeD side-nav-card__title">
                      <p title={info.streamerName} data-a-target="side-nav-title"
                         className="CoreText-sc-1txzju1-0 fdYGpZ HcPqQ InjectLayout-sc-1i43xsx-0">
                        <span>{info.streamerName}</span>
                      </p>
                    </div>
                    <div className="Layout-sc-1xcs6mc-0 bYeGkU side-nav-card__metadata"
                         data-a-target="side-nav-game-title">
                      <p title={info.game} className="CoreText-sc-1txzju1-0 eUABfN">{info.game}</p>
                    </div>
                  </div>
                  <div className="Layout-sc-1xcs6mc-0 fCKtYt side-nav-card__live-status"
                       data-a-target="side-nav-live-status">
                    {info.isLive && (
                      <div className="Layout-sc-1xcs6mc-0 xxjeD">
                        <div className="loVMKa"></div>
                        <div className="Layout-sc-1xcs6mc-0 jOVwMQ">
                          <span aria-hidden="true" className="CoreText-sc-1txzju1-0 gWcDEo">{info.viewers}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default StreamerProfileButton;