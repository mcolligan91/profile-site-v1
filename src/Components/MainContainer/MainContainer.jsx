import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { InView } from 'react-intersection-observer';

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
			isSnapSet: false
		}
    }

    componentDidMount = () => {
		const {resize} = this.props;
		window.addEventListener('resize', resize);
		resize();
		setTimeout(() => {
			this.setState({ isSnapSet: true });
		}, 1000);
	}

	scrollToContent = (elemId) => {
		const element = document.getElementById(elemId);
		element.scrollIntoView({behavior: 'smooth'});
	}

	scrollToTop = () => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}

    render() {
		const {isSnapSet} = this.state,
			{isInverted, isMobile, handleUpdateVisibleContent} = this.props;

		let contentContainers = [
			{
				content: <Intro scrollToContent={this.scrollToContent} scrollToTop={this.scrollToTop} />, 
				contentId: null, 
				contentClass: 'intro-main-container',
				contentName: 'Intro',
				visibilityThreshold: .75
			},
			{
				content: <Skills />,
				contentId: 'skills-content', 
				contentClass: 'skills-row',
				contentName: isMobile ? 'Skills' : 'Technical Skills',
				visibilityThreshold: .25
			},
			{
				content: <Experience />, 
				contentId: 'experience-content', 
				contentClass: 'experience-row',
				contentName: 'Experience',
				visibilityThreshold: .25
			},
			{
				content: <Education />,
				contentId: 'education-content', 
				contentClass: 'education-row',
				contentName: 'Education',
				visibilityThreshold: .25
			}
		];

        return (
			<div id='app'>
				<Grid className='content-rows-container'>
					{contentContainers.map((container, i) => {
						const {content, contentId, contentClass, contentName, visibilityThreshold} = container;
						let c = contentClass === 'intro-main-container' ? contentClass : `sub-row ${contentClass}`;
						return (
							<Grid.Row key={i} id={contentId} className={`${c}${isInverted ? '-inverted' : ''} ${isSnapSet ? 'content-container' : ''}`} centered>
								<InView threshold={visibilityThreshold} onChange={(inView) => inView && handleUpdateVisibleContent(contentName)}>
									{content}									
								</InView>
							</Grid.Row>
						)
					})}
				</Grid>
				<BottomNav isSnapSet={isSnapSet} scrollToTop={this.scrollToTop} />
				<Checkbox className='color-slider' toggle onClick={() => this.props.handleUpdateIsInverted()} />
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInverted: state.IsInvertedReducer.isInverted,
		isMobile: state.IsMobileReducer.isMobile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleUpdateIsInverted: () => {
			dispatch({ type: 'UPDATE_ISINVERTED' })
		},
		resize: () => {
			dispatch({ type: 'UPDATE_ISMOBILE' })
		},
		handleUpdateVisibleContent: (content) => {
			dispatch({ type: 'UPDATE_VISIBLECONTENT', content: content })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);