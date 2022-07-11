import PropTypes from 'prop-types';
import RenderCounter from '../commons/RenderCounter';

const Content = (props) => {
  return (
    <div style={props.style} className="content">
      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
      <RenderCounter />
    </div>
  )
}

Content.propTypes = {
  style: PropTypes.instanceOf(Object),
}

export default Content;
