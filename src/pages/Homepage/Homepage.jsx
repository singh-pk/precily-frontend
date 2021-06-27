import { useState } from 'react';
import ResizingDiv from '../../components/ResizingDiv/ResizingDiv';
import WithInputRef from '../../components/WithInputRef/WithInputRef';

import homepageStyles from './Homepage.module.scss';

const Homepage = () => {
  const [height, setHeight] = useState(250);
  let ResizingDivWithInputRef = WithInputRef(ResizingDiv);

  return (
    <div className={homepageStyles.homepage}>
      <div>
        <ResizingDivWithInputRef bottom right setHeight={setHeight}>
          Hi
        </ResizingDivWithInputRef>

        <ResizingDiv
          bottom
          height={height}
          style={{ flex: 1 }}
          setHeight={setHeight}
        >
          Hi
        </ResizingDiv>
      </div>

      <div className={homepageStyles.lastContainer}>Hi</div>
    </div>
  );
};

export default Homepage;
