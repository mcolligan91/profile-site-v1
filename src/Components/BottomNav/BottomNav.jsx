import React, { Component } from 'react';
import { Grid, Icon, List, Header, Container, Button } from 'semantic-ui-react';
import Fade from 'react-reveal/Fade';

import './BottomNav.scss';

class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

    render() {
		const {scrollToTop} = this.props;

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

		const contactLinksContent = (
			<Container>
				<Header as='h3' content='Contact' />
				<Grid textAlign='center'>
					<Grid.Row className='email-row'>
						<a href='mailto:mcolligan91@gmail.com'>
							<span className='email-link'>mcolligan91@gmail.com</span>
						</a>
					</Grid.Row>
					<Grid.Row className='contact-icons-row'>
						{contactIconList}
					</Grid.Row>
				</Grid>
			</Container>
		);

		const scrollToTopButton = (
			<Fade bottom>
				<Button circular icon size='huge' color='black' onClick={scrollToTop}>
					<Icon name='arrow up' />
				</Button>
			</Fade>
		);

		const footerGridColumns = [
			{
				content: contactLinksContent, 
				columnClass: null
			},
			{
				content: <div>© 2022 - Michael Colligan</div>, 
				columnClass: null
			},
			{
				content: scrollToTopButton, 
				columnClass: 'scroll-up-botton-container'
			}
		];

        return (
			<>
				<Grid className='bottom-nav-container' textAlign='center' stackable>
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
}

export default BottomNav;