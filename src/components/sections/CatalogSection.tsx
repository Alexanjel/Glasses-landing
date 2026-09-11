import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Info, Check, SlidersHorizontal } from 'lucide-react'
import { Language, Product, ProductCategory } from '../../types'
import { products } from '../../data/products'
import { translations } from '../../data/translations'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { ProductModal } from '../catalog/ProductModal'
import { cn } from '../../utils/cn'

export interface CatalogSectionProps {
  lang: Language
  onBookTryOn: (productName: string) => void
}

type TabKey = ProductCategory

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  lang,
  onBookTryOn,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('all')
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({})

  const t = translations[lang]

  const categories: { key: TabKey; label: string; count: number }[] = [
    { key: 'all', label: t.catalog.tabs.all, count: products.length },
    {
      key: 'frames',
      label: t.catalog.tabs.frames,
      count: products.filter((p) => p.category === 'frames').length,
    },
    {
      key: 'ready',
      label: t.catalog.tabs.ready,
      count: products.filter((p) => p.category === 'ready').length,
    },
    {
      key: 'lenses',
      label: t.catalog.tabs.lenses,
      count: products.filter((p) => p.category === 'lenses').length,
    },
  ]

  const filteredProducts =
    activeTab === 'all'
      ? products
      : products.filter((product) => product.category === activeTab)

  const handleColorSelect = (e: React.MouseEvent, productId: string, colorIndex: number) => {
    e.stopPropagation()
    setSelectedColors((prev) => ({ ...prev, [productId]: colorIndex }))
  }

  const handleOpenModal = (product: Product) => {
    setSelectedProductForModal(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleCardTryOn = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    const colorIdx = selectedColors[product.id] ?? 0
    const chosenColor = product.colors[colorIdx]
    const colorSuffix = chosenColor ? ` (${chosenColor.name})` : ''
    onBookTryOn(`${product.name}${colorSuffix}`)
  }

  return (
    <section
      id="catalog"
      className="relative bg-slate-50 py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex justify-center mb-4"
          >
            <Badge variant="brand">{t.catalog.badge}</Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-dark-900 leading-[1.18]"
          >
            {t.catalog.title}
          </motion.h2>
        </div>

        {/* Category Filter Tabs: Row 1 - 'Усі категорії' centered */}
        <div className="flex justify-center mb-3.5">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={cn(
              'px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-2 whitespace-nowrap border',
              activeTab === 'all'
                ? 'bg-dark-900 text-white border-transparent shadow-md shadow-black/10'
                : 'bg-white text-slate-700 hover:text-dark-900 hover:bg-slate-100 border-slate-200 shadow-xs'
            )}
          >
            <span>{t.catalog.tabs.all}</span>
            <span
              className={cn(
                'text-[11px] px-2 py-0.5 rounded-full font-mono font-medium',
                activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              )}
            >
              {products.length}
            </span>
          </button>
        </div>

        {/* Category Filter Tabs: Row 2 - 3 Categories in one clean row with rounded-full pills */}
        <div className="flex justify-center mb-12 sm:mb-14 px-2">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-xs max-w-full overflow-x-auto no-scrollbar gap-1 sm:gap-1.5">
            {categories
              .filter((tab) => tab.key !== 'all')
              .map((tab) => {
                const isActive = activeTab === tab.key
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={cn(
                      'relative px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 sm:gap-2 whitespace-nowrap',
                      isActive
                        ? 'bg-dark-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-dark-900 hover:bg-slate-100'
                    )}
                  >
                    <span className="whitespace-nowrap">{tab.label}</span>
                    <span
                      className={cn(
                        'text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full font-mono font-medium',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-500'
                      )}
                    >
                      {tab.count}
                    </span>
                  </button>
                )
              })}
          </div>
        </div>

        {/* Products Grid with smooth opacity transition without jumping or stretching */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => {
              const colorIdx = selectedColors[product.id] ?? 0
              const currentColor = product.colors[colorIdx] || product.colors[0]
              const displayImage = currentColor?.image || product.image

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Top: Tag & Code in one clean line without wrapping */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 flex-nowrap">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 whitespace-nowrap">
                        {product.tags[lang][0]}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200/60 whitespace-nowrap shrink-0">
                        {product.code}
                      </span>
                    </div>

                    {/* Image Box with Transparent PNG */}
                    <div
                      onClick={() => handleOpenModal(product)}
                      className="relative h-48 sm:h-52 w-full bg-slate-50/80 rounded-2xl p-4 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-slate-100/80 transition-colors"
                    >
                      <motion.img
                        key={displayImage}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        src={displayImage}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(10,13,20,0.12)] group-hover:scale-105 transition-transform duration-300 ease-out"
                      />

                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1.5 rounded-xl border border-slate-200 text-slate-700 shadow-xs">
                        <Info className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Color Swatches */}
                    {product.colors.length > 1 && (
                      <div className="flex items-center gap-2 mt-4">
                        <span className="text-[11px] text-slate-400 font-medium">Колір:</span>
                        <div className="flex items-center gap-1.5">
                          {product.colors.map((color, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => handleColorSelect(e, product.id, idx)}
                              className={cn(
                                'w-5 h-5 rounded-full transition-transform focus:outline-none flex items-center justify-center border border-black/10',
                                colorIdx === idx
                                  ? 'ring-2 ring-dark-900 ring-offset-1 scale-110'
                                  : 'hover:scale-105 opacity-80'
                              )}
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                              aria-label={color.name}
                            >
                              {colorIdx === idx && (
                                <Check
                                  className={cn(
                                    'w-3 h-3',
                                    color.hex.toLowerCase() === '#ffffff' ||
                                      color.hex.toLowerCase() === '#e2e8f0'
                                      ? 'text-dark-900'
                                      : 'text-white'
                                  )}
                                />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Product Name & Specs */}
                    <div className="mt-4">
                      <h3
                        onClick={() => handleOpenModal(product)}
                        className="text-lg font-bold text-dark-900 hover:text-brand-600 transition-colors cursor-pointer"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {product.shape} • {product.weight}
                      </p>

                      {product.specs.lensWidth > 0 && (
                        <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/60">
                          <span>Розміри:</span>
                          <span className="font-semibold text-dark-900">
                            {product.specs.lensWidth}-{product.specs.bridgeWidth}-{product.specs.templeLength} мм
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                          Ціна
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-extrabold text-dark-900 tracking-tight">
                            {product.price.toLocaleString('uk-UA')} ₴
                          </span>
                          {product.oldPrice && (
                            <span className="text-xs text-slate-400 line-through">
                              {product.oldPrice.toLocaleString('uk-UA')} ₴
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleOpenModal(product)}
                        icon={<SlidersHorizontal className="w-3.5 h-3.5" />}
                        className="w-full text-xs font-semibold py-2 px-2"
                      >
                        {t.catalog.detailsBtn}
                      </Button>

                      <Button
                        variant="dark"
                        size="sm"
                        onClick={(e) => handleCardTryOn(e, product)}
                        icon={<Eye className="w-3.5 h-3.5" />}
                        className="w-full text-xs font-semibold py-2 px-2 shadow-xs"
                      >
                        {t.catalog.tryOnBtn}
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProductForModal}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        lang={lang}
        onBookTryOn={onBookTryOn}
      />
    </section>
  )
}

export default CatalogSection
