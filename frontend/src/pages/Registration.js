import React from "react";
import FormField from "../components/FormField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import validator from "validator";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import register from "../services/registrationService";
import "../assets/registration.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleCheckInput = () => {
    if (
      validator.isEmpty(name) &&
      validator.isEmpty(email) &&
      validator.isEmpty(password) &&
      validator.isEmpty(passwordAgain)
    ) {
      setShowError(true);
      return setErrorMessage("Name, email and password are required.");
    }
    if (validator.isEmpty(name)) {
      setShowError(true);
      return setErrorMessage("Username is required");
    }
    if (!validator.isEmail(email)) {
      setShowError(true);
      return setErrorMessage("Email is required");
    }
    if (!validator.isStrongPassword(password)) {
      setShowError(true);
      return setErrorMessage(
        "Password must be at least 8 characters, including min 1 uppercased letter and min 1 symbol."
      );
    }
    if (password !== passwordAgain) {
      setShowError(true);
      return setErrorMessage(
        "The passwords are not the same, please check them again!"
      );
    }
    setErrorMessage([]);
    setShowError(false);
    return true;
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    if (handleCheckInput()) {
      register(name, email, password, setErrorMessage, setShowError, navigate);
    }
  };

  return (
    <Grid
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
        <Grid align="center" justifyContent="center" padding={4}>
          <Typography variant="h3" fontWeight="bold" component="span">
            Registration
          </Typography>
          <Container align="center" maxWidth="xs" data-testid="errorContainer">
            {showError && (
              <Alert severity="error" variant="filled">
                <AlertTitle align="center" data-testid="alertText">
                  {errorMessage}
                </AlertTitle>
              </Alert>
            )}
            <br />
          </Container>
          <Container
            className="formContainer"
            maxWidth="sm"
            data-testid="formContainer"
          >
            <form onSubmit={handleSubmitRegistration}>
              <FormField
                name="Username"
                type="text"
                label="Username"
                icon={<PersonIcon fontSize="large" />}
                value={name}
                onChange={setName}
                data-testid="usernameInputField"
              />
              <br />
              <FormField
                name="Email"
                type="text"
                label="Email"
                icon={<EmailOutlinedIcon fontSize="large" />}
                value={email}
                onChange={setEmail}
                data-testid="emailInputField"
              />
              <br />
              <FormField
                name="Password"
                type="password"
                label="Password"
                icon={<VpnKeyIcon fontSize="large" />}
                value={password}
                onChange={setPassword}
                data-testid="passwordInputField"
              />
              <br />
              <FormField
                name="ConfirmPassword"
                type="password"
                label="Confirm password"
                icon={<VpnKeyIcon fontSize="large" />}
                value={passwordAgain}
                onChange={setPasswordAgain}
                data-testid="passwordAgainInputField"
              />
              <br />
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#3949ab", color: "white", width: 240 }}
              >
                OK
              </Button>
              <br />
              <br />
              <Link to="/login" title="Go to Registration" className="link">
                If you already have an account, click here to login!
              </Link>
            </form>
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
    img: "https://www.serbia.travel/files/1-40_VODOPAD_VRELO-0-1280x768.jpg",
  },
  {
    img: "https://media.cntraveler.com/photos/5f0e21d2d84f98d53313dd96/7:10/w_1498,h_2140,c_limit/Iceland-2020-GettyImages-1045856092.jpg",
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/5c69df27ca525b3b56a5cce6/1553776779529-IF27XV130PBNE5RZU3F9/JackBrauer-WanakaSunrise.jpg",
  },
  {
    img: "https://media.fitzwilliamhoteldublin.com/staging/wp-content/uploads/2017/06/18141140/Cliffs-of-Moher-Day-Trips-from-Dublin.jpg",
  },
  {
    img: "https://activityiceland.is/wp-content/uploads/2022/09/shutterstock_1846732645-3-768x512.jpg",
  },
  {
    img: 'https://natourest.ee/wp-content/uploads/2020/12/cropped-Brown-Bear.jpg',
  },
  {
    img: "https://afktravel.com/wp-content/uploads/2015/08/senegal-nature-normal.jpg",
  },
];
export default Registration;
