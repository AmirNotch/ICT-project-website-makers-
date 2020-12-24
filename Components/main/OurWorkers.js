import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import PaginationPanel from '../pagination/Pagination'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export function OurWorkers() {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [url, setUrl] = useState('https://reqres.in/api/users')
  const [fetchData, setFetchData] = useState({
    data: [],
    page: 0,
    total_pages: 0,
  })

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const sendRequest = async () => {
      const res = await fetch(url, { signal })
      if (res.ok) {
        const json = await res.json()
        setFetchData(json)
        return
      }

      enqueueSnackbar('Something went wrong', {
        autoHideDuration: 2000,
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      })
    }
    sendRequest()

    return () => controller.abort()
  }, [url, enqueueSnackbar])

  console.log(fetchData.data)

  return (
    <>
      <Grid container spacing={2}>
        {fetchData.data.map(({ first_name, last_name, avatar, email }, idx) => (
          <Grid item xs={12} lg={4} key={idx}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={avatar} title="Contemplative Reptile" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {first_name} {last_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="mt-3">
        <PaginationPanel url={url} setUrl={setUrl} pageCount={fetchData.total_pages} initialPage={0} />
      </div>
    </>
  )
}
