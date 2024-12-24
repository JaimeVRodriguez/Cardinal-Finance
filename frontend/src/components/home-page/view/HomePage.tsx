import {
    AppBar,
    Box, Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, IconButton,
    Toolbar,
    Typography
} from '@mui/material';
// TODO: Remove unused import
import {Menu} from '@mui/icons-material';

export default function HomePage() {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                            Cardinal Finance
                        </Typography>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                    padding: 2,
                    marginTop: 15
                }}
            >

                //TODO: Create appropriate data and map cards
                //TODO: Create and extract a card component
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

                <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image='/static/images/cards/contemplative-reptile.jpg'
                        alt='green iguana'
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            Lizard
                        </Typography>
                        <Typography variant='body2' sx={{color: 'text.secondary'}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Box>
        </>
    );
}
