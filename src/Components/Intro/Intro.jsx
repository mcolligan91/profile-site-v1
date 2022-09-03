import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { Bounce } from 'react-reveal';

import TopNav from '../TopNav/TopNav';

import './Intro.scss';

const Intro = (props) => {
	const {isInverted, isMobile, scrollToContent, scrollToTop} = props;

	let introHeaders = [
		{ 
			divType: !isMobile ? 'h1' : 'h3', 
			headerClass: null,
			spanClass: 'intro-main-text', 
			text: 'Michael Colligan' 
		},
		{ 
			divType: 'h3', 
			headerClass: 'sub-header-container',
			spanClass: `intro-sub-text${isMobile ? '-mobile' : ''}`, 
			text: 'Full-Stack Software Engineer' 
		},
	];

	return (
		<>
			<TopNav isInverted={isInverted} isMobile={isMobile} scrollToTop={scrollToTop} scrollToContent={scrollToContent} />
			<Container className='intro-container' text textAlign='center'>
				{introHeaders.map((header, i) => {
					const {divType, headerClass, spanClass, text} = header;
					return (
						<Header key={i} as={divType} className={headerClass}>
							<span className={spanClass}>{text}</span>
						</Header>
					);
				})}
				<Bounce bottom duration={1400} delay={500}>
					<Button className='explore-button' circular icon size='huge' inverted type='submit' onClick={() => scrollToContent('skills-content')}>
						<Icon name='arrow down' />
					</Button>
				</Bounce>
			</Container>
		</>
	);
}

export default Intro;