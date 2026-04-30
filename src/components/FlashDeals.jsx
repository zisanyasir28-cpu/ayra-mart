import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Star, ShoppingCart, Plus } from 'lucide-react'
import { flashDeals } from '../data/products'
import './FlashDeals.css'

function useCountdown(seconds) {
  const [time, setTime] = useState(seconds)
  useEffect(() => {
    const t = setInterval(() => setTime(s => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])
  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')
  return { h, m, s }
}

function TimeUnit({ val, label }) {
  return (
    <div className="time-unit">
      <motion.div
        key={val}
        className="time-val"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {val}
      </motion.div>
      <span className="time-label">{label}</span>
    </div>
  )
}

export default function FlashDeals({ onAddToCart }) {
  const { h, m, s } = useCountdown(7200)

  return (
    <section className="flash-sec" id="flash">
      <div className="section-wrap">
        {/* Header */}
        <div className="flash-header">
          <div className="flash-title-wrap">
            <motion.div
              className="flash-icon"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Zap size={22} fill="currentColor" />
            </motion.div>
            <div>
              <h2 className="flash-title">⚡ Flash Deals</h2>
              <p className="flash-sub">Limited time — grab before they're gone!</p>
            </div>
          </div>

          <div className="countdown-wrap">
            <span className="countdown-label">Ends in:</span>
            <div className="countdown">
              <TimeUnit val={h} label="HRS" />
              <span className="time-sep">:</span>
              <TimeUnit val={m} label="MIN" />
              <span className="time-sep">:</span>
              <TimeUnit val={s} label="SEC" />
            </div>
          </div>

          <a href="#" className="sec-link">View All</a>
        </div>

        {/* Products */}
        <div className="flash-grid">
          {flashDeals.map((p, i) => {
            const disc = Math.round(((p.price - p.flashPrice) / p.price) * 100)
            return (
              <motion.div
                key={p.id}
                className="flash-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="flash-disc-badge">-{disc}%</div>

                <div className="flash-img-wrap">
                  <img src={p.img} alt={p.name} className="flash-img" loading="lazy" />
                  <div className="flash-overlay">
                    <motion.button
                      className="flash-add-btn"
                      onClick={() => onAddToCart(p, p.flashPrice)}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Plus size={18} />
                    </motion.button>
                  </div>
                </div>

                <div className="flash-info">
                  <p className="flash-cat">{p.cat}</p>
                  <p className="flash-name">{p.name}</p>
                  <p className="flash-name-bn">{p.bn}</p>
                  <div className="flash-rating">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={11} fill={j < Math.floor(p.rating) ? '#f6c90e' : 'none'} stroke="#f6c90e" />
                    ))}
                    <span>({p.reviews})</span>
                  </div>
                  <div className="flash-prices">
                    <span className="flash-new-price">৳{p.flashPrice}</span>
                    <span className="flash-old-price">৳{p.price}</span>
                    <span className="flash-unit">/{p.unit}</span>
                  </div>
                  <div className="flash-progress-wrap">
                    <div className="flash-progress-bar" style={{ width: `${40 + i * 10}%` }} />
                  </div>
                  <p className="flash-sold">🔥 {20 + i * 8} sold already</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
