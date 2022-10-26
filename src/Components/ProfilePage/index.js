import React, { useState, useEffect } from "react";
import { TextField, Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import { Label } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebaseinitialize";
import Checkbox from "@mui/material/Checkbox";
import FormHelperText from "@mui/material/FormHelperText";
import { location, skillsList, educationDomains } from "../../constants/index";
import { useNavigate } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Profile() {
  const navigate = useNavigate();
  // const goToSignIn = () => {
  //   navigate("/home");
  // };
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const [candidateInfo, setCandidateInfo] = React.useState({
    name: "",
    email: loggedInUser.email,
    phone: "",
    location: "",
    educationDomains: "",
    skills: [],
    linkedIn: "",
  });
  const handleSkillsChange = (event) => {
    const {
      target: { value },
    } = event;
    setCandidateInfo((p) => {
      return {
        ...p,
        skills: typeof value === "string" ? value.split(",") : value,
      };
    });
    // On autofill we get a stringified value.
  };

  // const handleEducationDomainChange = (event) => {
  //   setCandidateInfo((p) => {
  //     return { ...p, educationDomains: event.target.value };
  //   });
  // };
  // const handleLocationChange = (event) => {
  //   setCandidateInfo((p) => {
  //     return { ...p, location: event.target.value };
  //   });
  // };

  const submitInfo = async (e) => {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    let userId = userInfo.uid;
    e.preventDefault();
    console.log(candidateInfo);
    try {
      const docRef = await setDoc(doc(db, "usersData", userId), {
        ...candidateInfo,
        userId: userId,
        step: 200,
        user_type: "candidate",
      });

      navigate("/home");
    } catch (e) {
      alert("Error occored");
      console.error("Error adding document: ", e);
    }

    setCandidateInfo({
      name: "",
      email: "",
      phone: "",
      location: "",
      educationDomains: "",
      skills: [],
      linkedIn: "",
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        paddingTop: "10px",
      }}
    >
      <form onSubmit={(e) => submitInfo(e)}>
        <h2
          style={{
            textAlign: "center",
            color: "purple",
            fontWeight: "600",
            fontSize: "2rem",
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
        >
          User Profile
        </h2>
        
        <p style={{textAlign:"center",}}>Please fill out the form to get access for the Todo App !</p>
        
        <div
          style={{
            maxWidth: "1100px",
            margin: "50px 20px 0 50px ",
            padding: "20px",
            // paddingTop: "50px",
            borderRadius: "20px",
          }}
        >
         
          <Grid
            container
            spacing={3}
            maxWidth="80%"
            p={4}
            sx={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 0px 15px #DCD7D7",
              margin: "auto",
              fontSize: "15px",
            }}
          >
            <Grid item xs={12} md={6}>
              <label>
                Name<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                required
                value={candidateInfo.name}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, name: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label>
                email<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                disabled
                required
                type="email"
                value={candidateInfo.email}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, email: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <label>
                Phone no.<span style={{ color: "red" }}>*</span>
              </label>
              <TextField
                required
                type="number"
                inputProps={{ maxLength: 10 }}
                value={candidateInfo.phone}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, phone: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>

            {/* <Grid item xs={12} md={12}>
            <label>Education</label>
            <TextField
              value={candidateInfo.education}
              onChange={(e) => {
                setCandidateInfo((p) => {
                  return { ...p, education: e.target.value };
                });
              }}
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid> */}

            {/* <Grid item xs={12} md={12}>
            <label>Experience</label>
            <TextField
              value={candidateInfo.experience}
              onChange={(e) => {
                setCandidateInfo((p) => {
                  return { ...p, experience: e.target.value };
                });
              }}
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid> */}

            <Grid item xs={12} md={6}>
              <label>linkedIn</label>
              <TextField
                value={candidateInfo.linkedIn}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, linkedIn: e.target.value };
                  });
                }}
                size="small"
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            {/* <Grid item xs={12} md={6}>
            <label>Twitter</label>
            <TextField
              value={candidateInfo.socialMedia.twitter}
              onChange={(e) => {
                setCandidateInfo((p) => {
                  return {
                    ...p,
                    socialMedia: {
                      ...p.socialMedia,
                      twitter: e.target.value,
                    },
                  };
                });
              }}
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid> */}

            {/* <Grid item xs={12} md={6}>
            <label>Github</label>
            <TextField
              value={candidateInfo.socialMedia.github}
              onChange={(e) => {
                setCandidateInfo((p) => {
                  return {
                    ...p,
                    socialMedia: { ...p.socialMedia, github: e.target.value },
                  };
                });
              }}
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid> */}
            {/* <Grid item xs={12} md={6}>
            <label>Instagram</label>
            <TextField
              value={candidateInfo.socialMedia.instagram}
              onChange={(e) => {
                setCandidateInfo((p) => {
                  return {
                    ...p,
                    socialMedia: {
                      ...p.socialMedia,
                      instagram: e.target.value,
                    },
                  };
                });
              }}
              size="small"
              fullWidth
              id="outlined-basic"
              variant="outlined"
            />
          </Grid> */}

            <Grid item xs={12} md={6}>
              
              <la>
                Tags<span style={{ color: "red" }}>*</span>
              </la>
              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Skills
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={candidateInfo.skills}
                  onChange={handleSkillsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {skillsList.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox
                        checked={candidateInfo.skills.indexOf(name) > -1}
                      />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <label>Location</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                required
                value={candidateInfo.location}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, location: e.target.value };
                  });
                }}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <label>Education</label>
              <TextField
                fullWidth
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
                required
                value={candidateInfo.educationDomains}
                onChange={(e) => {
                  setCandidateInfo((p) => {
                    return { ...p, educationDomains: e.target.value };
                  });
                }}
              />
            </Grid>

            {/* --------------------------------------------------- */}

            <Grid item lg={12}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                type="submit"
                sx={{ float: "left", width: "150px" }}
              >
                {/** onClick={goToSignIn} */}
                Login
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  );
}

export default Profile;
