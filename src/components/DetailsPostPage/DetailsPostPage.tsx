import { Button } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { fetchDeletePost, fetchGetPost, fetchUpdatePost } from "../../api"
import { ROUTES } from "../../routes"
import { Post } from "../../types"
import Form from "../Form/Form"

const DetailsPostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<Post>({} as Post)
  const { register, handleSubmit, reset } = useForm<Post>()

  useEffect(() => {
    if (post?.title && post?.body) {
      reset({
        title: post.title,
        body: post.body
      })
    }
  }, [post, reset])
  
  useEffect(() => {
    if (id) {
      fetchGetPost(id).then(post => setPost(post)).catch(error => console.error(error))
    }
  }, [id])

  const handleFormSubmit = (data: Post) => {
    if (post) {
      fetchUpdatePost({ ...data, userId: post.userId, id: post.id }).catch(
        (error) => console.error(error)
      )
    }
  }

  const handleDeleteButtonClick = () => {
    if (id) {
      fetchDeletePost(id)
        .then(() => navigate(ROUTES.HOME_PAGE, { replace: true }))
        .catch((error) => console.error(error))
    }
  }
  
  return post?.body && post?.title ? (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
    >
      <Box>
        <Button type="submit" variant="contained" sx={{ marginRight: '20px' }}>
          Update
        </Button>
        <Button variant="contained" onClick={handleDeleteButtonClick}>
          Delete
        </Button>
      </Box>
    </Form>
  ) : null
}

export default DetailsPostPage