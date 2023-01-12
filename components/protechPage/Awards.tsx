import Link from 'next/link'
import { Inter } from '@next/font/google'

import s from '@/styles/proptechPage.module.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export function Awards() {
    return (
        <div className={s['services-main_awards']}>
            <div className={s['container_original']}>
                <div className={s['services-main_awards_wrap']}>
                    <div className={`${s['hero-home-award_item']} ${s['award_item-services_page']} ${s['award_item-services_page_first']}`}>
                        <div className={s['award-left_col']}>
                            <div className={s['award-review-text']}>
                                <div className={s['regular_14']}>Reviewed on</div>
                            </div>
                            <div className={`${s['avard-logo_wrap']} ${s['avard-logo_wrap_first']}`}>
                                <img src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/6260322d77e461566364aebd_clutch.svg" loading="lazy" alt="Custom Software Solution Services" className={s['avard-logo']} />
                            </div></div><div className={s['award-right_col']}>
                            <div className={s['avard-stars']}>
                                <img src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/62964871ed62e46d811da5ce_Raring%205%20Star.svg" loading="lazy" alt="" className={s["avard-star_icon"]} />
                            </div>
                            <div className={s['award-revive-text_2']}>
                                <div className={`${s['medium_16']} ${s['medium_16_caps']}`}>33 reviews</div>
                            </div>
                        </div>
                    </div>
                    <div   className={`${s['hero-home-award_item']} ${s['award_item-services_page']}`}>
                        <div className={s['award-left_col']}>
                            <div className={s['avard-stars']}>
                                <img src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/62964871ed62e46d811da5ce_Raring%205%20Star.svg" loading="lazy" alt="" className="avard-star_icon" /></div>
                            <div className="avard-logo_wrap">
                                <img src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/626037f9b6d9d1adb5b94692_goodfirms.svg" loading="lazy" alt="Custom Software Solution Services" className={s['avard-logo']}  /></div>
                        </div>
                    </div>
                    <div   className={`${s['hero-home-award_item']} ${s['award_item-services_page']}`}>
                        <div className={s['award-left_col']}>
                        <div className={s['award-review-text']}><div className={s['regular_14']}>Honorable mention</div></div>
                            <div className="avard-logo_wrap">
                                <img src="https://assets.website-files.com/5e305a6cb7083207d77a89a2/6260382c0794e3394d49f6e6_awwwards.svg" loading="lazy" alt="Custom Software Solution Services" className={s['avard-logo']} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}