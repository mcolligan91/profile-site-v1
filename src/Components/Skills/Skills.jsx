import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import { Flip } from 'react-reveal';

import './Skills.scss';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    createSkillsIconList = () => {		
		let cols = [
			{icon: 'javascript-plain', text: 'JavaScript'},
			{icon: 'html5-plain', text: 'HTML5'},
			{icon: 'css3-plain', text: 'CSS3'},
			{icon: 'sass-original', text: 'Sass'},
			{icon: 'python-plain', text: 'Python'},
			{icon: 'csharp-plain', text: 'C#'},
			{icon: 'react-original', text: 'React'},
			{icon: 'jquery-plain', text: 'jQuery'},
			{icon: 'bootstrap-plain', text: 'Bootstrap'},
			{icon: 'knockout-plain-wordmark', text: 'Knockout'},
			{icon: 'flask-original', text: 'Flask'},
			{icon: 'dot-net-plain', text: '.NET'},
			{icon: 'nodejs-plain', text: 'Node.js'},
			{icon: 'selenium-original', text: 'Selenium'},
			{icon: 'pytest-plain', text: 'Pytest'},
			{icon: 'visualstudio-plain', text: 'Visual Studio'},
			{icon: 'jira-plain', text: 'Jira'},
			{icon: 'microsoftsqlserver-plain', text: 'MS SQL Server'},
			{icon: 'git-plain', text: 'Git'},
			{icon: 'bitbucket-original', text: 'Bitbucket'},
			{icon: 'github-original', text: 'GitHub'},
			{icon: 'sourcetree-original', text: 'Sourcetree'},
			{icon: 'xd-plain', text: 'Adobe XD'},
			{icon: 'photoshop-plain', text: 'Adobe Photoshop'}
		];

		let group = 0;
		for (let i = 0; i < cols.length; i++) {
			cols[i]['group'] = group;
			group++;
			group = group === 3 ? 0 : group;
		}
		return cols;
	}

    render() {
        const {isMobile} = this.props;

        const skillsSubHeader = (
            <Header as='h2' className='technical-skills-subheader' content='Languages, Frameworks & Libraries, Other Software Proficiencies' />
        );

        let skillsColumns = this.createSkillsIconList();

		const skillsIconGridContent = (
			<Grid className='skills-icons-grid'>
				{skillsColumns.map((col, i) => {
					const {group, icon, text} = col;
					let iconClass = `devicon-${icon}`;
					return (
						<Grid.Column key={i} className={`skills-icon-${group}`} computer={2} tablet={2} mobile={4}>
							<Flip top duration={!isMobile ? 1750 : 1000}>
								<Grid.Row>
									<i className={`${iconClass} skills-icon`}></i>
								</Grid.Row>
								<Grid.Row className='icon-label-row'>
									<span>{text}</span>
								</Grid.Row>
							</Flip>
						</Grid.Column>
					)
				})}
			</Grid>
		);

        let skillsGridColumns = [
            {colClass: null, content: skillsSubHeader},
            {colClass: 'skills-icons-container', content: skillsIconGridContent}
        ];

        return (
			<Container textAlign='center'>
				<Header as='h1' className='technical-skills-header'>Technical Skills</Header>
				<Grid className='skills-container' verticalAlign='middle' textAlign='center'>
                    {skillsGridColumns.map((col, i) => {
                        const {colClass, content} = col;
                        return (
                            <Grid.Column key={i} className={colClass} width={16}>
                                {content}
                            </Grid.Column>
                        )
                    })}
				</Grid>
			</Container>
        );
    }
}

export default Skills;