import React, { useEffect, useRef, useState } from 'react'
import { FaLock, FaPlay } from 'react-icons/fa6'
import currencyFormat from '../lib/currencyFormat'
import useModal from '../hooks/useModal'
import LoginModal from "../modals/LoginModal"
import RegisterModal from '../modals/RegisterModal'
import useBreakpoint from '../hooks/useBreakpoint'

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

const CourseMobisoPageLogout = () => {
    const { showModal, hideModal, modal } = useModal()
    const { md } = useBreakpoint()
    const [extend, setExtend] = useState(false)
    const [stick, setStick] = useState(false)

    const handleMobileVideoScroll = () => {
        if (video.current) {
            const rect = video.current.getBoundingClientRect()
            if (rect.top < 64)
                setStick(true)
            else
                setStick(false)
        }
    }

    const video = useRef()

    useEffect(() => {

        window.addEventListener("scroll", handleMobileVideoScroll)

        return () => {
            window.removeEventListener("scroll", handleMobileVideoScroll)
        }
    }, [])

    return (
        <>
            <section className='flex flex-col sm:flex-row sm:mt-16 bg-[#2c3f5e] w-full sm:p-8 sm:px-32'>
                <div className="grow text-white w-full sm:min-w-[640px] sm:max-w-[720px] p-8 px-8 sm:p-0 sm:px-0">
                    <section className='hidden sm:flex items-center mb-2'>
                        <span className='text-nonhighlight text-xs'>Learning /
                            <span className='text-xs text-white'> {courseData.courseName}</span>
                        </span>
                    </section>
                    <h1 className='font-bold text-3xl mb-4'>{courseData.courseName}</h1>
                    <p className='text-sm'>{courseData.courseBrief}</p>
                    <div className="text-black bg-yellow-400 p-1 rounded-sm w-fit text-xs mt-1">{courseData.type}</div>
                </div>
                <div className={`w-full flex justify-center items-center relative grow-0 shrink aspect-video order-first sm:order-last`}>
                    <img className='w-full aspect-video object-cover' src="/dummy.png" alt="" />
                    <div className="absolute rounded-full backdrop-blur bg-black/50 hover:bg-black p-2 px-4 flex flex-row items-center justify-center text-white cursor-pointer"><FaPlay className='mr-2' /> Tonton Video Gratis</div>
                </div>
            </section>
            <section className='w-full flex flex-col sm:flex-row relative sm:px-32 px-4'>
                <div className="grow">
                    <h1 className='text-xl font-bold mt-4'>Konten Kursus</h1>
                    <div className="flex flex-col text-sm">
                        {courseData.courses.map((item, index) => (
                            <div onClick={() => showModal(<LoginModal />)} className="cursor-pointer flex flex-row p-2 py-4 border m-2 justify-between items-center rounded-md transition-colors bg-white shadow-xl group hover:border-[#2c3f5e]">
                                <div className="">
                                    <span className='font-bold mr-1'>{index + 1}.</span>
                                    <span className='mr-1'>{item.name}
                                        {item.free ? <span className="ml-1 p-1 bg-red-600 text-xs text-white rounded-md">FREE</span> : null}
                                    </span>
                                </div>
                                {item.locked ? <div className="my-auto text-right transition-colors group-hover:text-[#2c3f5e]"><FaLock /></div> : null}
                            </div>
                        ))}
                    </div>
                    <h1 className='text-xl font-bold mt-4 mb-2'>Apa yang akan Anda Dapatkan</h1>
                    <div className={`transition-all origin-top ${extend ? 'h-fit scale-y-100' : 'h-0 scale-y-0'}`} dangerouslySetInnerHTML={{ __html: courseData.detailHtml }}>

                    </div>
                    <button onClick={() => setExtend(prev => !prev)} className='rounded-md shadow-xl w-full p-2 text-black font-bold border'>Lebih {extend ? 'Sedikit' : 'Banyak'}</button>
                </div>
                <div ref={video} className="grow-0 shrink-0 md:w-96">
                    <div className={`${stick ? 'fixed top-16 md:w-96' : 'p-4 md:p-0'}`}>
                        <div className="md:m-4 w-full flex flex-col bg-[#ffc700] shadow-xl justify-center items-center p-6">
                            <p className='px-4 text-center text-xs'>Dapatkan akses penuh ke semua materi course dengan harga spesial sekarang</p>
                            <p className='text-xl line-through text-red-600'>{currencyFormat.format(courseData.price)}</p>
                            <p className='text-3xl font-bold'>{currencyFormat.format(courseData.discountedPrice)}</p>
                            <div className="flex flex-row">
                                <button onClick={() => showModal(<LoginModal />)} className='bg-[#182c4e] text-white p-3 px-4 text-sm font-bold w-full rounded-md mr-2'>Masuk</button>
                                <button onClick={() => showModal(<RegisterModal />)} className='bg-white text-[#182c4e] p-3 px-4 text-sm font-bold w-full rounded-md ml-2'>Daftar</button>
                            </div>
                        </div>
                        <div className="md:m-4 rounded-md p-4 w-full h-48 flex bg-[#e0e1e1] items-center justify-center">
                            <p className='font-black text-xl text-white'>PLACEHOLDER</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseMobisoPageLogout