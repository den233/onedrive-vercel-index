import { SVGProps, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

import s from '@/styles/proptechPage.module.css'

const todo = [
  {
    title: 'Domain expertise',
    description: '80% of our projects come from the past client recommendations, which demonstrates a high satisfaction level with all our services.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1877_12016)">
          <rect x="10.3535" y="49.3086" width="36" height="2" transform="rotate(-45 10.3535 49.3086)" fill="#22252A"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5 11.5L56.5 0.5L56.5 22.5L35.5 11.5Z" fill="#00BB86"></path>
          <rect width="25" height="25" rx="12.5" fill="#E10512"></rect>
          <rect y="37" width="56" height="19" fill="#0062CE"></rect>
        </g>
        <defs>
          <clipPath id="clip0_1877_12016">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Smooth communication',
    description: "We don’t hide behind bureaucratic processes. We build transparent relationships with clients through honest communication, checkins, updates.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1877_12021)">
          <rect x="39.7988" y="4.44922" width="34" height="2" transform="rotate(135 39.7988 4.44922)" fill="#22252A"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 15L0 9.53674e-07H17L8.5 15Z" fill="#00BB86"></path>
          <rect y="23" width="34" height="33" fill="#FDC82F"></rect>
          <rect x="38" y="38" width="18" height="18" rx="9" fill="#E10512"></rect>
        </g>
        <defs>
          <clipPath id="clip0_1877_12021">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Follow compliance and regulations',
    description: "We choose the 3rd party services carefully. If we integrate a tool, you can be 100% sure that it’s compliant.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1877_12026)">
          <g clip-path="url(#clip1_1877_12026)">
            <rect width="36" height="2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 8.77734 27.2344)" fill="#22252A"></rect>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 23L47 56L10 56L28.5 23Z" fill="#00BB86"></path>
            <rect x="56" y="19" width="19" height="19" transform="rotate(-180 56 19)" fill="#FDC82F"></rect>
            <rect x="19" y="19" width="19" height="19" rx="9.5" transform="rotate(-180 19 19)" fill="#0062CE"></rect>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1877_12026">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
          <clipPath id="clip1_1877_12026">
            <rect width="56" height="56" fill="white" transform="translate(56 56) rotate(-180)"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Top-notch user experience',
    description: 'We stay dedicated to users. We make them fall in love with your product from the first click.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1877_12031)">
          <rect x="56" y="56" width="56" height="19" transform="rotate(-180 56 56)" fill="#0062CE"></rect>
          <rect x="50.8965" y="2.58203" width="22" height="2" transform="rotate(135 50.8965 2.58203)" fill="#22252A"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0L28 28H0V0L28 0Z" fill="#E10512"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M47 17L38 0L56 0L47 17Z" fill="#00BB86"></path>
        </g>
        <defs>
          <clipPath id="clip0_1877_12031">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'Dedicated team',
    description: "The Uptech team is the secret to great results. You'll work with professionals who ask questions, offer solutions, and treat your product as their own.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1877_12036)">
          <rect x="18" y="18" width="18" height="18" rx="9" transform="rotate(-180 18 18)" fill="#E10512"></rect>
          <rect width="36" height="2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 24.3535 9.58984)" fill="#22252A"></rect>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56 0L56 56H37V0L56 0Z" fill="#0062CE"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 28L28 56H0V28L28 28Z" fill="#00BB86"></path>
        </g>
        <defs>
          <clipPath id="clip0_1877_12036">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: 'A new perspective of the product',
    description: "We don't simply do the tasks. We study your business and share our knowledge to make the product that matters.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1877_12041)">
      <rect width="16" height="16" transform="matrix(0 1 1 0 0 40)" fill="#00BB86"></rect>
      <rect x="33.7324" y="35.2227" width="36" height="2" transform="rotate(-135 33.7324 35.2227)" fill="#22252A"></rect>
      <rect width="34" height="34" rx="17" transform="matrix(0 1 1 0 22 22)" fill="#E10512"></rect>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M37 10L56 20V0L37 10Z" fill="#FDC82F"></path>
      </g>
      <defs>
      <clipPath id="clip0_1877_12041">
      <rect width="56" height="56" fill="white"></rect>
      </clipPath>
      </defs>
      </svg>
    )
  },
]

export function Why() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    function setProperty(property: string, value: string | null) {
      document.documentElement.style.setProperty(property, value)
    }

    function getProperty(property: string) {
      const val = getComputedStyle(document.documentElement).getPropertyValue(property)
      return val
    }

    function updateStyles() {
      const currVal = getProperty('--background-color')
      if (isInView) {
        console.log('RecognizedBy', currVal)
        setProperty(
          '--background-color',
          `#fff`
        )
        setProperty(
          '--text-color',
          `theme('colors.gray.500')`
        )
      }
    }

    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isInView])
  return (
    <div className={s['section-why']}>
      <div className={s['padding-content']}>
        <div className={s['container-new']}>
          <div className='mx-auto  ml-6 py-10'>
            <h2 className={s['h-2']}>
              WHY WORK WITH US
              <span className='block text-base mt-2'>How we help you boost your real estate business</span>
            </h2>
            <div className='mt-10 grid lgmax:grid-cols-1 grid-cols-2 gap-10' ref={ref}>
              {todo.map((item, index) => (
                <div key={index} className='flex'>
                  <div className='w-12 h-12 flex items-center justify-center'>
                    <item.icon className="h-48 w-48" aria-hidden="true" />
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-xl font-bold'>{item.title}</h3>
                    <p className='mt-2'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}