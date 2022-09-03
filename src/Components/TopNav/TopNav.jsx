import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import './TopNav.scss';

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invertNav: true
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ invertNav: window.pageYOffset === 0 ? true : false });
    }

    downloadResume = () => {
		window.open(require('./Colligan_Resume.pdf'));
	}

    setMenuClass = () => {
        const {invertNav} = this.state,
            {isMobile} = this.props;

        if (isMobile) {
            return invertNav ? 'top-nav top-nav-mobile' : 'top-nav floating-nav top-nav-mobile';
        } else {
            return invertNav ? 'top-nav' : 'top-nav floating-nav';
        }
    }

    render() {
        const {invertNav} = this.state,
            {isInverted, isMobile, scrollToTop, scrollToContent} = this.props;

        const mainLogoContainer = (
            <div className='main-logo-container'>
                <div className={`main-logo ${isInverted ? 'main-logo-inverted' : ''}`} onClick={scrollToTop}>MC</div>
            </div>
        );

        let menuItems = [
            {name: !isMobile ? 'Technical Skills' : 'Skills', id: 'skills-content', dur: 1000 },
            {name: 'Experience', id: 'experience-content', dur: 1100 },
            {name: 'Education', id: 'education-content', dur: 1210 }
        ];

        const menuItemContainer = (
            <Menu.Menu className='menu-item-container' position='left'>
                {menuItems.map((item, i) => {
                    const {name, id, dur} = item;
                    return (
                        <Fade key={i} top duration={dur}>
                            <Menu.Item className='top-nav-link'>
                                <span className='top-nav-link-text' onClick={() => scrollToContent(id)}>{name}</span>
                            </Menu.Item>
                        </Fade>
                    ) 
                })}
            </Menu.Menu>
        );

        const downloadButtonContainer = !invertNav && (
            <Menu.Menu className='menu-item-container' position='right'>
                <Menu.Item className='download-container'>
                    <Button className='resume-button' content='Resume' color={isInverted ? 'blue' : null} secondary={!isInverted} compact onClick={this.downloadResume} />
                </Menu.Item>
            </Menu.Menu>
        );

        return (
            
                <Menu className={this.setMenuClass()} size='massive' borderless fixed='top' inverted={invertNav}>
                    {mainLogoContainer}
                    {menuItemContainer}
                    {!isMobile && downloadButtonContainer}
                </Menu>
            
        );
    }
}

export default TopNav;