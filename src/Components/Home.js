
import Box from '@mui/material/Box';
import Bell from './landingPage/Bell'
import astronaut from "../Images/astronaut.svg"
const Home = () => {
    return ( 
        <>
            <Box
                style={{
                    // backgroundColor: "blue",
                    paddingLeft: "30px",
                    borderBottom: "2px solid black",
                    display: "flex",
                    alignItems: "center",
                }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <div className="d-flex acen fg1" style={{width: '100%'}}>
                    <div className="info d-flex" style={{flexBasis: '50%'}}>
                        <div className="content myCard" style={{ backgroundColor: 'green', maxWidth: '80%', textAlign: 'left'}}>
                            <h1 className="uppercase clrwhite">
                                Hello Folks
                            </h1>
                            <div className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dicta, rerum iste facere quidem eveniet amet? Officia, quasi similique ullam fugiat, sint quia incidunt hic ab modi debitis amet fugit nulla itaque deserunt dolor optio veritatis? Aliquam mollitia unde asperiores delectus optio, exercitationem eaque vero dolores atque ipsam eos?
                            </div>
                        </div>
                    </div>
                    <div className="astronautPnotif d-flex" style={{ flexBasis: '50%', justifyContent: 'flex-end'}}>
                        <div className="astronaur">
                            <img src={astronaut} style={{width: '100%'}} alt="" />
                        </div>
                        <Bell />
                    </div>
                </div>
                {/* <Carousels /> */}
            </Box>

        </>
     );
}
 
export default Home;