import Link from 'next/link'
import { Inter } from '@next/font/google'

import s from '@/styles/proptechPage.module.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export function Looking() {
  return (
    <section className={s['section-looking']}>
      <div className={s['padding-content']}>
        <div className={s['container-940']}>
          <h2 className={`${s['h-2']} ${s['white']}`}>Level up your business with digital solution</h2>
          <Link className={s['button_contact']} href='/contact'>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}