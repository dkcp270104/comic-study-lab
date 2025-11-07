import './headingd.css'

function Heading(props) {
  return(
    <div className="heading-container">
      <p className="heading-line1" style = {props.style}>Comics Studies</p>
      <p className="heading-line2" style = {props.style}>Lab@IITJ</p>
    </div>
  );
}

export default Heading;
