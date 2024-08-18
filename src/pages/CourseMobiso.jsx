import React, { useEffect, useRef, useState } from 'react'
import { FaLock, FaPlay } from 'react-icons/fa6'
import { HiArrowUturnLeft } from 'react-icons/hi2'
import currencyFormat from '../lib/currencyFormat'
import useBreakpoint from '../hooks/useBreakpoint'
import useModal from '../hooks/useModal'
import DetailModal from '../modals/DetailModal'

const courseData = {
    courseName: 'Daftar Merek Lebih Hemat dengan Tutorial Singkat',
    courseBrief: 'Pendaftaran merek tak perlu mahal! Video tutorial ini membantu Anda memahami pentingnya merek dalam bisnis dan panduan lengkap mendaftarkan merek dagang.',
    youtubeId: 'aB0TlsnkY6E',
    type: 'Course',
    courses: [
        {
            name: 'Mengenal Pentingnya Merek bagi Bisnis Anda',
            free: true,
            nextToPlay: true
        },
        {
            name: 'Navigasi Hukum: Dasar-Dasar Pendaftaran Merek',
            free: false,
            locked: true
        },
        {
            name: 'Langkah Langkah Praktis dalam Mengajukan Pendaftaran Merek',
            free: false,
            locked: true
        },
        {
            name: 'Strategi Perlindungan: Memelihara dan Membela Merek Anda',
            free: false,
            locked: true
        }
    ],
    price: 149000,
    discountedPrice: 99000,
    detailHtml: `
    <p class='mb-2'><span class='font-bold'>Pengenalan Merek:</span> Mengapa merek itu penting, dan bagaimana merek dapat memberikan nilai tambah kepada produk atau layanan Anda.</p>
    <ul class='list-disc list-inside mb-2'>
        <li><span class='font-bold'>Dasar Hukum Merek:</span> Memahami kerangka hukum yang mengatur pendaftaran dan perlindungan merek di berbagai yurisdiksi.</li>
        <li><span class='font-bold'>Proses Pendaftaran:</span> Langkah demi langkah dalam proses pendaftaran merek, termasuk pencarian keunikan, pengajuan aplikasi, dan penanganan penolakan.</li>
        <li><span class='font-bold'>Perlindungan Merek:</span> Strategi untuk memelihara dan melindungi merek Anda dari pelanggaran dan penyalahgunaan.</li>
        <li><span class='font-bold'>Studi Kasus:</span> Analisis kasus nyata tentang pendaftaran dan pertahanan merek yang berhasil.</li>
    </ul>
    <p class='font-bold mb-2'>Untuk Siapa Kursus Ini:</p>
    <p class='mb-2'>Kursus ini ideal bagi pemilik bisnis, startup, pengusaha, dan siapa saja yang ingin mempelajari cara mendaftarkan dan melindungi merek mereka secara efektif. Tidak diperlukan pengetahuan hukum sebelumnya, sehingga kursus ini cocok untuk pemula di bidang hukum merek.</p>
    <p class='font-bold mb-2'>Keuntungan Mengikuti Kursus Ini:</p>
    <p class='mb-2'>
        Setelah menyelesaikan kursus ini, Anda akan memiliki pemahaman yang kuat tentang proses pendaftaran merek dan strategi untuk melindungi merek Anda. Anda akan slap untuk mengambil langkah-langkah yang diperlukan untuk mendaftarkan merek Anda, meningkatkan reputasi bisnis, dan melindungi aset intelektual yang berharga.
    </p>
    `
}

