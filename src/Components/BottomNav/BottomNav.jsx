import React from 'react';
import { Grid, Icon, List, Header, Container, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import './BottomNav.scss';

const BottomNav = (props) => {
	const {isInverted, scrollToTop} = props;

	const contactIcons = [
		{link: 'https://github.com/mcolligan91', icon: 'devicon-github-original'},
		{link: 'https://www.linkedin.com/in/michael-colligan-189aa196', icon: 'devicon-linkedin-plain'},
	];

	const contactIconList = (
		<>
			<List className='contact-icons-list-container' horizontal size='large'>
				{contactIcons.map((item, i) => {
					const {link, icon} = item;
					return (
						<List.Item key={i} as='a' href={link} target='_blank'>
							<List.Content className='contact-link-content'>
								<i className={`${icon} contact-link`}></i>
							</List.Content>
						</List.Item>
					)
				})}
			</List>
		</>
	);

	const emailLink = (
		<>
			<a href='mailto:mcolligan91@gmail.com'>
				<span className='email-link'>mcolligan91@gmail.com</span>
			</a>
		</>
	);

	let contactLinkRows = [
		{rowClass: 'email-row', content: emailLink},
		{rowClass: 'contact-icons-row', content: contactIconList}
	];

	const contactLinksContent = (
		<Container>
			<Header className='footer-header' as='h3' content='Contact' />
			<Grid textAlign='center'>
				{contactLinkRows.map((row, i) => {
					const {rowClass, content} = row;
					return (
						<Grid.Row key={i} className={rowClass}>
							{content}
						</Grid.Row>
					)
				})}
			</Grid>
		</Container>
	);

	const scrollToTopButton = (
		<Fade bottom>
			<Button circular icon size='huge' color={isInverted ? 'blue' : 'black'} onClick={scrollToTop}>
				<Icon name='arrow up' />
			</Button>
		</Fade>
	);

	let footerGridColumns = [
		{
			content: contactLinksContent, 
			columnClass: null
		},
		{
			content: <div>© 2022 - Michael Colligan</div>, 
			columnClass: 'copyright-text'
		},
		{
			content: scrollToTopButton, 
			columnClass: 'scroll-up-botton-container'
		}
	];

	return (
		<>
			<Grid className={`bottom-nav-container${isInverted ? '-inverted' : ''}`} textAlign='center' stackable>
				{footerGridColumns.map((col, i) => {
					const {content, columnClass} = col;
					return (
						<Grid.Column key={i} className={columnClass} width={16}>
							{content}
						</Grid.Column>
					)
				})}
			</Grid>
		</>
	);
}

export default BottomNav;