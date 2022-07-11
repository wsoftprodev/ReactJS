import { ReactNode } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { Post } from "../types";

export interface PostCardProps {
  post: Post
}

export interface FormProps {
  children: ReactNode
  register: UseFormRegister<Post>
  handleSubmit: UseFormHandleSubmit<Post>
  handleFormSubmit: (data: Post) => void
}