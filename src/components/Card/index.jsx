import { Paper, Typography } from "@mui/material";
import { formatPrice, formatTitle } from "./helpers/format";

const styles = {
    card: {
        width: "230px",
        height: "320px",
        textAlign: "center",
        padding: "14px",
        boxSizing: "border-box",
    },
    image: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
    },
    title: {
        fontWeight: "700",
    },
    price: {
        fontWeight: "700",
    }
}

const Card = ({ name, artist, image, price }) => {
    return (
        <Paper elevation={6} sx={styles.card}>
            <img src={image} alt={`${name} - ${artist}`} style={styles.image} />
            <Typography sx={styles.title} variant="h6">{formatTitle(name)}</Typography>
            <Typography variant="subtitle1">{artist}</Typography>
            <Typography sx={styles.price} variant="h6" color="pink.main">R$ {formatPrice(price)}</Typography>
        </Paper>
    )
}

export default Card;
