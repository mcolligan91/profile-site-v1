import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import { Bounce } from 'react-reveal';

import './Intro.scss';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {isMobile, scrollToContent} = this.props;

        let introHeaders = [
			{ 
				divType: !isMobile ? 'h1' : 'h3', 
				spanClass: 'intro-main-text', 
				text: 'Michael Colligan' 
			},
			{ 
				divType: 'h3', 
				spanClass: 'intro-sub-text', 
				text: 'Full-Stack Software Engineer' 
			},
		];

        return (
			<Container className='intro-container' text textAlign='center'>
				{introHeaders.map((header, i) => {
					const {divType, spanClass, text} = header;
					return (
						<Header key={i} as={divType}>
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
        );
    }
}

export default Intro;