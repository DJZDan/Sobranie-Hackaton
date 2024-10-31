import React from 'react'

const aisearch = () => {
    return (
        <div className='w-full h-full flex'>
            <div className='w-[33%] bg-[#D9D9D9]  px-10 py-20 h-screen'>
                <div className='flex'>
                    <p className='text-[24px] font-bold'>ЗАКОН ЗА ЗАШТИТА НА ПРИРОДАТА</p>
                    <img src="/images/aiicon.png" className='w-[10%] h-[3%]' alt="aiicon" />
                </div>
                <p className='text-[20px] pt-10 font-semibold'>Краток опис на законот со помош на вештачка интелигенција:</p>
                <p className='text-[15px] pt-10 pb-10'>Законот за зачувување на природата во Северна Македонија е дизајниран да ги заштити богатиот биодиверзитет и природни ресурси на земјата. Воспоставува заштитени подрачја како национални паркови и природни резервати, промовира одржливо управување со ресурсите и наложува оцена на влијанието врз животната средина за проекти кои влијаат на животната средина. Законот го нагласува учеството на јавноста и образованието, охрабрувајќи ги локалните заедници да се вклучат во напорите за зачувување.</p>
                <div className='flex'>
                <button className='p-4 flex text-white rounded-2xl bg-[#680B0B]'>Превземи документација<img src="/images/pdficon.png" className='w-[10%] ml-3' alt="pdficon" /></button>
                </div>
            </div>
            <div className='w-[33%] flex flex-col justify-center items-center bg-red-100'>
                <img src="/images/aichatbotface.png" className='w-[30%]' />
                <p className='text-[#680B0B] pt-10 text-[20px] text-center'>Зборувај со нашиот AI асистент.</p>
            </div>
            <div id="chatbotbox" className='w-[33%]'>
            
            </div>
        </div>

    )
}



export default aisearch
