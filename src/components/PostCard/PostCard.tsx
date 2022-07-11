import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import {Link} from "react-router-dom"
import { FC } from "react"
import { PostCardProps } from "../../interfaces"

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: '10px' }} color="text.secondary">
          Description:
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/details/${post.id}`}
          size="small"
        >
          Details
        </Button>
      </CardActions>
    </Card>
  )
}

export default PostCard