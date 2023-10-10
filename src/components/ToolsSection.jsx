import React from 'react'
import ToolCard from './cards/ToolCard'

const ToolsSection = () => {
  return (
    <section>
        <div className='px-5'>
            <h1 className='text-2xl my-2 text-retink-deep font-semibold'>Most Popular Tools</h1>
            <p className='text-lg text-[#77737F] font-medium'>Explore the trending tools to create your copies fast</p>
            <div className='bg-white lg:bg-[#F4F3F6] my-5 lg:px-5 py-5 rounded-3xl lg:shadow'>
            <h2 className='font-semibold text-xl'>Social media</h2>
                <div className='w-[90vw] sm:w-[95vw] my-2 lg:w-full overflow-x-scroll lg:overflow-auto'>
                    <div className='w-[fit-content] overflow-hidden lg:w-full flex lg:flex-wrap gap-5 px-3 py-5'>
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z" fill="#EA7E00"/>
                        </svg>}
                        title='Blog writing'
                        text='Generate the best blog post to fit your audience with just few clicks of a button'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4559 5.41632C21.5509 5.56052 21.5932 5.7331 21.5757 5.9049C21.5582 6.07671 21.482 6.23721 21.3599 6.35932L12.1669 15.5513C12.0728 15.6453 11.9555 15.7126 11.8269 15.7463L7.99787 16.7463C7.8713 16.7793 7.7383 16.7787 7.61206 16.7444C7.48583 16.7101 7.37076 16.6434 7.27826 16.5509C7.18577 16.4584 7.11908 16.3434 7.0848 16.2171C7.05053 16.0909 7.04986 15.9579 7.08287 15.8313L8.08287 12.0033C8.11206 11.8884 8.16713 11.7817 8.24387 11.6913L17.4709 2.47032C17.6115 2.32987 17.8021 2.25098 18.0009 2.25098C18.1996 2.25098 18.3902 2.32987 18.5309 2.47032L21.3599 5.29832C21.3958 5.33432 21.4279 5.37386 21.4559 5.41632ZM19.7689 5.82832L18.0009 4.06132L9.48287 12.5793L8.85787 14.9723L11.2509 14.3473L19.7689 5.82832Z" fill="#00C48C"/>
                        <path d="M19.6415 17.1599C19.9149 14.8238 20.0021 12.4698 19.9025 10.1199C19.9004 10.0645 19.9096 10.0093 19.9298 9.95769C19.9499 9.90608 19.9805 9.85916 20.0195 9.81989L21.0035 8.83589C21.0304 8.80885 21.0646 8.79014 21.1018 8.78203C21.1391 8.77392 21.1779 8.77674 21.2136 8.79015C21.2493 8.80356 21.2803 8.827 21.303 8.85764C21.3257 8.88828 21.3391 8.92483 21.3415 8.96289C21.5267 11.7541 21.4565 14.5564 21.1315 17.3349C20.8955 19.3569 19.2715 20.9419 17.2585 21.1669C13.7639 21.5539 10.2372 21.5539 6.74254 21.1669C4.73054 20.9419 3.10554 19.3569 2.86954 17.3349C2.45494 13.7903 2.45494 10.2095 2.86954 6.66489C3.10554 4.64289 4.72954 3.05789 6.74254 2.83289C9.39491 2.53877 12.0673 2.46752 14.7315 2.61989C14.7697 2.62262 14.8062 2.63623 14.8369 2.6591C14.8675 2.68196 14.8909 2.71313 14.9044 2.74891C14.9179 2.78468 14.9208 2.82357 14.9128 2.86096C14.9049 2.89835 14.8864 2.93268 14.8595 2.95989L13.8665 3.95189C13.8277 3.99064 13.7812 4.02101 13.7302 4.04113C13.6791 4.06125 13.6244 4.0707 13.5695 4.06889C11.3463 3.99331 9.1205 4.07853 6.90954 4.32389C6.26348 4.39539 5.6604 4.68261 5.1977 5.13914C4.735 5.59567 4.43972 6.19485 4.35954 6.83989C3.95859 10.2682 3.95859 13.7316 4.35954 17.1599C4.43972 17.8049 4.735 18.4041 5.1977 18.8606C5.6604 19.3172 6.26348 19.6044 6.90954 19.6759C10.2645 20.0509 13.7365 20.0509 17.0925 19.6759C17.7386 19.6044 18.3417 19.3172 18.8044 18.8606C19.2671 18.4041 19.5614 17.8049 19.6415 17.1599Z" fill="#00C48C"/>
                    </svg>}
                        title='Product description'
                        text='Instantly generate engaging product descriptions that sell'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.2498 3C4.00727 3 3 4.00727 3 5.2498V18.7486C3 19.9911 4.00727 20.9984 5.2498 20.9984H11.1644L11.5202 19.5754C11.5266 19.5497 11.5333 19.5241 11.5402 19.4985H5.2498C4.83563 19.4985 4.49987 19.1628 4.49987 18.7486V5.2498C4.49987 4.83563 4.83563 4.49987 5.2498 4.49987H18.7486C19.1628 4.49987 19.4985 4.83563 19.4985 5.2498V11.2317C19.9774 11.0412 20.492 10.9678 20.9984 11.0115V5.2498C20.9984 4.00727 19.9911 3 18.7486 3H5.2498ZM15.3539 14.9989H11.2493C10.835 14.9989 10.4993 15.3347 10.4993 15.7489C10.4993 16.163 10.835 16.4988 11.2493 16.4988H13.8541L15.3539 14.9989ZM8.74949 8.24954C8.74949 8.80177 8.30181 9.24945 7.74958 9.24945C7.19735 9.24945 6.74967 8.80177 6.74967 8.24954C6.74967 7.69731 7.19735 7.24963 7.74958 7.24963C8.30181 7.24963 8.74949 7.69731 8.74949 8.24954ZM11.2493 7.4996C10.8351 7.4996 10.4993 7.83536 10.4993 8.24954C10.4993 8.66371 10.8351 8.99947 11.2493 8.99947H16.7488C17.163 8.99947 17.4987 8.66371 17.4987 8.24954C17.4987 7.83536 17.163 7.4996 16.7488 7.4996H11.2493ZM11.2493 11.2493C10.835 11.2493 10.4993 11.585 10.4993 11.9992C10.4993 12.4134 10.835 12.7491 11.2493 12.7491H16.7486C17.1629 12.7491 17.4985 12.4134 17.4985 11.9992C17.4985 11.585 17.1629 11.2493 16.7486 11.2493H11.2493ZM7.74958 12.9991C8.30181 12.9991 8.74949 12.5515 8.74949 11.9992C8.74949 11.447 8.30181 10.9993 7.74958 10.9993C7.19735 10.9993 6.74967 11.447 6.74967 11.9992C6.74967 12.5515 7.19735 12.9991 7.74958 12.9991ZM8.74949 15.7489C8.74949 16.3011 8.30181 16.7488 7.74958 16.7488C7.19735 16.7488 6.74967 16.3011 6.74967 15.7489C6.74967 15.1966 7.19735 14.749 7.74958 14.749C8.30181 14.749 8.74949 15.1966 8.74949 15.7489ZM19.0984 12.6686L13.1965 18.5705C12.8524 18.9146 12.6083 19.3458 12.4903 19.8179L12.0327 21.6484C11.8336 22.4445 12.5547 23.1656 13.3508 22.9666L15.1813 22.5089C15.6534 22.3909 16.0846 22.1468 16.4287 21.8027L22.3306 15.9008C23.2231 15.0082 23.2231 13.5611 22.3306 12.6686C21.4381 11.7761 19.991 11.7761 19.0984 12.6686Z" fill="url(#paint0_linear_1_1660)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_1660" x1="13" y1="-7" x2="-7" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#754DE8"/>
                            <stop offset="1" stop-color="#EA0022"/>
                        </linearGradient>
                        </defs>
                    </svg>}
                        title='Article writer'
                        text='Automatically create unique factual articles at the touch of a button'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z" fill="#EA7E00"/>
                        </svg>}
                        title='Blog writing'
                        text='Generate the best blog post to fit your audience with just few clicks of a button'
                    />
                    </div>
                </div>
                <h2 className='font-semibold text-xl'>Social media</h2>
                <div className='w-[90vw] sm:w-[95vw] my-2 lg:w-full overflow-x-scroll lg:overflow-auto'>
                    <div className='w-[fit-content] no-scrollbar overflow-hidden lg:w-full flex lg:flex-wrap gap-5 px-3 py-5'>
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z" fill="#EA7E00"/>
                        </svg>}
                        title='Blog writing'
                        text='Generate the best blog post to fit your audience with just few clicks of a button'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4559 5.41632C21.5509 5.56052 21.5932 5.7331 21.5757 5.9049C21.5582 6.07671 21.482 6.23721 21.3599 6.35932L12.1669 15.5513C12.0728 15.6453 11.9555 15.7126 11.8269 15.7463L7.99787 16.7463C7.8713 16.7793 7.7383 16.7787 7.61206 16.7444C7.48583 16.7101 7.37076 16.6434 7.27826 16.5509C7.18577 16.4584 7.11908 16.3434 7.0848 16.2171C7.05053 16.0909 7.04986 15.9579 7.08287 15.8313L8.08287 12.0033C8.11206 11.8884 8.16713 11.7817 8.24387 11.6913L17.4709 2.47032C17.6115 2.32987 17.8021 2.25098 18.0009 2.25098C18.1996 2.25098 18.3902 2.32987 18.5309 2.47032L21.3599 5.29832C21.3958 5.33432 21.4279 5.37386 21.4559 5.41632ZM19.7689 5.82832L18.0009 4.06132L9.48287 12.5793L8.85787 14.9723L11.2509 14.3473L19.7689 5.82832Z" fill="#00C48C"/>
                        <path d="M19.6415 17.1599C19.9149 14.8238 20.0021 12.4698 19.9025 10.1199C19.9004 10.0645 19.9096 10.0093 19.9298 9.95769C19.9499 9.90608 19.9805 9.85916 20.0195 9.81989L21.0035 8.83589C21.0304 8.80885 21.0646 8.79014 21.1018 8.78203C21.1391 8.77392 21.1779 8.77674 21.2136 8.79015C21.2493 8.80356 21.2803 8.827 21.303 8.85764C21.3257 8.88828 21.3391 8.92483 21.3415 8.96289C21.5267 11.7541 21.4565 14.5564 21.1315 17.3349C20.8955 19.3569 19.2715 20.9419 17.2585 21.1669C13.7639 21.5539 10.2372 21.5539 6.74254 21.1669C4.73054 20.9419 3.10554 19.3569 2.86954 17.3349C2.45494 13.7903 2.45494 10.2095 2.86954 6.66489C3.10554 4.64289 4.72954 3.05789 6.74254 2.83289C9.39491 2.53877 12.0673 2.46752 14.7315 2.61989C14.7697 2.62262 14.8062 2.63623 14.8369 2.6591C14.8675 2.68196 14.8909 2.71313 14.9044 2.74891C14.9179 2.78468 14.9208 2.82357 14.9128 2.86096C14.9049 2.89835 14.8864 2.93268 14.8595 2.95989L13.8665 3.95189C13.8277 3.99064 13.7812 4.02101 13.7302 4.04113C13.6791 4.06125 13.6244 4.0707 13.5695 4.06889C11.3463 3.99331 9.1205 4.07853 6.90954 4.32389C6.26348 4.39539 5.6604 4.68261 5.1977 5.13914C4.735 5.59567 4.43972 6.19485 4.35954 6.83989C3.95859 10.2682 3.95859 13.7316 4.35954 17.1599C4.43972 17.8049 4.735 18.4041 5.1977 18.8606C5.6604 19.3172 6.26348 19.6044 6.90954 19.6759C10.2645 20.0509 13.7365 20.0509 17.0925 19.6759C17.7386 19.6044 18.3417 19.3172 18.8044 18.8606C19.2671 18.4041 19.5614 17.8049 19.6415 17.1599Z" fill="#00C48C"/>
                    </svg>}
                        title='Product description'
                        text='Instantly generate engaging product descriptions that sell'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5.2498 3C4.00727 3 3 4.00727 3 5.2498V18.7486C3 19.9911 4.00727 20.9984 5.2498 20.9984H11.1644L11.5202 19.5754C11.5266 19.5497 11.5333 19.5241 11.5402 19.4985H5.2498C4.83563 19.4985 4.49987 19.1628 4.49987 18.7486V5.2498C4.49987 4.83563 4.83563 4.49987 5.2498 4.49987H18.7486C19.1628 4.49987 19.4985 4.83563 19.4985 5.2498V11.2317C19.9774 11.0412 20.492 10.9678 20.9984 11.0115V5.2498C20.9984 4.00727 19.9911 3 18.7486 3H5.2498ZM15.3539 14.9989H11.2493C10.835 14.9989 10.4993 15.3347 10.4993 15.7489C10.4993 16.163 10.835 16.4988 11.2493 16.4988H13.8541L15.3539 14.9989ZM8.74949 8.24954C8.74949 8.80177 8.30181 9.24945 7.74958 9.24945C7.19735 9.24945 6.74967 8.80177 6.74967 8.24954C6.74967 7.69731 7.19735 7.24963 7.74958 7.24963C8.30181 7.24963 8.74949 7.69731 8.74949 8.24954ZM11.2493 7.4996C10.8351 7.4996 10.4993 7.83536 10.4993 8.24954C10.4993 8.66371 10.8351 8.99947 11.2493 8.99947H16.7488C17.163 8.99947 17.4987 8.66371 17.4987 8.24954C17.4987 7.83536 17.163 7.4996 16.7488 7.4996H11.2493ZM11.2493 11.2493C10.835 11.2493 10.4993 11.585 10.4993 11.9992C10.4993 12.4134 10.835 12.7491 11.2493 12.7491H16.7486C17.1629 12.7491 17.4985 12.4134 17.4985 11.9992C17.4985 11.585 17.1629 11.2493 16.7486 11.2493H11.2493ZM7.74958 12.9991C8.30181 12.9991 8.74949 12.5515 8.74949 11.9992C8.74949 11.447 8.30181 10.9993 7.74958 10.9993C7.19735 10.9993 6.74967 11.447 6.74967 11.9992C6.74967 12.5515 7.19735 12.9991 7.74958 12.9991ZM8.74949 15.7489C8.74949 16.3011 8.30181 16.7488 7.74958 16.7488C7.19735 16.7488 6.74967 16.3011 6.74967 15.7489C6.74967 15.1966 7.19735 14.749 7.74958 14.749C8.30181 14.749 8.74949 15.1966 8.74949 15.7489ZM19.0984 12.6686L13.1965 18.5705C12.8524 18.9146 12.6083 19.3458 12.4903 19.8179L12.0327 21.6484C11.8336 22.4445 12.5547 23.1656 13.3508 22.9666L15.1813 22.5089C15.6534 22.3909 16.0846 22.1468 16.4287 21.8027L22.3306 15.9008C23.2231 15.0082 23.2231 13.5611 22.3306 12.6686C21.4381 11.7761 19.991 11.7761 19.0984 12.6686Z" fill="url(#paint0_linear_1_1660)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_1660" x1="13" y1="-7" x2="-7" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#754DE8"/>
                            <stop offset="1" stop-color="#EA0022"/>
                        </linearGradient>
                        </defs>
                    </svg>}
                        title='Article writer'
                        text='Automatically create unique factual articles at the touch of a button'
                    />
                    <ToolCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z" fill="#EA7E00"/>
                        </svg>}
                        title='Blog writing'
                        text='Generate the best blog post to fit your audience with just few clicks of a button'
                    />
                    </div>
                </div>
            </div>
            <button className='lg:hidden hover:scale-95 duration-200 z-[100] fixed bottom-5 right-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                <path d="M20 35H25V25H35V20H25V10H20V20H10V25H20V35ZM5 45C3.625 45 2.4475 44.51 1.4675 43.53C0.487504 42.55 -0.00166242 41.3733 4.24448e-06 40V5C4.24448e-06 3.625 0.490004 2.4475 1.47 1.4675C2.45 0.487504 3.62667 -0.00166242 5 4.24448e-06H40C41.375 4.24448e-06 42.5525 0.490004 43.5325 1.47C44.5125 2.45 45.0017 3.62667 45 5V40C45 41.375 44.51 42.5525 43.53 43.5325C42.55 44.5125 41.3733 45.0017 40 45H5Z" fill="#5E3EBA"/>
            </svg>
            </button>
        </div>
    </section>
  )
}

export default ToolsSection