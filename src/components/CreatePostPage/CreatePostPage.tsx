import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import {useNavigate } from "react-router-dom";
import { fetchCreatePost } from "../../api";
import { ROUTES } from "../../routes";
import { Post } from "../../types";
import Form from "../Form/Form";

const userId = 3

const CreatePostPage = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<Post>({
    defaultValues: {
      title: '',
      body: ''
    }
  })

  const handleFormSubmit = (data: Post) => {
    fetchCreatePost({ ...data, userId })
      .then(() => navigate(ROUTES.HOME_PAGE, { replace: true }))
      .catch((error) => console.error(error))
  }

  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
    >
      <Button type="submit" variant="contained">
        Create
      </Button>
    </Form>
  )
}

export default CreatePostPage