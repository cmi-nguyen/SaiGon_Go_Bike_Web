import React from "react";
import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Button,
  Input,
} from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" dark color="primary">
        <NavbarBrand href="/">SGB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Trang Chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gioi-thieu">Giới Thiệu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dat-chuyen" >Đặt Chuyến</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/lien-he">Liên Hệ</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Hướng Dẫn
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Đặt Chuyến Xe</DropdownItem>
                <DropdownItem>Cách Thức Hoạt Động</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>X</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav>
            <NavItem>
              <Button color="secondary">Đăng Nhập</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
