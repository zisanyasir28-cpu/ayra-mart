import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, ShoppingCart, Plus, Check } from 'lucide-react'
import './ProductCard.css'

export default function ProductCard({ product, onAdd }) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  const disc = product.old ? Math.round(((product.old - product.price) / product.old) * 100) : 0

  return (
    <motion.div
      className="pcard"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
    >
      {/* Badges */}
      {disc > 0 && <span className="pcard-disc">-{disc}%</span>}
      {product.badge && <span className="pcard-badge">{product.badge}</span>}

      {/* Wishlist */}
      <motion.button
        className={`pcard-wish ${liked ? 'liked' : ''}`}
        onClick={() => setLiked(l => !l)}
        whileTap={{ scale: 0.85 }}
      >
        <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
      </motion.button>

      {/* Image */}
      <div className="pcard-img-wrap">
        <img src={product.img} alt={product.name} className="pcard-img" loading="lazy" />
        <div className="pcard-img-overlay">
          <motion.button className="pcard-quick" whileTap={{ scale: 0.9 }} onClick={handleAdd}>
            Quick Add
          </motion.button>
        </div>
      </div>

      {/* Info */}
      <div className="pcard-body">
        <p className="pcard-cat">{product.cat}</p>
        <h3 className="pcard-name">{product.name}</h3>
        <p className="pcard-bn">{product.bn}</p>

        <div className="pcard-rating">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? '#f6c90e' : 'none'} stroke="#f6c90e" />
          ))}
          <span className="pcard-rev">({product.reviews})</span>
        </div>

        <div className="pcard-footer">
          <div className="pcard-price-wrap">
            <span className="pcard-price">৳{product.price}</span>
            {product.old && <span className="pcard-old">৳{product.old}</span>}
            <span className="pcard-unit">/{product.unit}</span>
          </div>
          <motion.button
            className={`pcard-add ${added ? 'added' : ''}`}
            onClick={handleAdd}
            whileTap={{ scale: 0.88 }}
          >
            {added ? <Check size={17} /> : <Plus size={17} />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
