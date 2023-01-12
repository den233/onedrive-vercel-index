import Link from 'next/link'
import { Inter } from '@next/font/google'

import s from '@/styles/proptechPage.module.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export function Clients() {
    return (
        <div className={`${s['services-testimonials']}`}>
            <div className={s['padding-content']}>
                <div className={s['container-new']}>
                    <div className={`${s['services-testimonials-slider_container']}`}>
                        <div className={s['services-testimonials-slid_item_wrap']}>
                            <div className={`${s['services-testimonials-slid_img_wrap']} ${s['services-testimonials-slid_img_daniel']}`}>
                                <img alt="client review real estate Software development Solution Services" loading="lazy" src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/62908bc01b2ec26bb6273491_Daniel_pi_alpha.webp" className="services-testimonials-slid_img" />
                            </div>
                            <div className={s['services-testimonials-slid_content']}>
                                <div className={s['services-testimonials-slid_subtitle']}>
                                    <Link href="#" className={s['w-inline-block']}>
                                        <div className={`${s['t-14-600-24']} ${s['t-14-600-24_caps']} ${s['t-14-600-24_gray']} ${s['t-14-600-24_line']}`}>Nomad</div>
                                    </Link></div><div className={s['t-32-800']}>Daniel Piehler</div>
                                <div className={s['services-testimonials-slid_position']}>
                                    <div className={s['t-16-400_main']}>Co-founder &amp; CPO</div>
                                </div>
                                <div className={s['services-testimonials-slid_desc']}>
                                    <img alt="" loading="lazy" src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/626bcd5ab9b30b79deb7bf0a_Quotation_green_(Start).svg" className={s['quot_slide_start']} />
                                    <div className={`${s['t-16-600-main']} ${s['t-16-600-main_li_30']}`}><span className={s['space_desctop']}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Uptech is able to take an idea from concept to development. They were always ready to teach me new methods and were willing to try new approaches, workshops, and exercises. I was definitely impressed by the intellectual rigor that goes behind their mindset and organization of the workflow.
                                        <strong className={`${s['quot_slide_end']} ${s['quot_slide_end_green']}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}