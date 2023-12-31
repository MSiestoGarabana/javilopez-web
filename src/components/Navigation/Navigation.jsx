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
import spainLogo from "../../media/espana.png";
import ukLogo from "../../media/uk.png";
import javiLogo from "../../media/javiLogo.jpeg";
import "./Navigation.css";

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
    setLanguage(selectedLanguage);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar
          className="navBar__toolBar"
          disableGutters
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Link to="/" sx={{ display: "block" }}>
              <img className="navBar__logo" src={javiLogo} />
            </Link>
          </Box>
          {/* MENUICON BOX */}
          <Box
            className="navBar__container--menuIcon"
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "end",
              },
              boxSizing: "content-box",
            }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon
                sx={{
                  width: "50px",
                  height: "50px",
                  marginRight: "25px",
                  "@media (max-width: 750px)": {
                    width: "30px",
                    height: "30px",
                  },
                }}
              />
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
              {language === "Spanish" ? (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Proyectos">
                      Proyectos
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Sponsors">
                      Sponsors
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Contacto">
                      Contacto
                    </Link>
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Proyectos">
                      Proyects
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Sponsors">
                      Sponsors
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link className="navBar__Link" to="/Contacto">
                      Contact
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          {/* END OF MENU ICON BOX */}

          {/* NAVBAR BUTTON , SPANISH AND ENGLISH */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              },
              margin: "0px 250px",

              "@media (max-width: 1250px)": { margin: "0px 200px" },
              "@media (max-width: 1050px)": { margin: "0px 150px" },
              "@media (max-width: 1000px)": { margin: "0px 100px" },
            }}
          >
            {language === "Spanish" ? (
              <>
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
              </>
            ) : (
              <>
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  <Link className="navBar__Link" to="/Proyectos">
                    Proyects
                  </Link>
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <Link className="navBar__Link" to="/Sponsors">
                    Sponsors
                  </Link>
                </Button>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <Link className="navBar__Link" to="/Contacto">
                    Contact Me
                  </Link>
                </Button>
              </>
            )}
          </Box>

          {/* NAVBAR BUTTON , SPANISH AND ENGLISH */}

          <Select
            value={language}
            onChange={handleSelectChange}
            className="navBar__selectLanguage--body"
            sx={{
              width: "100px",
              marginRight: "25px",
              "@media (max-width: 750px)": {
                width: "60px",
                height: "60px",
                marginRight: "10px",
              },
            }}
          >
            <MenuItem value={"Spanish"}>
              <img
                src={spainLogo}
                alt="Spain_Flag_Logo"
                className="navBar__selectLanguage--logo"
              />
            </MenuItem>
            <MenuItem
              value={"English"}
              sx={{
                backgrounColor: "black",
              }}
            >
              <img
                src={ukLogo}
                alt="UK_Flag_Logo"
                className="navBar__selectLanguage--logo"
              />
            </MenuItem>
          </Select>
          {/* </div> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
