import React from 'react'

const HeroSection = ({name, email}) => {
  return (
    <section className='relative bg-hero-bg-mobile flex min-h-[40vh] mb-10 lg:mb-0 lg:min-h-[fit-content] bg-no-repeat bg-cover lg:bg-radial lg:radial-bg lg:my-8 lg:mx-4 rounded-b-[3rem] lg:rounded-xl'>
        <div className='lg:bg-hero-bg my-auto w-full bg-no-repeat bg-contain bg-right flex-center justify-between py-16 px-4'>
            <div className='my-auto space-y-5'>
                <h1 className='text-5xl font-bold text-retink-deep'>Hey {name}!</h1>
                <p className='text-xl font-medium text-retink-deep'>Lets create something awesome today ✨💫</p>
                <button className='hidden lg:block slide duration-500 hover:text-white bg-white py-2 px-8 rounded-3xl text-retink-primary  border-retink-primary border-[1px]'>Start Creating</button>
            </div>
            <div className='space-y-8 hidden lg:block'>
                <div className='bg-retink-primary-light cursor-pointer  ml-auto w-fit flex-center gap-3 px-5 py-2 rounded'>
                    <p>{email}</p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                            <path d="M0.414938 1.65079L4.24072 6.1142C4.60014 6.53353 5.23144 6.58209 5.65076 6.22267C5.68964 6.18934 5.72591 6.15308 5.75923 6.1142L9.58501 1.65079C9.94443 1.23147 9.89587 0.600166 9.47654 0.240743C9.2953 0.0853922 9.06446 0 8.82575 0L1.17419 0C0.621909 0 0.174194 0.447715 0.174194 1C0.174194 1.23871 0.259586 1.46955 0.414938 1.65079Z" fill="#1D1437"/>
                        </svg>
                    </span>
                </div>
                <div className='space-y-8 py-5 px-2 bg-[#fff]/10 backdrop-blur-md'>
                    <p>You should have more engagement by 6pm today, try posting then.  📆 </p>
                    <p>Try our SEO optimization tool to increase engagement by 40% 🔥</p>
                </div>
            </div>

        </div>
        <div className='w-full px-10 absolute -bottom-5 lg:hidden'>
        <label className='border-[#EBEAEF] shadow-md bg-white flex-center gap-3 rounded border-[1px] px-5 py-4'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M19.0538 18.0462C19.3321 18.3244 19.3321 18.7756 19.0538 19.0538C18.7756 19.3321 18.3244 19.3321 18.0462 19.0538L14.6262 15.6338C14.3479 15.3556 14.3479 14.9044 14.6262 14.6262C14.9044 14.3479 15.3556 14.3479 15.6338 14.6262L19.0538 18.0462ZM8.28999 15.8425C4.11886 15.8425 0.737488 12.4611 0.737488 8.28999C0.737488 4.11886 4.11886 0.737488 8.28999 0.737488C12.4611 0.737488 15.8425 4.11886 15.8425 8.28999C15.8425 12.4611 12.4611 15.8425 8.28999 15.8425ZM8.28999 14.4175C11.6741 14.4175 14.4175 11.6741 14.4175 8.28999C14.4175 4.90586 11.6741 2.16249 8.28999 2.16249C4.90586 2.16249 2.16249 4.90586 2.16249 8.28999C2.16249 11.6741 4.90586 14.4175 8.28999 14.4175ZM4.77499 7.71999C4.77499 7.98232 4.56232 8.19499 4.29999 8.19499C4.03765 8.19499 3.82499 7.98232 3.82499 7.71999C3.82499 5.56884 5.56884 3.82499 7.71999 3.82499C7.98232 3.82499 8.19499 4.03765 8.19499 4.29999C8.19499 4.56232 7.98232 4.77499 7.71999 4.77499C6.09351 4.77499 4.77499 6.09351 4.77499 7.71999Z" fill="#463D61"/>
                    </svg>
                </span>
                <input className='w-full focus:outline-none' type="text" placeholder='Search for templates, projects, etc' />
            </label>
        </div>
    </section>
  )
}

export default HeroSection