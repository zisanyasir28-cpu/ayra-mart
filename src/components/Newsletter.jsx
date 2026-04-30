import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Bell } from 'lucide-react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = e => { e.preventDefault(); if (email) setDone(true) }

  return (
    <section className="nl-sec">
      <div className="section-wrap nl-inner">
        <motion.div
          className="nl-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="nl-icon"><Bell size={28} /></div>
          <h2>Get the Best Deals First!</h2>
          <p>সাবস্ক্রাইব করুন এবং প্রতিদিনের অফার, নতুন পণ্য ও ডিসকাউন্ট সবার আগে পান।</p>
          <p className="nl-sub">Subscribe for exclusive offers, daily deals & new arrivals.</p>
        </motion.div>

        <motion.div
          className="nl-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {done ? (
            <div className="nl-success">
              <CheckCircle size={40} />
              <p>আপনি সফলভাবে সাবস্ক্রাইব করেছেন!</p>
              <span>You'll get the best deals first 🎉</span>
            </div>
          ) : (
            <form className="nl-form" onSubmit={submit}>
              <input type="text" placeholder="আপনার নাম / Your Name" className="nl-input" />
              <input type="email" placeholder="আপনার ইমেইল / Your Email" value={email} onChange={e => setEmail(e.target.value)} required className="nl-input" />
              <select className="nl-input nl-select">
                <option>Vegetables & Fruits</option>
                <option>Fish & Meat</option>
                <option>Rice & Grocery</option>
                <option>All Products</option>
              </select>
              <button type="submit" className="nl-btn">
                <Send size={17} /> Subscribe for Free Deals
              </button>
              <p className="nl-note">🔒 No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
