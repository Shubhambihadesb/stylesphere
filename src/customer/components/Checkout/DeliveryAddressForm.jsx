import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleAddressForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const addressInfo = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("pincode"),
      mobile: data.get("phoneNumber"),
    };
    console.log("address : ", addressInfo);
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer space-y-5 ">
            {[1, 1, 1, 1, 1].map((item) => (
              <div className="border rounded-md p-2 space-y-4 shadow-lg">
                <AddressCard />
                <Button
                  sx={{ mt: 1, bgcolor: "#4F46E5", mb: 2 }}
                  size="small"
                  variant="contained"
                >
                  Deliver Here
                </Button>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} lg={7} style={{ paddingTop: "0px" }}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleAddressForm}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-address"
                    multiline
                    rows={4}
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-city"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province"
                    fullWidth
                    autoComplete="given-state"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Contact"
                    fullWidth
                    autoComplete="phoneNumber"
                  ></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "#4F46E5" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
