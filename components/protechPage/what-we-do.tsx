import { SVGProps, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

import s from '@/styles/proptechPage.module.css'

const todo = [
  {
    title: 'Property Management Apps',
    description: 'Want to create a high-end property management app? We can handle it. Uptech team develops apps that allow you to do anything. Monitor the status of a lease, check the progress of a project and automate the front office functions – all in one application.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.49414" y="8.90625" width="2" height="56" transform="rotate(-45 7.49414 8.90625)" fill="#22252A"></rect>
        <rect x="47.0918" y="7.49219" width="2" height="56" transform="rotate(45 47.0918 7.49219)" fill="#22252A"></rect>
        <circle cx="28" cy="28" r="16" fill="#0062CE"></circle>
        <rect x="21" y="25" width="14" height="10" fill="#FDC82F"></rect>
        <path d="M28 18L38.3923 26.25H17.6077L28 18Z" fill="#E10512"></path>
        <path d="M0 39H6L12 45V56H0V39Z" fill="#00BB86"></path>
        <path d="M6 45V39L12 45H6Z" fill="#22252A"></path>
        <path d="M44 0H50L56 6V17H44V0Z" fill="#00BB86"></path>
        <path d="M50 6V0L56 6H50Z" fill="#22252A"></path>
        <path d="M44 39H50L56 45V56H44V39Z" fill="#00BB86"></path>
        <path d="M50 45V39L56 45H50Z" fill="#22252A"></path>
        <path d="M0 0H6L12 6V17H0V0Z" fill="#00BB86"></path>
        <path d="M6 6V0L12 6H6Z" fill="#22252A"></path>
      </svg>
    )
  },
  {
    title: 'Location-based service',
    description: "Take advantage of a location-based feature for your real estate business. Tracking the device's location allows users to see the video tours of potential apartments while searching for them on the map. All in all, it improves the experience of your users.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L27 10L50 6L46 24L50 50L30 52L6 50L10 30L6 6Z" fill="#FDC82F"></path>
        <path d="M30 52L28.5 34.5M27 10L28.5 34.5M10 30L28.5 34.5M46 24L28.5 34.5" stroke="black" stroke-width="2"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 21.3667C40 21.3667 47 14.7997 47 9.49412C47 5.35523 43.866 2 40 2C36.134 2 33 5.35523 33 9.49412C33 14.7997 40 21.3667 40 21.3667ZM40 11.8C41.5464 11.8 42.8 10.5464 42.8 8.99997C42.8 7.45357 41.5464 6.19997 40 6.19997C38.4536 6.19997 37.2 7.45357 37.2 8.99997C37.2 10.5464 38.4536 11.8 40 11.8Z" fill="#0062CE"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 54.3667C9 54.3667 16 47.7997 16 42.4941C16 38.3552 12.866 35 9 35C5.13401 35 2 38.3552 2 42.4941C2 47.7997 9 54.3667 9 54.3667ZM9.00001 44.8C10.5464 44.8 11.8 43.5464 11.8 42C11.8 40.4536 10.5464 39.2 9.00001 39.2C7.45361 39.2 6.20001 40.4536 6.20001 42C6.20001 43.5464 7.45361 44.8 9.00001 44.8Z" fill="#E10512"></path>
      </svg>
    )
  },
  {
    title: 'Real estate listings',
    description: "No more 'For Sale' banners. Real estate listings collect all the properties available for sale or for rent on one platform. We know how to design intuitive and hassle-free listings, so real estate agents and home seekers stay happy.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0H36L52 16V56H4V0Z" fill="#E10512"></path>
        <circle cx="12" cy="10" r="2" fill="white"></circle>
        <circle cx="12" cy="22" r="2" fill="white"></circle>
        <circle cx="12" cy="34" r="2" fill="white"></circle>
        <circle cx="12" cy="46" r="2" fill="white"></circle>
        <rect x="20" y="8" width="22" height="4" fill="white"></rect>
        <rect x="20" y="20" width="22" height="4" fill="white"></rect>
        <rect x="20" y="32" width="22" height="4" fill="white"></rect>
        <rect x="20" y="44" width="22" height="4" fill="white"></rect>
        <path d="M36 16V0L52 16H36Z" fill="#FDC82F"></path>
      </svg>
    )
  },
  {
    title: 'Apps for real estate agents',
    description: 'Want to simplify the life of real estate agents with one app? We make it possible to manage properties in real-time, communicate with buyers, schedule visits, and close deals. All with one purpose – speed up the workflow.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="9" width="56" height="39" fill="#00BB86"></rect>
        <rect x="6" y="14" width="32" height="5" fill="#FDC82F"></rect>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5 17C51.5376 17 54 14.5376 54 11.5C54 8.46243 51.5376 6 48.5 6C45.4624 6 43 8.46243 43 11.5C43 14.5376 45.4624 17 48.5 17Z" fill="#0062CE"></path>
      </svg>
    )
  },
  {
    title: 'Real Estate Marketplace',
    description: "Thinking of an awesome real estate platform to connect realtors, brokers, and property managers with their customers? We are here to help. Monitor the status of a lease, sell, buy and rent private and commercial properties in one app.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="26" width="13" height="22" stroke="black" stroke-width="2"></rect>
        <rect width="43" height="55.9999" fill="#FDC82F"></rect>
        <rect x="29" y="11.3086" width="9" height="4" fill="#0062CE"></rect>
        <rect x="5" y="28" width="33" height="23" fill="#0062CE"></rect>
        <circle cx="13.1905" cy="12.6553" r="7.80768" fill="#E10512"></circle>
      </svg>
    )
  },
  {
    title: 'Virtual tour apps',
    description: "Virtual showing isn't a luxury anymore, it's a basic thing. Uptech team helps you create an easy-to-use real estate app that helps agents perform live virtual showings for remote homebuyers.",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg {...props} width="auto" height="auto" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1586_7908)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7962 44.8181C4.78571 37.0314 3.71208 26.0774 8.93512 17.0308C14.1561 7.98777 24.1736 3.44054 33.9186 4.7473C39.9291 12.534 41.0027 23.488 35.7797 32.5346C30.5587 41.5776 20.5412 46.1248 10.7962 44.8181Z" fill="#00BB86"></path>
          <rect width="2" height="30" transform="matrix(-0.866025 -0.5 -0.5 0.866025 25.2891 21.7031)" fill="#22252A"></rect>
          <circle r="12.7119" transform="matrix(-1 -8.14215e-08 -8.14215e-08 1 41.712 19.7119)" fill="#FDC82F"></circle>
          <path d="M45.5308 21.6878C45.5308 22.42 45.2596 23.0437 44.7173 23.559C44.1839 24.0652 43.4065 24.3726 42.3851 24.481V25.9997H41.2732V24.4946C40.6043 24.4494 39.9715 24.3274 39.3749 24.1285C38.7783 23.9296 38.3037 23.6765 37.9512 23.3692L38.5613 21.9997C38.8958 22.2709 39.3026 22.5014 39.7817 22.6912C40.2608 22.872 40.758 22.985 41.2732 23.0302V20.3183C40.6314 20.1646 40.0935 19.9974 39.6596 19.8166C39.2348 19.6268 38.8777 19.3556 38.5885 19.0031C38.2992 18.6415 38.1546 18.1669 38.1546 17.5793C38.1546 16.8471 38.4212 16.2234 38.9546 15.7081C39.4879 15.1929 40.2608 14.8855 41.2732 14.7861V13.2539H42.3851V14.759C42.8913 14.7861 43.3839 14.872 43.863 15.0166C44.3512 15.1613 44.776 15.3511 45.1376 15.5861L44.5817 16.9556C43.8947 16.5579 43.1625 16.3138 42.3851 16.2234V18.9624C43.0359 19.1161 43.5738 19.2833 43.9986 19.4641C44.4325 19.6449 44.7941 19.9161 45.0834 20.2776C45.3817 20.6302 45.5308 21.1002 45.5308 21.6878ZM39.9037 17.498C39.9037 17.7963 40.0212 18.0358 40.2563 18.2166C40.4913 18.3974 40.8303 18.5511 41.2732 18.6776V16.2641C40.8122 16.3364 40.4687 16.481 40.2427 16.698C40.0167 16.9149 39.9037 17.1816 39.9037 17.498ZM42.3851 23.0031C42.8642 22.9307 43.2167 22.7906 43.4427 22.5827C43.6777 22.3748 43.7952 22.1172 43.7952 21.8098C43.7952 21.5025 43.6732 21.2584 43.4291 21.0776C43.1851 20.8878 42.837 20.7296 42.3851 20.6031V23.0031Z" fill="#22252A"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44Z" fill="#FDC82F"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39 41C37.3431 41 36 39.6569 36 38C36 36.3431 37.3431 35 39 35C40.6569 35 42 36.3431 42 38C42 39.6569 40.6569 41 39 41Z" fill="#FDC82F"></path>
        </g>
        <defs>
          <clipPath id="clip0_1586_7908">
            <rect width="56" height="56" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    )
  },
]

export function WhatWeDo() {
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
              CUSTOM REAL ESTATE SOFTWARE DEVELOPMENT
              <span className='block text-base mt-2'>With 6 years of expertise in the real estate industry, our team provides the following range of solutions:</span>
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