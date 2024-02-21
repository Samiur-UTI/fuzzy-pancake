import * as React from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./Auth.css"
const AuthForm = ({ isLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    // (e.g., call authentication API, redirect to app)
    console.log("Form submitted:", data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems:"center",marginTop:"2rem" }}>
        {/* Title */}
        <Typography variant="h5" align="center">
          {isLogin ? "Login" : "Register"}
        </Typography>

        {isLogin ? (
          // Login form
          <div className="login-wrapper">
            <TextField
              {...register("email", { required: "Email is required" })}
              label="Email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth={false}
            />
            <TextField
              {...register("password", { required: "Password is required" })}
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth={false}
            />
          </div>
        ) : (
          // Registration form
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  label="First Name"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  label="Last Name"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", { required: "Email is required" })}
                  label="Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("phoneNumber", { required: false })}
                  label="Phone Number (Optional)"
                  type="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("password", {
                    required: "Password is required",
                  })}
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
            </Grid>
          </>
        )}

        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="rememberMe"
              {...register("rememberMe")}
            />
          }
          label="Remember me"
        />

        <Button type="submit" variant="contained" color="primary">
          {isLogin ? "Login" : "Register"}
        </Button>

        {/* Redirect to other page or display messages */}
        <Box sx={{ mt: 2 }}>
          {isLogin && (
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          )}
          {!isLogin && (
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link href="/login" variant="body2">
                Login here
              </Link>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AuthForm;
