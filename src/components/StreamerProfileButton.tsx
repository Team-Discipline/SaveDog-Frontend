import React from "react";
import streamerInfo from './SideBar'

interface StreamerInfo {
  streamerName: string;
  profileImage: string;
}
interface StreamerProfileButtonProps {
  info: StreamerInfo;
}

const StreamerProfileButton: React.FC<StreamerProfileButtonProps> = ({info}) => {


  return (
    <div>
        <div key={info.streamerName} className="ScTransitionBase-sc-hx4quq-0 hGaUsM tw-transition" aria-hidden="false"
             style={{transitionProperty: 'transform, opacity', transitionTimingFunction: 'ease'}}>
          <div>
            <div className="Layout-sc-1xcs6mc-0 cwtKyw side-nav-card"
                 data-test-selector="side-nav-card-collapsed"><a
              className="ScCoreLink-sc-16kq0mq-0 eFqEFL InjectLayout-sc-1i43xsx-0 ejKUaQ side-nav-card tw-link"
              href={`/${info.streamerName}`}>
              <div className="Layout-sc-1xcs6mc-0 bgXDR side-nav-card__avatar">
                <div className="ScAvatar-sc-144b42z-0 dmnDPS tw-avatar"><img
                  className="InjectLayout-sc-1i43xsx-0 cXFDOs tw-image tw-image-avatar"
                  alt={`${info.streamerName}`}
                  src={info.profileImage}/>
                </div>
              </div>
            </a></div>
          </div>
        </div>
    </div>
  );
}
export default StreamerProfileButton;