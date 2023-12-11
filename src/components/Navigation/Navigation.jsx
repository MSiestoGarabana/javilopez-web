import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";
import javiLogo from "../../media/javiLogo.jpeg";
import "./Navigation.css";

const pages = ["Proyectos", "Sponsors", "Contacto"];

function ResponsiveAppBar({ language, setLanguage }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSelectChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar className="navBar__toolBar" disableGutters>
          <Box>
            <Link to="/">
              <img className="navBar__logo" src={javiLogo} />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", alignItems: "flex-end" },
              margin: "0px 40vh 0px 50vw",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link className="navBar__Link" to={`/${page}`}>
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Select value={language} onChange={handleSelectChange}>
              <MenuItem value={"Spanish"}>Spanish</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
            </Select>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-around",
              },
              margin: "0px 20vh 0px 15vw",
            }}
          >
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link className="navBar__Link" to="/Proyectos">
                Proyectos
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="navBar__Link" to="/Sponsors">
                Sponsors
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link className="navBar__Link" to="/Contacto">
                Contacto
              </Link>
            </Button>
          </Box>
          <Select value={language} onChange={handleSelectChange}>
            <MenuItem value={"Spanish"}>Spanish</MenuItem>
            <MenuItem value={"English"}>English</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
