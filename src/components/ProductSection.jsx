import ProductCard from './ProductCard'
import './ProductSection.css'

export default function ProductSection({ id, title, subtitle, products, onAdd, bg }) {
  return (
    <section className="prod-sec" id={id} style={bg ? { background: bg } : {}}>
      <div className="section-wrap">
        <div className="sec-header">
          <div>
            <h2 className="sec-title">{title}</h2>
            {subtitle && <p className="sec-sub">{subtitle}</p>}
          </div>
          <a href="#" className="sec-link">View All →</a>
        </div>
        <div className="prod-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
