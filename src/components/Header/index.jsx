import { AppBar, Link, Typography} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
    header: {
        height: "180px", 
        padding: "14px", 
        boxSizing: "border-box", 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center",
    },
    link: {
        fontSize: "22px",
        textTransform: "uppercase",
        cursor: "pointer",
        fontWeight: "700"
    },
    welcome: {
        fontSize: "18px",
        fontFamily: "Poppins, sans-serif",
        cursor: "default"
    }
}

const Header = () => {
    return (
        <AppBar sx={styles.header} position="sticky">
            <img src="/images/logo.png" alt="Logo da K-Pop 4 U" />
            <Link color="secondary" sx={styles.link} underline="hover">Início</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Categorias</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Sobre nós</Link>
            <Link color="secondary" sx={styles.link} underline="hover">Contato</Link>
            <Typography sx={styles.welcome}>Olá, visitante!</Typography>
            <PersonIcon fontSize="large" cursor="pointer" />
            <ShoppingCartIcon fontSize="large" cursor="pointer" />
        </AppBar>
    )
}

export default Header;
