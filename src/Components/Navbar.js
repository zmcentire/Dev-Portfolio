import React, {useState} from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const NavBar = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Navbar color="dark" expand="md">
                <NavbarBrand href="/">Zach McEntire</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/about">About Me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/skills">Skills</NavLink>
                    </NavItem>
                    <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Contact
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="https://drive.google.com/file/d/1o6YLTJYDMKCfSPTZ4n80DPPWaRRJbY2i/view">Resume</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://github.com/zmcentire">Github</NavLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NavLink href="https://www.linkedin.com/in/zachmcentire/">LinkedIn</NavLink>
                            </DropdownItem>  
                        </DropdownMenu>
                    </Dropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar