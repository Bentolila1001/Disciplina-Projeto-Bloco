import { CardMedia, Card, CardContent, Typography, CardActions, Button, Link } from "@mui/material"

type Props = {
    imgUrl: string,
    name: string,
    description: string
    id: string
}
const Spotlight: React.FC<Props> = ({ imgUrl, name, description, id }: Props) => {
    return (
        <Card style={{ display: "flex", flexDirection: "column" }}  sx={{ maxWidth: 240,minHeight: 350  }}>
            <CardMedia
                component="img"
                alt={`${name} spotlight`}
                height="140"
                image={imgUrl}
            />
            <CardContent style={{ marginTop: "auto" }}>
                <Typography  variant="h5" component="div">
                    {name}
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{ marginTop: "auto" }}>
                <Button size="small">Share</Button>
                <Link href={`/info/${id}`}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>

    )
}

export default Spotlight