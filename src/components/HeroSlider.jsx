import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ShoppingBag, Truck, Star } from 'lucide-react'
import './HeroSlider.css'

const slides = [
  {
    id: 0,
    headline: 'Farm Fresh to Your',
    highlight: 'Doorstep',
    sub: 'আমাদের তাজা শাকসবজি সরাসরি কৃষক থেকে আপনার রান্নাঘরে',
    desc: 'Get the freshest vegetables, fruits & groceries delivered same-day in Sirajganj.',
    cta: 'Shop Fresh Veggies',
    badge: '🥬 Farm Fresh',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=700&h=520&fit=crop&auto=format&q=85',
    bg: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)',
    accent: '#34d399',
    tag: '#vegetables',
  },
  {
    id: 1,
    headline: 'Fresh Fish & Meat',
    highlight: 'Every Day',
    sub: 'প্রতিদিন সকালে তাজা মাছ ও মাংস — সরাসরি বাজার থেকে',
    desc: 'Fresh Hilsa, Rohu, Chicken & Beef — sourced daily from local markets for maximum freshness.',
    cta: 'Order Fish & Meat',
    badge: '🐟 Daily Fresh',
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=700&h=520&fit=crop&auto=format&q=85',
    bg: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 40%, #1d4ed8 100%)',
    accent: '#60a5fa',
    tag: '#fish',
  },
  {
    id: 2,
    headline: 'All Groceries at',
    highlight: 'Best Price',
    sub: 'চাল, ডাল, তেল, মশলা — সবকিছু এক জায়গায় সেরা দামে',
    desc: 'Rice, oil, spices, dal & all daily essentials at the lowest prices in town. Guaranteed!',
    cta: 'Shop Grocery',
    badge: '💰 Best Price',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=520&fit=crop&auto=format&q=85',
    bg: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 40%, #c2410c 100%)',
    accent: '#fb923c',
    tag: '#grocery',
  },
]

const slideVariants = {
  enter: dir => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: dir => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }
  const prev = () => go((current - 1 + slides.length) % slides.length)
  const next = () => go((current + 1) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [current])

  const s = slides[current]

  return (
    <section className="hero-slider">
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={s.id}
          className="hero-slide"
          style={{ background: s.bg }}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Left content */}
          <div className="hero-content">
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ background: s.accent + '22', color: s.accent, border: `1px solid ${s.accent}55` }}
            >
              {s.badge}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {s.headline} <span className="hero-highlight" style={{ color: s.accent }}>{s.highlight}</span>
            </motion.h1>

            <motion.p
              className="hero-bn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {s.sub}
            </motion.p>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {s.desc}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <a href={s.tag} className="hero-cta" style={{ background: s.accent, color: '#111' }}>
                <ShoppingBag size={18} />
                {s.cta}
              </a>
              <a href="#categories" className="hero-cta-ghost">Browse All</a>
            </motion.div>

            <motion.div
              className="hero-pills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <span><Truck size={13} /> Free Delivery ৳500+</span>
              <span><Star size={13} fill="currentColor" /> 4.9★ Rated</span>
              <span>🕐 Same Day</span>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            className="hero-img-wrap"
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero-img-ring" style={{ borderColor: s.accent + '44' }} />
            <img src={s.img} alt={s.headline} className="hero-img" />
            <div className="hero-img-glow" style={{ background: s.accent + '20' }} />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button className="hero-arrow left" onClick={prev}><ChevronLeft size={24} /></button>
      <button className="hero-arrow right" onClick={next}><ChevronRight size={24} /></button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => go(i)}
            style={i === current ? { background: slides[i].accent } : {}}
          />
        ))}
      </div>
    </section>
  )
}
