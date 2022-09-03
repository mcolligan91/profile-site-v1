import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';

import Intro from '../Intro/Intro';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import BottomNav from '../BottomNav/BottomNav';

import './MainContainer.scss';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
			isInverted: false,
			isMobile: null
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);    
		window.addEventListener('resize', this.resize);
		this.resize();
	}

	resize = () => {
		const {isMobile} = this.state;
		let currentIsMobileState = (window.innerWidth <= 795);
		if (currentIsMobileState !== isMobile) {
			this.setState({ isMobile: currentIsMobileState });
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	scrollToContent = (elemId) => {
		const element = document.getElementById(elemId);
		element.scrollIntoView({behavior: 'smooth'});
	}

	scrollToTop = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}

    render() {
		const {isInverted, isMobile} = this.state;

		let contentContainers = [
			{
				content: <Intro isInverted={isInverted} isMobile={isMobile} scrollToContent={this.scrollToContent} scrollToTop={this.scrollToTop} />, 
				contentId: null, 
				contentClass: 'intro-main-container'
			},
			{
				content: <Skills isInverted={isInverted} isMobile={isMobile} />,
				contentId: 'skills-content', 
				contentClass: 'skills-row'
			},
			{
				content: <Experience isMobile={isMobile} />, 
				contentId: 'experience-content', 
				contentClass: 'experience-row'
			},
			{
				content: <Education isMobile={isMobile} />,
				contentId: 'education-content', 
				contentClass: 'education-row'
			}
		];

        return (
			<div id='app'>
				<Grid>
					{contentContainers.map((container, i) => {
						const {content, contentId, contentClass} = container;
						let c = contentClass === 'intro-main-container' ? contentClass : `sub-row ${contentClass}`;
						return (
							<Grid.Row key={i} id={contentId} className={`${c}${isInverted ? '-inverted' : ''}`} centered>
								{content}
							</Grid.Row>
						)
					})}
				</Grid>
				<BottomNav isInverted={isInverted} scrollToTop={this.scrollToTop} />
				<Checkbox className='color-slider' toggle onClick={() => this.setState({ isInverted: !this.state.isInverted })} />
			</div>
        );
    }
}

export default MainContainer;