import { motion } from 'framer-motion'
import { Truck, Shield, RotateCcw, Clock, Leaf, CreditCard } from 'lucide-react'
import './FeatureBar.css'

const features = [
  { icon: Truck, title: 'Free Delivery', sub: 'Orders above ৳500', color: '#0D3B35' },
  { icon: Clock, title: 'Same Day Delivery', sub: 'Order before 2 PM', color: '#2563eb' },
  { icon: Leaf, title: '100% Fresh', sub: 'Farm-sourced daily', color: '#16a34a' },
  { icon: Shield, title: 'Quality Guaranteed', sub: 'Or money back', color: '#7c3aed' },
  { icon: RotateCcw, title: 'Easy Returns', sub: 'Within 24 hours', color: '#d97706' },
  { icon: CreditCard, title: 'Secure Payment', sub: 'bKash, Nagad, Card', color: '#db2777' },
]

export default function FeatureBar() {
  return (
    <section className="feature-bar">
      <div className="section-wrap">
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            >
              <div className="feat-icon" style={{ background: f.color + '15', color: f.color }}>
                <f.icon size={22} />
              </div>
              <div>
                <p className="feat-title">{f.title}</p>
                <p className="feat-sub">{f.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
