import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './PromoBanners.css'

const banners = [
  {
    title: 'Fresh Hilsa Fish',
    subtitle: 'ইলিশের মৌসুম!',
    desc: 'Up to 20% off on all premium fish today',
    cta: 'Order Now',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&h=300&fit=crop&auto=format&q=80',
    bg: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)',
    accent: '#38bdf8',
    href: '#fish',
  },
  {
    title: 'Rice & Grocery',
    subtitle: 'সেরা দামে সেরা পণ্য',
    desc: 'Get ৳50 cashback on orders above ৳1000',
    cta: 'Shop Now',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop&auto=format&q=80',
    bg: 'linear-gradient(135deg, #451a03 0%, #92400e 100%)',
    accent: '#fbbf24',
    href: '#grocery',
  },
  {
    title: 'Organic Vegetables',
    subtitle: 'রাসায়নিকমুক্ত সবজি',
    desc: 'Free delivery on fresh vegetables today',
    cta: 'Buy Fresh',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop&auto=format&q=80',
    bg: 'linear-gradient(135deg, #052e16 0%, #166534 100%)',
    accent: '#4ade80',
    href: '#vegetables',
  },
]

export default function PromoBanners() {
  return (
    <section className="promo-sec">
      <div className="section-wrap">
        <div className="promo-grid">
          {banners.map((b, i) => (
            <motion.a
              key={b.title}
              href={b.href}
              className="promo-card"
              style={{ background: b.bg }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="promo-content">
                <span className="promo-sub" style={{ color: b.accent }}>{b.subtitle}</span>
                <h3 className="promo-title">{b.title}</h3>
                <p className="promo-desc">{b.desc}</p>
                <div className="promo-btn" style={{ color: b.accent, borderColor: b.accent + '66' }}>
                  {b.cta} <ArrowRight size={15} />
                </div>
              </div>
              <div className="promo-img-wrap">
                <img src={b.img} alt={b.title} className="promo-img" loading="lazy" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
