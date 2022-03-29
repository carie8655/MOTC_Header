import "primeflex/primeflex.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { TieredMenu } from "primereact/tieredmenu";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { faDisplay, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./index.css";

class MOTCHeader extends Component {
  UserMenuRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = { visible: false, menuVisible: false };
  }

  renderUserMenu = () => {
    const { isMobile, menu } = this.props;

    if (isMobile)
      return <Menu style={{ border: 0, width: "100%" }} model={menu} />;
    return <TieredMenu model={menu} popup ref={this.UserMenuRef} />;
  };

  renderLogoText = () => {
    const { title, logo, subTitle } = this.props;
    return (
      <React.Fragment>
        <div className="logo">
          <img src={logo} alt={title} />
        </div>
        <div className="title">
          <span className="tw">{title}</span>
          <br />
          <span className="en">{subTitle}</span>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { onClickMenu, username, isMobile, menu, siderChild } = this.props;
    const { visible, menuVisible } = this.state;

    const onClickUser = (bool) => this.setState({ visible: bool });
    const onClickMenubar = (bool) => this.setState({ menuVisible: bool });

    if (isMobile) {
      return (
        <div id="MOTCHeader-mobile">
          <div className="grid w-100">
            <div className="col-2" style={{ padding: 0 }}>
              <div className="menu-bar">
                <i
                  className="pi pi-bars"
                  onClick={() => onClickMenubar(true)}
                />
              </div>
            </div>
            <div className="col-8" onClick={() => onGoToRoute("/")}>
              {this.renderLogoText()}
            </div>
            {username !== "" && (
              <div className="col-2" style={{ padding: 0 }}>
                <div className="menu-bar">
                  <i className="pi pi-user" onClick={() => onClickUser(true)} />
                </div>
              </div>
            )}
          </div>
          <Sidebar
            position="right"
            visible={visible}
            onHide={() => onClickUser(false)}
          >
            {menu.length > 0 && this.renderUserMenu()}
          </Sidebar>
          <Sidebar
            className="header-drawer"
            position="left"
            visible={menuVisible}
            onHide={() => onClickMenubar(false)}
            showCloseIcon={false}
          >
            {siderChild ? siderChild : null}
          </Sidebar>
        </div>
      );
    }

    return (
      <div id="MOTCHeader">
        <div className="left-block" onClick={() => onClickMenu("/")}>
          {this.renderLogoText()}
        </div>
        <div className="right-block">
          <div className="action">
            <Icon icon={faDisplay} />
            <span>設備監控</span>
          </div>
          {username !== "" && (
            <div
              className="action"
              onClick={(e) => this.UserMenuRef.current.toggle(e)}
              aria-haspopup
              aria-controls="overlay_tmenu"
            >
              <Avatar label="總" className="avatar" shape="circle" />
              <Icon icon={faCaretDown} />
            </div>
          )}
        </div>
        {menu.length > 0 && this.renderUserMenu()}
      </div>
    );
  }
}

MOTCHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  isMobile: PropTypes.bool,
  logo: PropTypes.any,
  menu: PropTypes.array,
  username: PropTypes.string,
  // onClickLogo: PropTypes.func,
  onClickMenu: PropTypes.func,
};

MOTCHeader.defaultProps = {
  title: "",
  subTitle: "",
  isMobile: false,
  logo: null,
  menu: [],
  username: "",
  // onClickLogo: () => {},
  onClickMenu: () => {},
};

export default MOTCHeader;
