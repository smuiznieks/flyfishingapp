import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navigation.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">The Real Fly Fishing App</NavbarBrand>
          <NavbarToggler onClick={this.toggle}><i className="fas fa-bars"></i></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://www.clevelandmetroparks.com/parks/learn/blogs/fishing-report">Cleveland Metroparks Fishing Report</NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="https://www.clevelandmetroparks.com/parks/learn/blogs/fishing-report" target="blank">Cleveland Metroparks Fishing Report</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="http://www.orvis.com/fishing_report.aspx?locationid=7365" target="blank">Orvis Fishing Report</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://waterdata.usgs.gov/oh/nwis/uv?site_no=04201500" target="blank">USGS River Report</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="http://therockyriver.com/home/river-report/" target="blank">30 | 10 River Report</a>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
