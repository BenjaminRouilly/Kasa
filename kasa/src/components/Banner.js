import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'Kasa'
    return <div className='kasa-banner'>
        <img scr={logo} alt='Kasa' className='kasa-logo' />
    <h1 className='kasa-title'>{title}</h1>
</div>
}

export default Banner