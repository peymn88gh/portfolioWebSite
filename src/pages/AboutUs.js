import {Element} from "react-scroll";
import {useTranslation} from "react-i18next";


export default function AboutUs(){
    const [t]=useTranslation('common');
    return (<>
        <div className="homebackground">
            <div className="content-container border-2 border-white rounded-2xl p-6 backdrop-blur-2xl max-w-3xl w-6/12 animate-fade-up animate-once animate-duration-700 animate-ease-in">
                <h1 className=' font-bold text-5xl mb-10'>{t("aboutUs")}</h1>
                <hr/>
                <p className=' font-bold text-lg my-10 text-left'>
                    {t("aboutUsTitle")}
                    <br/>
                    {t("aboutUsText")}
                    <br/>
                    {t("aboutUsAdress")}
                </p>

            </div>
        </div>
        <Element name="services" className="services bg-gray-100 py-10">
        </Element>

    </>)
}