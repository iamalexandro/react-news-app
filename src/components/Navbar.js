import React from 'react';

import Icon from 'emerald-ui/lib/Icon';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Avatar from 'emerald-ui/lib/Avatar';
import Nav from 'emerald-ui/lib/Nav';
import Navbar from 'emerald-ui/lib/Navbar';

import './styles/Navbar/Navbar.css';

import newsLogo from '../images/logo-1.svg';

class OwnNavbar extends React.Component {
	state = {
		sectionSelected: 4,
		dropDownValue: 'Technology',
	};

	handleDropdown(selectedKey) {
		//switch case api consume
		switch (selectedKey) {
			case '1':
				this.setState({
					sectionSelected: 1,
				});
				break;
			case '2':
				this.setState({
					sectionSelected: 2,
				});
				break;
			case '3':
				this.setState({
					sectionSelected: 3,
				});
				break;
			case '4':
				this.setState({
					sectionSelected: 4,
				});
				break;
			case '5':
				this.setState({
					sectionSelected: 5,
				});
				break;
			default:
		}
	}
	changeValue(text) {
		this.setState({ dropDownValue: text });
	}

	render() {
		const state = this.state;
		const { handleChange } = this.props;
		return (
			<Navbar breakAt="lg">
				<Navbar.Brand>
					<a href="#foo">
						<img src={newsLogo} alt="" />
					</a>
				</Navbar.Brand>
				<Nav grow collapsible>
					<DropdownButton
						id="dd1"
						onSelect={selectedKey => {
							this.handleDropdown(selectedKey);
						}}
						onChange={handleChange(state)}
						title={this.state.dropDownValue}
					>
						<DropdownItem
							eventKey="1"
							onClick={e =>
								this.changeValue(
									document.getElementById('dropdown-1').innerText
								)
							}
						>
							<Icon name="business" style={{ fontSize: '24px' }} />
							<span id="dropdown-1">Business</span>
						</DropdownItem>
						<DropdownItem
							eventKey="2"
							onClick={e =>
								this.changeValue(
									document.getElementById('dropdown-2').innerText
								)
							}
						>
							<Icon name="theater_comedy" style={{ fontSize: '24px' }} />
							<span id="dropdown-2">Enterteinment</span>
						</DropdownItem>
						<DropdownItem
							eventKey="3"
							onClick={e =>
								this.changeValue(
									document.getElementById('dropdown-3').innerText
								)
							}
						>
							<Icon name="attach_money" style={{ fontSize: '24px' }} />
							<span id="dropdown-3">Economics</span>
						</DropdownItem>
						<DropdownItem
							eventKey="4"
							onClick={e =>
								this.changeValue(
									document.getElementById('dropdown-4').innerText
								)
							}
						>
							<Icon name="monitor" style={{ fontSize: '24px' }} />
							<span id="dropdown-4">Technology</span>
						</DropdownItem>
						<DropdownItem
							eventKey="5"
							onClick={e =>
								this.changeValue(
									document.getElementById('dropdown-5').innerText
								)
							}
						>
							<Icon name="lightbulb" style={{ fontSize: '24px' }} />
							<span id="dropdown-5">Innovation</span>
						</DropdownItem>
					</DropdownButton>
					<a href="#foo">Editorial</a>
					<a href="#foo">Contact Us</a>
				</Nav>
				<Nav collapsible>
					<DropdownButton
						noCaret
						fromRight
						id="dd2"
						title={<Avatar title="JS" />}
					>
						<DropdownItem eventKey="1">Action</DropdownItem>
						<DropdownItem eventKey="2">Another action</DropdownItem>
						<DropdownItem eventKey="3" active>
							Active Item
						</DropdownItem>
						<DropdownItem separator />
						<DropdownItem eventKey="4">Separated link</DropdownItem>
					</DropdownButton>
				</Nav>
			</Navbar>
		);
	}
}

export default OwnNavbar;
