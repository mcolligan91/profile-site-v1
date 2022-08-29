import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import TopNav from '../TopNav/TopNav';
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
		const {isMobile} = this.state;

		let contentContainers = [
			{
				content: <Intro isMobile={isMobile} scrollToContent={this.scrollToContent}/>, 
				contentId: null, 
				contentClass: null
			},
			{
				content: <Skills isMobile={isMobile} />,
				contentId: 'skills-content', 
				contentClass: 'skills-row reduced-height-row'
			},
			{
				content: <Experience isMobile={isMobile} />, 
				contentId: 'experience-content', 
				contentClass: 'experience-row'
			},
			{
				content: <Education isMobile={isMobile} />,
				contentId: 'education-content', 
				contentClass: 'education-row reduced-height-row'
			}
		];

        return (
			<div id='app'>
				<TopNav isMobile={isMobile} scrollToTop={this.scrollToTop} scrollToContent={this.scrollToContent} />
				<Grid>
					{contentContainers.map((container, i) => {
						const {content, contentId, contentClass} = container;
						return (
							<Grid.Row key={i} id={contentId} className={contentClass ? `sub-row ${contentClass}` : null} centered>
								{content}
							</Grid.Row>
						)
					})}
				</Grid>
				<BottomNav scrollToTop={this.scrollToTop} />
			</div>
        );
    }
}

export default MainContainer;