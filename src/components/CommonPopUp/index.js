import React from "react";
import PopUp from "reactjs-popup";
import { connect } from "react-redux";
import * as popUpActions from "../../store/actions/popUpActions";
import { GrClose } from "react-icons/gr";

const CommonPopUp = ({ popup: { open }, closePopUp, children }) => {
  return (
    <PopUp open={open} modal closeOnDocumentClick={false}>
      <div className="popup">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GrClose onClick={closePopUp} style={{ cursor: "pointer" }} />
        </div>
        <div className="popup-content">{children}</div>
      </div>
    </PopUp>
  );
};

const mapStateToProps = (state) => {
  return { popup: state.popup };
};

export default connect(mapStateToProps, { ...popUpActions })(CommonPopUp);
