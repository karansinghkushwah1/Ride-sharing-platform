import { styled, Box, Typography } from '@mui/material';


const Image = styled(Box)`
    width: 100%;
    background: url(${process.env.PUBLIC_URL}/images/roads.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    font-weight: bold;
    color: white;
    line-height: 1;
`;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const Banner = () => {
    return (
        <Image>
            <Heading>Discover a New Way to Travel</Heading>
            {/* <SubHeading>Code for Interview</SubHeading> */}
        </Image>
    );
}

export default Banner;
