import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';

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
		window.addEventListener('resize', this.resize);
		this.resize();
		setTimeout(() => {
			this.setState({ isSnapSet: true });
		}, 1000);
	}

	resize = () => {
		this.props.resize();
	}

	handleUpdateIsInverted = () => {
		this.props.handleUpdateIsInverted();
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
			{isInverted} = this.props;

		let contentContainers = [
			{
				content: <Intro scrollToContent={this.scrollToContent} scrollToTop={this.scrollToTop} />, 
				contentId: null, 
				contentClass: 'intro-main-container'
			},
			{
				content: <Skills />,
				contentId: 'skills-content', 
				contentClass: 'skills-row'
			},
			{
				content: <Experience />, 
				contentId: 'experience-content', 
				contentClass: 'experience-row'
			},
			{
				content: <Education />,
				contentId: 'education-content', 
				contentClass: 'education-row'
			}
		];

        return (
			<div id='app'>
				<Grid className='content-rows-container'>
					{contentContainers.map((container, i) => {
						const {content, contentId, contentClass} = container;
						let c = contentClass === 'intro-main-container' ? contentClass : `sub-row ${contentClass}`;
						return (
							<Grid.Row key={i} id={contentId} className={`${c}${isInverted ? '-inverted' : ''} ${isSnapSet ? 'content-container' : ''}`} centered>
								{content}
							</Grid.Row>
						)
					})}
				</Grid>
				<BottomNav isSnapSet={isSnapSet} scrollToTop={this.scrollToTop} />
				<Checkbox className='color-slider' toggle onClick={this.handleUpdateIsInverted} />
			</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInverted: state.IsInvertedReducer.isInverted
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleUpdateIsInverted: () => {
			dispatch({ type: 'UPDATE_ISINVERTED' })
		},
		resize: () => {
			dispatch({ type: 'UPDATE_ISMOBILE' })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);