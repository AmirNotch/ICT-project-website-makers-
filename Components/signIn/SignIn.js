import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const inintialData = {
  email: '',
  password: '',
}

export default function SignIn() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [logData, setLogData] = useState(inintialData)
  const [isLoadind, setIsLoading] = useState(false)
  const { push } = useHistory()

  // onChange
  const handleOnChange = (e) => {
    const target = e.currentTarget
    setLogData({ ...logData, [target.name]: target.value })
  }

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(logData),
    })
    setIsLoading(false)

    if (res.ok) {
      const { token } = await res.json()
      sessionStorage.setItem('token', token)
      push('/')
      return
    }
    enqueueSnackbar('Check your email or password', {
      autoHideDuration: 2000,
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    })
  }

  // RENDER
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            value={logData.email}
            onChange={handleOnChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <TextField
            value={logData.password}
            onChange={handleOnChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoadind}
          >
            {isLoadind ? 'Please wait...' : 'Sign In'}
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
