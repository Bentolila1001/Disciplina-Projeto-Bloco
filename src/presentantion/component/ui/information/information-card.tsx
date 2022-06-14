import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { string } from "yup";

type props = {
    name: string
    imgUrl: string
}

const InformationCard: React.FC<props> = ({ name, imgUrl }: props) => {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 200, mb: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt={`img ${name} `}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default InformationCard