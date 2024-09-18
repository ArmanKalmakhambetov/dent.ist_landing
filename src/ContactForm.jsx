import React from 'react'

export default function ContactForm() {
  return (
    <div id="consultation-form" className="consultation-form">
        <h2 className="form-title">Запись на консультацию</h2>
        <div className="form-content">
          <div className="row ">
            <div className="col-sm-6">
              <div className="consultation-info">
                <h3>
                  Оставьте заявку и получите бесплатную консультацию от врача.
                  Индивидуальный план лечения в подарок
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <form className="form-fields">
                <input type="text" placeholder="Имя" required />
                <input type="text" placeholder="Телефон" required />
                <button type="submit" className="submit-btn">
                  Записаться
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}
