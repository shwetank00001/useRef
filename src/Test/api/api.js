import axios from "axios";

const url = 'http://localhost:5000/posts'

function fetchPosts(){
    axios.get(url)
}