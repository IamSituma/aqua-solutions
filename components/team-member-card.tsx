'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  name?: string
  imageUrl?: string
  description?: string
  className?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  name = 'Jennie Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?fm=jpg&q=60',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
}: TeamMemberCardProps) {
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-col justify-center px-4', className)}
    >
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">
        {/* Portrait image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative w-full md:w-[36rem] h-80 md:h-[36rem] shrink-0 overflow-hidden rounded-2xl',
            isPositionRight && 'md:order-1'
          )}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover object-top duration-500 ease-[0.22,1,0.36,1] hover:scale-105"
          />
        </motion.div>

        {/* Info block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'flex flex-col gap-3 w-full md:w-auto',
            isPositionRight && 'md:items-end'
          )}
        >
          <p className="text-xs font-semibold tracking-[0.1em] text-[#0077b6] uppercase">
            {jobPosition}
          </p>

          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
            {name}
          </p>

          <p className={cn(
            'text-sm md:text-base leading-relaxed text-zinc-500 max-w-md',
            isPositionRight && 'md:text-right'
          )}>
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
