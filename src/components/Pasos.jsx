import React from 'react'
import { useTranslation } from 'react-i18next';
import foto1 from '..//..//public/Asesoria.svg'
import cotizacion from '..//..//public/cotizacion.svg'
const Pasos = () => {
    const { t } = useTranslation();
  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[url(/background.svg)] bg-cover">
    <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8">
    <h2 class="font-headline text-2xl font-semibold sm:text-3xl text-center">Revamp Your Website in Three Steps</h2>

    <div class="grid sm:grid-cols-4 gap-16 sm:gap-8 mt-16 sm:mt-24">
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-gray-700 rounded-full flex items-center justify-center">
                    <img src={foto1} class="w-28 h-28"/>
                </div>
                <div class="absolute inset-0 -translate-x-1 -translate-y-1 bg-orange-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step1.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step1.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-gray-700 rounded-full shadow flex items-center justify-center">
                    <img src={cotizacion} class="w-16 h-16" alt="Export icon"/>

                </div>
                <div class="absolute inset-0 -translate-x-1 -translate-y-1 bg-orange-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step2.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step2.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                   
                   
                 

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg> */}



                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step3.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step3.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step4.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step4.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step5.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step5.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step6.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step6.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step7.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step7.description')}</p>
        </div>
        <div class="text-center">
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
                <div
                    class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                        stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                        </path>
                    </svg>
                </div>
                <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 class="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{t('step8.title')}</h3>
            <p class="leading-relaxed mt-4">{t('step8.description')}</p>
        </div>
    </div>
</div>
</section>
  )
}

export default Pasos