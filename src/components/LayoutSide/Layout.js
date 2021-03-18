import React from "react";
import OmgLayoutSide from "../../library/OmgLayoutSide";
import imgback from "../../assets/imgback.svg";
import overlay from "../../assets/overlay.png";
import logo from "../../../src/logo.svg";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function ModalExampleCloseIcon() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button>Show Modal</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
const website = {
  name: "website title",
  url: "/",
  h2: "test",
  p: "Edit <code>src/App.js</code> and save to reload.",
  quicklink: "",
  quicklinkt: "",
  qlinktarget: "_blank" /* _self/_blank */,
  modal: <ModalExampleCloseIcon />,
};
const classes = {
  headermain: "omg-sidebar_layout",
  headerin: "inner",
  avatarlink: "image avatar",
  avatarlogo: "",
  h: "text-light",
  p: "text-light",
  quicklink: "text-light App-link",
  footer: "innerfoot",
  sicon: "",
  siconl: "",
  circular: true /* true / false */,
  copyright: "",
  copyrightl: "",
  children:
    "omg-layout_main" /* omg-layout_main_pad omg-layout_main_1280pad omg-layout_main_736pad */,
  menu: "w-100 m-0 ",
  menuitem: "px-4",
  menulink: "text-light justify-content-center",
  dropdown: "text-light text-right px-0 ",
  dropdownmenu: "w-100 omg-layout_dropitem justify-content-end ",
  droplink: "text-right ",
  dropitem: "",
};
/* 3108; */
const slinks = [
  {
    icon: "facebook",
    url: "/",
  },
  {
    icon: "instagram",
    url: "/",
  },
  {
    icon: "linkedin",
    url: "/",
  },
  {
    icon: "twitter",
    url: "/",
  },

  {
    icon: "at",
    url: "/",
  },
];

const Layout = ({ children, links }) => {
  return (
    <OmgLayoutSide
      logo={logo}
      website={website}
      children={children}
      overlay={overlay}
      imgback={imgback}
      classes={classes}
      slinks={slinks}
      links={links}
    />
  );
};
export default Layout;
