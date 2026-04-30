import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const reviews = [
  { name: 'Rahim Uddin', loc: 'Sirajganj Sadar', review: 'সিরাজগঞ্জ বাজার থেকে প্রতিদিন তাজা শাকসবজি পাই। দাম একদম সঠিক, ডেলিভারিও খুব দ্রুত!', rating: 5, avatar: '👨' },
  { name: 'Nasima Begum', loc: 'Kazipur', review: 'Amazing quality! The hilsa fish I ordered was super fresh. Delivery was fast and packaging was excellent.', rating: 5, avatar: '👩' },
  { name: 'Karim Sheikh', loc: 'Belkuchi', review: 'Best grocery delivery in Sirajganj! The chicken and beef are always fresh. Highly recommend to everyone.', rating: 5, avatar: '👨‍💼' },
  { name: 'Fatema Khatun', loc: 'Shahjadpur', review: 'আমি প্রতি সপ্তাহে এখান থেকে অর্ডার করি। চাল, তেল, মশলা সবকিছু এক জায়গায় পাই। অসাধারণ সেবা!', rating: 5, avatar: '👩‍🍳' },
]

export default function Testimonials() {
  return (
    <section className="testi-sec">
      <div className="section-wrap">
        <div className="sec-header" style={{ justifyContent: 'center', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>What Our Customers Say</h2>
          <p className="sec-sub">আমাদের গ্রাহকদের কথা</p>
        </div>
        <div className="testi-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="testi-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote size={28} className="testi-quote" />
              <p className="testi-text">{r.review}</p>
              <div className="testi-stars">
                {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} fill="#f6c90e" stroke="#f6c90e" />)}
              </div>
              <div className="testi-author">
                <div className="testi-avatar">{r.avatar}</div>
                <div>
                  <p className="testi-name">{r.name}</p>
                  <p className="testi-loc">{r.loc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
