import { Post } from "../types"

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchGetPosts = () => {
  return fetch(`${URL}`).then(res => res.json())
}

export const fetchCreatePost = (data: Post) => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const fetchGetPost = (id: string) => {
  return fetch(`${URL}/${id}`).then(res => res.json())
}

export const fetchUpdatePost = (data: Post) => {
  return fetch(`${URL}/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data),
  }).then(res => res.json())
}

export const fetchDeletePost = (id: string) => {
  return fetch(`${URL}/${id}`, {method: 'DELETE'}).then(res => res.json())
}