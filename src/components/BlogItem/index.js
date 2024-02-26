// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link to={`/blogs/${id}`}>
      <li className="li">
        <img src={imageUrl} alt="imagee" className="image" />
        <div className="div">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="div2">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
