import PropTypes from "prop-types";
import "./PageTransition.css";
import {CSSTransition} from "react-transition-group"
export default function PageTransition({children,in: inProp}) {
  return (
    <>
    <CSSTransition
    in={inProp}
    timeout={200}
    classNames="pages"
    unmountOnExit
    >
    <div>{children}</div>
    </CSSTransition>
    </>
  )
}


PageTransition.propTypes = {
    children: PropTypes.node.isRequired,
    in: PropTypes.bool

}