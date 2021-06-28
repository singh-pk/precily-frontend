import { connect } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';

import ResizingDiv from '../../components/ResizingDiv/ResizingDiv';
import WithImageContainer from '../../components/WithImageContainer/WithImageContainer';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { selectIsFetchingById } from '../../redux/containerData/containerDataSelector';
import { getTotalCount } from '../../services/services';

import homepageStyles from './Homepage.module.scss';

const Homepage = ({ isFetchingById }) => {
  let ResizingDivWithImageContainer1 = WithSpinner(
    WithImageContainer(ResizingDiv)
  );

  let ResizingDivWithImageContainer2 = WithSpinner(
    WithImageContainer(ResizingDiv)
  );
  let ResizingDivWithImageContainer3 = WithSpinner(
    WithImageContainer(ResizingDiv)
  );

  const handleClick = async () => {
    let res = await getTotalCount();
    alert(`Total Api Count :  ${res.data.count}`);
  };

  return (
    <div className={homepageStyles.homepage}>
      <div>
        <ResizingDivWithImageContainer1
          isLoading={isFetchingById === 0}
          bottom
          right
          containerId={0}
        />

        <ResizingDivWithImageContainer2
          isLoading={isFetchingById === 1}
          bottom
          style={{ flex: 1 }}
          containerId={1}
        />
      </div>

      <ResizingDivWithImageContainer3
        isLoading={isFetchingById === 2}
        minWidth='100%'
        style={{ flex: 1 }}
        containerId={2}
      />

      <CustomButton btnFixed handleClick={handleClick}>
        Get Api Call Count
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  isFetchingById: selectIsFetchingById(state),
});

export default connect(mapStateToProps)(Homepage);
