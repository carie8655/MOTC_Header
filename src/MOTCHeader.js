import "primeflex/primeflex.css";
import "primereact/resources/themes/nova/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { TieredMenu } from "primereact/tieredmenu";
import { Sidebar } from "primereact/sidebar";
import { Menu } from "primereact/menu";
import "./index.css";

class MOTCHeader extends Component {
  UserMenuRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = { userVisible: false };
  }

  renderUserMenu = () => {
    const { isMobile, menu } = this.props;

    if (isMobile)
      return <Menu style={{ border: 0, width: "100%" }} model={menu} />;
    return <TieredMenu model={menu} popup ref={this.UserMenuRef} />;
  };

  renderLogoText = () => {
    const { title, logo, subTitle, onClickLogo } = this.props;
    return (
      <div id="logo-text" onClick={onClickLogo}>
        <div className="logo">
          <img src={logo} alt={title} />
        </div>
        <div className="title">
          <span className="tw">{title}</span>
          <br />
          <span className="en">{subTitle}</span>
        </div>
      </div>
    );
  };

  render() {
    const { onClickMenu, username } = this.props;
    const { userVisible } = this.state;

    if (isMobile) {
      return (
        <div id="MOTCHeader-mobile">
          <div className="p-grid w-100">
            <div className="p-col-2" style={{ padding: 0 }} />
            <div className="p-col-8" onClick={() => onGoToRoute("/")}>
              {this.renderLogoText()}
            </div>
            <div className="p-col-2" style={{ padding: 0 }}>
              <div className="menu-bar">
                <i
                  className="pi pi-user"
                  onClick={() => this.setState({ userVisible: true })}
                />
              </div>
            </div>
          </div>
          <Sidebar visible={userVisible} position="right" onHide={onHideUser}>
            {this.renderUserMenu()}
          </Sidebar>
        </div>
      );
    }

    return (
      <div id="MOTCHeader">
        <div className="left-block">
          <div onClick={() => onClickMenu("/")}>{this.renderLogoText()}</div>
        </div>
        <div>
          <div
            className="action"
            onClick={(e) => this.UserMenuRef.current.toggle(e)}
            aria-haspopup
            aria-controls="overlay_tmenu"
          >
            <span className="mr-6">{username}</span>
            <i className="pi pi-chevron-down" />
          </div>
          {this.renderUserMenu()}
        </div>
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
  username: "",
  onClickLogo: PropTypes.func,
  onClickMenu: PropTypes.func,
};

MOTCHeader.defaultProps = {
  title: "",
  subTitle: "",
  isMobile: false,
  logo: null,
  menu: [],
  username: "",
  onClickLogo: () => {},
  onClickMenu: () => {},
};

export default MOTCHeader;