const CourseMobisoPage = () => {
    const [extend, setExtend] = useState(false)
    const [stickPlaceholder, setStickPlaceholder] = useState(false)
    const [stickVideo, setStickVideo] = useState(false)
    const { md } = useBreakpoint()
    const { showModal, hideModal, modal } = useModal()

    const handleDesktopScroll = () => {
        if (placeholder.current) {
            const rect = placeholder.current.getBoundingClientRect()
            console.log(rect.top)
            console.log(stickPlaceholder)
            if (rect.top < 64 && md)
                setStickPlaceholder(true)
            else
                setStickPlaceholder(false)
        }
    }

    const handleMobileVideoScroll = () => {
        if (video.current) {
            const rect = video.current.getBoundingClientRect()
            console.log(rect.top)
            if (rect.top < 64 && !md)
                setStickVideo(true)
            else
                setStickVideo(false)
        }
    }

    const video = useRef()
    const placeholder = useRef()

    useEffect(() => {
        if (md) {
            window.removeEventListener("scroll", handleMobileVideoScroll)
            window.addEventListener("scroll", handleDesktopScroll)
        } else {
            window.removeEventListener("scroll", handleDesktopScroll)
            window.addEventListener("scroll", handleMobileVideoScroll)
        }

        return () => {
            window.removeEventListener("scroll", handleMobileVideoScroll)
            window.removeEventListener("scroll", handleDesktopScroll)
        }
    }, [md])

    return (
        <>
            <section className='sm:hidden h-16 flex items-center mt-16 bg-white p-2'>
                <button className='bg-[#e8eaed] p-3 flex flex-row items-center justify-center text-[#808b9d] rounded-md cursor-pointer'><HiArrowUturnLeft className='font-light' /></button>
                <span className='text-[#bac0ca] text-xs ml-4'>Dashboard / Learning /
                    <span className='text-xs text-[#182c4e]'> {courseData.courseName}</span>
                </span>
            </section>
            <section className='flex flex-col sm:flex-row sm:mt-16 bg-[#2c3f5e] w-full sm:p-8 sm:px-32'>
                <div className="grow text-white w-full sm:min-w-[640px] sm:max-w-[720px] p-8 px-8 sm:p-0 sm:px-0">
                    <section className='hidden sm:flex items-center mb-2'>
                        <button className='bg-[#3e4f6b] p-2 flex flex-row items-center justify-center text-white rounded-md cursor-pointer px-3'> <HiArrowUturnLeft className='font-light mr-2' />  Learning</button>
                        <span className='text-nonhighlight text-xs ml-4'>Dashboard / Learning /
                            <span className='text-xs text-white'> {courseData.courseName}</span>
                        </span>
                    </section>
                    <h1 className='font-bold text-3xl mb-4'>{courseData.courseName}</h1>
                    <p className='text-sm'>{courseData.courseBrief}</p>
                    <div className="text-black bg-yellow-400 p-1 rounded-sm w-fit text-xs mt-1">{courseData.type}</div>
                </div>
                <div ref={video} className={`w-full grow-0 shrink aspect-video order-first md:order-last`}>
                    <iframe className={`${stickVideo ? 'fixed top-16 left-0' : ''} z-30 w-full aspect-video`} src={`https://www.youtube.com/embed/${courseData.youtubeId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>
            <section className='w-full flex flex-col sm:flex-row relative sm:px-32'>
                <div className="grow">
                    <h1 className='text-xl font-bold mt-4'>Konten Kursus</h1>
                    <div className="flex flex-col text-sm">
                        {courseData.courses.map((item, index) => (
                            <div className="flex flex-row cursor-pointer p-2 py-4 border m-2 justify-between items-center rounded-md transition-colors bg-white shadow-xl group hover:border-[#2c3f5e]">
                                <div className="">
                                    <span className='font-bold mr-1'>{index + 1}.</span>
                                    <span className='mr-1'>{item.name}
                                        {item.free ? <span className="ml-1 p-1 bg-red-600 text-xs text-white rounded-md">FREE</span> : null}
                                    </span>
                                </div>
                                {item.locked ? <div className="my-auto text-right transition-colors group-hover:text-[#2c3f5e]"><FaLock /></div> : null}
                                {item.nextToPlay ? <div className="text-white flex flex-row p-2 cursor-pointer rounded-md bg-[#2c3f5e] items-center justify-center"><FaPlay /> Putar</div> : null}
                            </div>
                        ))}
                    </div>
                    <h1 className='text-xl font-bold mt-4 mb-2'>Apa yang akan Anda Dapatkan</h1>
                    {md ?
                        <div className={`transition-all origin-top ${extend ? 'h-fit scale-y-100' : 'h-0 scale-y-0'}`} dangerouslySetInnerHTML={{ __html: courseData.detailHtml }}>

                        </div>
                        : null}
                    <button onClick={() => { if (md) { setExtend(prev => !prev) } else { showModal(<DetailModal detail={courseData.detailHtml} />) } }} className='rounded-md shadow-xl w-full p-2 text-black font-bold border'>Lebih {extend ? 'Sedikit' : 'Banyak'}</button>
                </div>
                <div ref={placeholder} className={md ? 'grow-0 shrink-0 w-96' : 'relative p-4'}>
                    <div className={`${stickPlaceholder ? 'fixed top-16 w-96' : 'w-full'}`}>
                        <div className={`md:m-4 w-full flex flex-col bg-white shadow-xl justify-center items-center p-6`}>
                            <p className='px-4 text-center text-xs'>Dapatkan akses penuh ke semua materi course dengan harga spesial sekarang</p>
                            <p className='text-xl line-through text-red-600'>{currencyFormat.format(courseData.price)}</p>
                            <p className='text-3xl font-bold'>{currencyFormat.format(courseData.discountedPrice)}</p>
                            <button className='bg-[#ffc700] text-[#182c4e] p-2 text-sm font-bold w-full rounded-md'>Dapatkan Course Lengkap</button>
                        </div>
                        <div className={`md:m-4 rounded-md p-4 w-full h-48 flex bg-[#e0e1e1] items-center justify-center`}>
                            <p className='font-black text-xl text-white'>PLACEHOLDER</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseMobisoPage