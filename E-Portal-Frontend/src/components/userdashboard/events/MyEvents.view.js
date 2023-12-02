import React, {useState} from 'react'
import '../Dashboard.style.css'
import 'antd/dist/antd.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import eventimg from "../../../assets/imgevent.jpg";
import eventimg2 from "../../../assets/imgevent2.jpg";
import eventimg3 from "../../../assets/imgevent3.jpg";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {ExpandMore} from "@mui/icons-material";


const MyEvents = (props) => {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <div className="myEvents">
           <div className="head">
               <h1 className='createEventHead'>Events</h1>
           </div>

            <div className="eventsArea">
                <Card className='eventsCard' sx={{ width: '26.7%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={eventimg}
                        alt="event image here"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" Event titleent="div">
                            Event title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Event description goes here
                        </Typography>
                    </CardContent>
                    <CardActions className='cardActions'>
                        <i className="bi bi-share-fill eventicon"></i>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Subscribers:</Typography>
                            <div className="subscribers">
                                <ul>
                                </ul>
                            </div>
                        </CardContent>
                    </Collapse>

                </Card>
                <Card className='eventsCard' sx={{ width: '26.7%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={eventimg2}
                        alt="event image here"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" Event titleent="div">
                            Event title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Event description goes here
                        </Typography>
                    </CardContent>
                    <CardActions className='cardActions'>
                        <i className="bi bi-share-fill eventicon"></i>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Subscribers:</Typography>
                            <div className="subscribers">
                                <ul>
                                </ul>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card className='eventsCard' sx={{ width: '26.7%' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={eventimg3}
                        alt="event image here"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" Event titleent="div">
                            Event title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Event description goes here
                        </Typography>
                    </CardContent>
                    <CardActions className='cardActions'>
                        <i className="bi bi-share-fill eventicon"></i>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Subscribers:</Typography>
                            <div className="subscribers">
                                <ul>
                                </ul>
                            </div>
                        </CardContent>
                    </Collapse>
                </Card>


            </div>

        </div>
    );
}

export default MyEvents