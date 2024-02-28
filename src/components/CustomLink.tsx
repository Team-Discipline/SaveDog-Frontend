import React, {ReactNode} from 'react';

interface CustomLinkProps {
  size: string;
  status: string;
  href: string;
  children?: ReactNode
  // 다른 사용자 지정 속성도 여기에 추가할 수 있습니다.
}

const CustomLink: React.FC<CustomLinkProps> = ({ size, status, href, children }) => {
  return (
    <a className={`ScHalo-sc-18imt3g-0 ipRZmL tw-halo`} href={`/pages/${href}`} style={{display: 'block', width: `${size}px`, height: `${size}px`}}>
      {/* 여기에서 size와 status를 사용하여 필요한 로직을 추가할 수 있습니다. */}
      <div className="ScAspectRatio-sc-18km980-1 doeqbO tw-aspect">
        <div className="ScAspectSpacer-sc-18km980-0 bIDIFh"></div>
        <div className="ScAvatar-sc-144b42z-0 dFBjte tw-avatar">
          <img className="InjectLayout-sc-1i43xsx-0 cXFDOs tw-image tw-image-avatar"
               alt="괴물쥐123"
               src="https://static-cdn.jtvnw.net/jtv_user_pictures/59b10cc7-772e-48a9-92df-066e9a35862b-profile_image-70x70.jpg"/>
          {children /* 자식 요소를 이곳에 렌더링합니다. */}
        </div>
      </div>
    </a>
  );
};

export default CustomLink;
