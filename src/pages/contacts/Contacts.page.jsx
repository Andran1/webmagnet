import React from "react";

const ContactsPage = () => {
    return (
        <div className="contacts-page">
            <div className="contacts-page__map">
                <iframe
                    title="Our address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.3009882030717!2d44.45648775055328!3d40.1734148404167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdc4065da885%3A0x19a5f0fbce5bee0f!2s61a%20Vantyan%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1598097137103!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    style={{ border: 0 }}
                    tabindex="0"
                />
            </div>

            <div className="contacts-page__info">
                <div className="info-item">Հեռ․՝ (+374 41) 100 209</div>
                <div className="info-item">Էլ-հասցե՝ marketing@webmagnet.org</div>
                <div className="info-item">Հասցե՝ ք. Երևան, Վանթյան 61Ա</div>
            </div>
        </div>
    );
};

export default ContactsPage;
