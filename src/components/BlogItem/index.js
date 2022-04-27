import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item">
        <img src={imageUrl} alt={title} className="img" />
        <div className="blog-item-content">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="avatar-card">
            <img src={avatarUrl} alt={title} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
