import React from 'react'
import Card from '../Card/Card'
import './Hero.css';

function Hero() {
  return (
    <div id='demo' className='hero-wrapper'>
        <div className='hero-top'>
            <div className='title-desc'>
                <h1>O’quv markazlarini tizimlashtirish va avtomatlashtirish vaqti keldi</h1>
                <p>Biz sizning o’quv markazingiz avtomatlashtirish orqali yuqori talabda qolishingizga ishonch hosil qilish uchun umumiy tendentsiyalar va strategiyalarni baham ko'ramiz.</p>
            </div>
            <div className='demo-class'>
                <div className='span-class'><span>Demoni olish</span> <span><img width={13} src="../../tail-right.png" alt="right arrow" /></span> </div>
               <img width={115} src="../../style.png" alt="batafsil" />
            </div>
            <div className='img-main'>
                <img  width={840} src="../../Image_2.png" alt="image 2" />
            </div>
        </div>
        <div className='cards-class'>
            <Card witdh={44} image='../../code.png' title='Har tomonlama qulay' description='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' />
            <Card witdh={37} image='../../countdown-2.png' title='Tizimlashtiring' description='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' />
            <Card witdh={26} image='../../smartphone.png' title='Qog’ozdan vos keching ' description='With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' />
        </div>
    </div>
  )
}

export default Hero