import { Container, Typography } from "@mui/material"
import Card from "../Card"

const styles = {
    container: {
        padding: "32px 0", 
    },
    cards: {
        display: "flex", 
        gap: "18px", 
        flexWrap: "wrap", 
        justifyContent: "space-between"
    }
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const Main = () => {
  return (
    <Container maxWidth="xl" sx={styles.container}>
        <Typography variant="h3">Mais Vendidos</Typography>
        <div style={styles.cards}>
            {cards.map((card, index) => <Card key={index} />)}
        </div>
    </Container>
  )
}

export default Main