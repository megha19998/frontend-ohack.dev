import React from 'react';
import { TitleContainer, LayoutContainer, ProjectsContainer} from '../../../styles/nonprofit/styles';
import Head from 'next/head';
import { Typography, Grid, Card, CardContent} from '@mui/material';
import LoginOrRegister from '../../LoginOrRegister/LoginOrRegister';

const style = { fontSize: '15px' };


const Mentorship = () => (
    <LayoutContainer key="mentorship" container>
      
  <Head>
      <title>Opportunity Hack - Mentorship Program</title>
      <meta name="description" content="Join Opportunity Hack as a mentor and use your skills to make a difference for nonprofits around the world." />
      <meta name="keywords" content="Opportunity Hack, Hackathon, Mentorship, Nonprofits, Software Engineers, Product Managers, UX Designers, Project Managers" />
      <meta property="og:title" content="Opportunity Hack - Mentorship" />
      <meta property="og:description" content="Join Opportunity Hack as a mentor and use your skills to make a difference for nonprofits around the world." />
      <meta property="og:image" content="https://i.imgur.com/pzcF1aj.jpg" />
      <meta property="og:url" content="https://ohack.dev/about/mentors" />
    </Head>
  
    <TitleContainer container>  
        <Typography variant="h3" component="h1">
        Opportunity Hack Mentorship
        </Typography>
        
        <Typography variant="body1" style={style} paragraph>
        Welcome to Opportunity Hack! As a mentor, you are instrumental to the success of our event. Your skills, knowledge, and experience will shape the outcomes of projects and the experience of our participants. With different domains calling for expertise, we invite Software Engineers, Product Managers, UX Designers, and Project Managers to help make a difference for nonprofits around the world.
        </Typography>
    </TitleContainer>

    <ProjectsContainer style={{marginTop: 10}} >
        <Typography variant="h4" component="h1">
            Seeking Meaningful Impact in Your Career?
        </Typography>
        <Typography variant="body1" paragraph style={style}>
            Are you a professional in the tech industry, but find yourself longing to make a tangible, meaningful difference in the world? Does your daily work leave you yearning for a deeper contribution to society? If this strikes a chord with you, we have an opportunity that might just answer your call.
        </Typography>
        <Typography variant="body1" paragraph style={style}>
            Join us as a mentor at Opportunity Hack. Use your skills to guide and support teams dedicated to creating software solutions for nonprofits. Your expertise could be the catalyst that transforms a project from a mere concept to a life-changing reality, impacting lives worldwide.
        </Typography>
        <Typography variant="body1" paragraph style={style}>
            As a mentor, you provide invaluable service to the community, aid nonprofits in resolving real-world problems, and make a genuine, lasting difference. This is your opportunity to apply your skills in a fresh context, challenge yourself, and learn and grow along the journey.
        </Typography>
        <Typography variant="h4" gutterBottom>
            Opportunity Hack: More Than Just Coding
        </Typography>
        <Typography variant="body1" paragraph style={style}>
            At its core, Opportunity Hack is about community. It's about harnessing our collective skills to drive genuine change. As a mentor, you are a cornerstone of this process. You'll bring ideas to life, and in doing so, inspire, motivate, and empower participants by imparting your wisdom and experiences.
        </Typography>
        <Typography variant="body1" paragraph style={style}>
            If you're searching for purpose in your professional life, consider volunteering as an Opportunity Hack mentor. It's not just about what you can teach—it's also about what you can learn, the connections you can forge, and the impact you can make. Together, we can use technology to shape a better world. Are you ready to make a difference?
        </Typography>

        <Typography variant="h4" component="h2">
        The Role of a Mentor
        </Typography>
        <Typography variant="body1" paragraph style={style}>
        As a mentor, you play a vital role in our hackathon. Your primary responsibility is to provide guidance and support to participants as they navigate through technical and strategic challenges. You're not just a sounding board for ideas; you're the beacon that guides teams towards their goals. You provide balance, expertise, and ensure teams can rely on you when they need help the most.
        </Typography>
    
    
    <Typography variant="h4" gutterBottom>Types of Mentors</Typography>
    
    <Grid container spacing={1}>        
        <Grid item xs={12} sm={6}>
        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                General Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                As a general mentor, you help steer the teams in the right direction. You'll leverage your experience and knowledge to help teams narrow down their project scope and assess the feasibility of their ideas. You'll be critical in ensuring projects are unique, viable, and considerate of their target demographic.
            </Typography>
            </CardContent>
        </Card>
        
        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                Product Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                In this role, you'll bridge the gap between the nonprofit's needs and the user experience. Your focus will be on design thinking, project scoping, and customer requirements. You'll help teams to prioritize their work and ensure they keep their vision in alignment with the needs of the customer.
            </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                Project Manager Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                Your organizational skills are a lifeline for teams. You'll help define deliverables, set outcomes, and remove any roadblocks that teams may face. You ensure the teams stay on track and progress smoothly.
            </Typography>
            </CardContent>
        </Card>            
        </Grid>

        <Grid item xs={12} sm={6}>
        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                Presentation Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                Your job will be to guide teams in pitching their ideas effectively. You'll move from one team to another, helping them refine their presentation skills and make the best use of their presentation time. You will ensure that the team's pitch is coherent, succinct, and compelling.
            </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                GitHub Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                As a GitHub mentor, you'll support teams in understanding code commits, solving merge conflicts, and meeting all GitHub-related requirements. You may also need to assist teams with submitting their projects on DevPost.
            </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                Cloud Services Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                Your expertise will help transform ideas from local prototypes into global solutions. You'll support teams in deploying their projects on the cloud, be it Heroku, AWS, or Google Cloud, ensuring their ideas can reach the audience they're intended for.
            </Typography>
            </CardContent>
        </Card>

        <Card>
            <CardContent>
            <Typography variant="h5" component="h3" gutterBottom>
                Software Engineering Mentor
            </Typography>
            <Typography variant="body1" paragraph style={style}>
                In the early stages, you'll guide teams in defining the right technology stack for their projects. As the event progresses, you'll switch gears to troubleshoot NullPointers, solve runtime exceptions, and help resolve UI display issues.
            </Typography>
            </CardContent>
        </Card>
        </Grid>
    </Grid>
    
    
    <Typography variant="h4" component="h2" gutterBottom>
        What It Takes
    </Typography>

    <Typography variant="body1" paragraph style={style}>
        Being a mentor at Opportunity Hack requires patience, empathy, and a knack for breaking down complex concepts into easily digestible bits. It calls for a commitment to help others learn, grow, and the willingness to share your expertise.
    </Typography>

    <Typography variant="body1" paragraph style={style}>
        Remember, being a mentor is not about having all the answers, but about asking the right questions and guiding participants to find their own solutions.
    </Typography>

    <Typography variant="body1" paragraph style={style}>
        Are you ready to make a difference? Join us as a mentor at Opportunity Hack and help shape the future of nonprofit solutions!
    </Typography>

    <LoginOrRegister introText="Ready to join us as a mentor?" previousPage={"/about/mentors"} />

    </ProjectsContainer>
  </LayoutContainer>
);

export default Mentorship;
