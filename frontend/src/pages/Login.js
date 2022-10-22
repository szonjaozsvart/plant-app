import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Container } from "@mui/system";
import login from "../services/loginService";
import FormField from "../components/FormField";
import "../assets/login.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validator.isEmpty(password) || validator.isEmpty(email)) {
      setShowError(true);
      setErrorMessage("Please fill the email and the password too!");
      return;
    }
    login(email, password, setErrorMessage, setShowError, navigate);
  };

  return (
    <Grid
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ImageList variant="masonry" cols={3} gap={5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
        <Grid align="center" justifyContent="center">
          <Typography
            variant="h3"
            margin={3}
            fontWeight="bold"
            component="span"
          >
            Login
          </Typography>
          <Container align="center" maxWidth="xs">
            {showError && (
              <Alert
                data-testid="error_message"
                severity="error"
                variant="filled"
              >
                <AlertTitle align="center">{errorMessage}</AlertTitle>
              </Alert>
            )}
            <br />
          </Container>
          <Container maxWidth="sm">
            <Typography align="center" component="span" backgroundColor="white">
              <form onSubmit={handleLogin}>
                <FormField
                  data-testid="formField"
                  name="Email"
                  type="text"
                  label="Email"
                  icon={<EmailOutlinedIcon fontSize="large" />}
                  value={email}
                  onChange={setEmail}
                />
                <br />
                <FormField
                  name="Password"
                  type="password"
                  label="Password"
                  icon={<VpnKeyIcon fontSize="large" />}
                  value={password}
                  onChange={setPassword}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3949ab",
                    color: "white",
                    width: 240,
                  }}
                >
                  OK
                </Button>
                <Typography align="center" padding={5}>
                  <Link
                    to="/registration"
                    title="Go to Registration"
                    className="link"
                  >
                    If you do not have an account, click here to register!
                  </Link>
                </Typography>
              </form>
            </Typography>
          </Container>
        </Grid>
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={15}
      >
        <CopyrightIcon
          sx={{ maxWidth: 20, maxHeight: 14, fontWeight: "bold" }}
        />
        2022 BYP
      </Typography>
      </ImageList>
    </Grid>
  );
}

const itemData = [
  {
    img: "https://www.thespruceeats.com/thmb/ey8fCmoVGSaKLlLaI6Tt28JAr-Y=/1732x974/smart/filters:no_upscale()/Stocksy_txp0d1dfe559zV200_Medium_1940891-86ec21efd3934b539d3cf99dda334851.jpg",
    title: "Breakfast",
  },
  {
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2017/07/GettyImages-1204189958-fb4b98b.jpg",
    title: "Coffee",
  },
  {
    img: "https://bigthink.com/wp-content/uploads/2020/05/origin-123.jpg",
    title: "Burger",
  },
  {
    img: "https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544996.jpg",
    title: "Camera",
  },
];

export default Login;
