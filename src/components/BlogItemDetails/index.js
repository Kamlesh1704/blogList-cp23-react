import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {itemData: {}, isLoading: true}

  componentDidMount() {
    this.getitemData()
  }

  getitemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({itemData: updatedData, isLoading: false})
  }

  render() {
    const {itemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = itemData
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info">
            <h1 className="blog-details-title">{title}</h1>
            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>
            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
