import { motion } from 'framer-motion'
import './Categories.css'

const cats = [
  { emoji: '🥦', label: 'Vegetables', bn: 'শাকসবজি', count: '120+', bg: '#dcfce7', color: '#166534', href: '#vegetables' },
  { emoji: '🍎', label: 'Fruits', bn: 'ফলমূল', count: '80+', bg: '#fef9c3', color: '#854d0e', href: '#fruits' },
  { emoji: '🐟', label: 'Fish', bn: 'মাছ', count: '50+', bg: '#dbeafe', color: '#1e40af', href: '#fish' },
  { emoji: '🥩', label: 'Meat', bn: 'মাংস', count: '30+', bg: '#fee2e2', color: '#991b1b', href: '#fish' },
  { emoji: '🍚', label: 'Rice & Dal', bn: 'চাল-ডাল', count: '40+', bg: '#fef3c7', color: '#92400e', href: '#grocery' },
  { emoji: '🛢️', label: 'Oil & Ghee', bn: 'তেল-ঘি', count: '25+', bg: '#fff7ed', color: '#9a3412', href: '#grocery' },
  { emoji: '🌶️', label: 'Spices', bn: 'মশলা', count: '60+', bg: '#fce7f3', color: '#9d174d', href: '#grocery' },
  { emoji: '🥛', label: 'Dairy', bn: 'দুগ্ধজাত', count: '35+', bg: '#f0fdf4', color: '#166534', href: '#grocery' },
  { emoji: '🍪', label: 'Snacks', bn: 'স্ন্যাক্স', count: '90+', bg: '#f5f3ff', color: '#5b21b6', href: '#snacks' },
  { emoji: '🧴', label: 'Household', bn: 'গৃহস্থালী', count: '70+', bg: '#e0f2fe', color: '#075985', href: '#household' },
  { emoji: '🌾', label: 'Grains', bn: 'শস্য', count: '30+', bg: '#fefce8', color: '#713f12', href: '#grocery' },
  { emoji: '🧈', label: 'Bakery', bn: 'বেকারি', count: '45+', bg: '#fff1f2', color: '#9f1239', href: '#snacks' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, scale: 0.75, y: 20 }, show: { opacity: 1, scale: 1, y: 0 } }

export default function Categories() {
  return (
    <section className="categories-sec" id="categories">
      <div className="section-wrap">
        <div className="sec-header">
          <div>
            <h2 className="sec-title">Shop by Category</h2>
            <p className="sec-sub">Everything you need, all in one place</p>
          </div>
          <a href="#" className="sec-link">All Categories</a>
        </div>

        <motion.div
          className="cats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cats.map(c => (
            <motion.a
              key={c.label}
              href={c.href}
              className="cat-card"
              variants={item}
              whileHover={{ scale: 1.06, y: -6 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="cat-emoji-wrap" style={{ background: c.bg }}>
                <span className="cat-emoji">{c.emoji}</span>
              </div>
              <p className="cat-label">{c.label}</p>
              <p className="cat-bn">{c.bn}</p>
              <span className="cat-count" style={{ color: c.color, background: c.bg }}>{c.count} items</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
