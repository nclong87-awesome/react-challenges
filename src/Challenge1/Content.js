import PropTypes from 'prop-types';
import RenderCounter from '../commons/RenderCounter';

const Content = (props) => {
  return (
    <div style={props.style} className="content">
      <h4>{props.name}</h4>
      <RenderCounter />
    </div>
  )
}

Content.propTypes = {
  style: PropTypes.instanceOf(Object),
  name: PropTypes.string,
}

export default Content;
