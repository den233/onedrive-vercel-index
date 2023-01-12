import Link from 'next/link'
import { Inter } from '@next/font/google'

import s from '@/styles/proptechPage.module.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export function Hero() {
  return (
    <section className="pt-28 pb-10">
      <div className={s['padding-content']}>
        <div className={s['container-new']}>
          <div className={`flex flex-row flex-wrap`}>
            <div className="md:max-w-[55%] md:mx-auto lg:text-left space-y-5">
              <h1 className={`${inter.variable} ${s.title}`}>
                <span className="block">Real Estate Software Development Service</span>
              </h1>
              <p className={`leading-8 pb-10 ${s['hero-regular-16']}`}>
                Power up your real estate app with new technologies and Uptech team on board. We help you design, develop and launch a top-notch product that will beat the competitors and win the users’ hearts. How? We have a team of professionals with a product mindset and real estate software development expertise.
              </p>
              <div>
                <Link className='bg-gray-800 p-3 text-white font-bold  border border-transparent hover:border-black text-base' href='/contact'>
                  Get a quote
                </Link>
              </div>
            </div>
            <div className="mt-10 sm:mt-12 md:max-w-[40%] lg:mt-0 lg:col-span-1">
              <div className="sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 mt-16">
                <img src="/assets/svg/llustration.svg" loading="lazy" alt="financial software development services" class="img-size" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}