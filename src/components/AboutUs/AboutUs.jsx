import React from "react";
import Button from "../Button/Button";
import Amount from "../Amount/Amount";
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutUs_wrapper">
      <div className="overall_info">
        <div className="images-section">
          <div className="top-image">
            <img width={650} src="../../Mask_group.png" alt="component" />
          </div>
          <div className="bottom-images">
            <img width={325} src="../../mask_group_1.png" alt="mask" />
            <img width={325} src="../../Mask_group_2.png" alt="mask" />
          </div>
        </div>
        <div className="our_info">
          <div className="our_title">
            <img width={26} src="../../component.png" alt="component" />
            <span>Biz Haqimizda</span>
          </div>
          <div className="about_company">
            <h3>Kompaniyamiz haqida umumiy ma'lumot</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus eget gravida mus mi
              convallis vestibulum enim cras imperdiet. Faucibus ullamcorper
              nibh sagittis etiam arcu felis purus tincidunt ultrices. Auctor
              morbi id eu orci phasellus eget sit amet ultricies. Eget urna erat
              at neque eget ut turpis nam pretium. Mauris a at id faucibus sit
              aliquet. Integer enim nascetur diam maecenas sit vulputate.
            </p>
          </div>
          <div className="btn-group">
            <Button btn_title='Kompaniya'  />
            <Button btn_title='Hamkorlar' />
            <Button btn_title='Jamoamiz' />
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur. Semper sagittis varius
              eget enim nisi. Tortor quam enim enim luctus nulla commodo non.
              Aliquam sed massa mauris aliquam sit ac eu nisl. Habitant viverra
              ipsum adipiscing congue ac diam a. Libero ante ut sapien quam
              aliquam nisl. Est lorem enim euismod cras quam. Ut scelerisque leo
              mauris cras scelerisque non in.
            </p>
          </div>
        </div>
      </div>
      <div className="amount_group">
        <Amount wit={130} pic='../../yuz.png'
          descr="Foydalanuvchilar va
demodan foydalanganlar"
        />
        <Amount wit={101} pic='present.png' descr="Mijozlarimizdan qoniqish darajasi. " />
        <Amount wit={74} pic='../../amount.png' descr="Ortacha mijozlar reytingi 5,00 dan!" />
      </div>
    </div>
  );
}

export default AboutUs;
