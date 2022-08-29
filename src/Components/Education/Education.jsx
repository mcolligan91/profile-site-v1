import React, { Component } from 'react';
import { Container, Grid, Header, Divider, Segment } from 'semantic-ui-react';
import { Fade } from 'react-reveal';

import './Education.scss';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {isMobile} = this.props;

        let gridColumns = [
            {
                columnProps: {textAlign: isMobile ? 'center' : 'right'}, 
                revealProps: {left: true},
                headerText: [
                    {spanClass: 'sub-header-highlighted college-text', content: 'University of Florida'},
                    {spanClass: null, content: 'Gainesville, FL'},
                    {spanClass: null, content: '2010 - 2015'}
                ]
            },
            {
                columnProps: {textAlign: isMobile ? 'center' : 'left'}, 
                revealProps: {right: true},
                headerText: [
                    {spanClass: 'sub-header-highlighted', content: 'Bachelor of Science in'},
                    {spanClass: 'sub-header-highlighted', content: 'Sustainability and the Built Environment'},
                    {spanClass: 'honors-text', content: 'Summa Cum Laude'}
                ]
            }
        ];

        return (
            <Container textAlign='center'>
				<Header as='h1' className='education-header'>Education</Header>
				<Container className={!isMobile ? 'college-info-container' : null}>
				    <Segment className='invisible-segment'>
					    <Grid textAlign='center' relaxed='very' verticalAlign='middle'>
                            {gridColumns.map((col, i) => {
                                const {columnProps, revealProps, headerText} = col;
                                return (
                                    <Grid.Column key={i} {...columnProps} computer={8} tablet={8} mobile={16}>
                                        <Fade {...revealProps}>
                                            <Header className='header-label' as='h2'>
                                                {headerText.map((row, j) => {
                                                    const {spanClass, content} = row;
                                                    return (
                                                        <div key={j}>
                                                            <span className={spanClass}>{content}</span>
                                                            <br></br>
                                                        </div>
                                                    )
                                                })}
                                            </Header>
                                        </Fade>
                                    </Grid.Column>
                                )
                            })}
					    </Grid>
					    {!isMobile && <Divider vertical />}
					</Segment>
				</Container>
			</Container>
        );
    }
}

export default Education;