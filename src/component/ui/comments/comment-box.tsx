import { Avatar, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Paper, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

type props = {
    name: string
    comment: string
    date: string
    imgUrl: string
}

const CommentBox: React.FC<props> = ({ name, comment, date, imgUrl }: props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={name}
                subheader={date}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comment}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default CommentBox