import React from "react";
import PopUp from "reactjs-popup";
import Button from "../Button";
import { connect } from "react-redux";
import * as popUpActions from "../../store/actions/popUpActions";

const CommonPopUp = ({ popup: { open }, closePopUp, children }) => {
  return (
    <PopUp open={open} modal closeOnDocumentClick={false}>
      <div className="popup">
        <div className="popup-content">{children}</div>
      </div>
    </PopUp>
  );
};

const mapStateToProps = (state) => {
  return { popup: state.popup };
};

export default connect(mapStateToProps, { ...popUpActions })(CommonPopUp);
