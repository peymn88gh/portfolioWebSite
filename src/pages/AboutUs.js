import {Element} from "react-scroll";
import {useTranslation} from "react-i18next";


export default function AboutUs(){
    const [t]=useTranslation('common');
    return (<>
        <div className="homebackground">
            <div className="content-container border-2 border-white rounded-2xl p-6 backdrop-blur-2xl max-w-3xl animate-fade-up animate-once animate-duration-700 animate-ease-in">
                <h1 className=' font-bold text-5xl mb-10'>{t("aboutUs")}</h1>
                <hr/>
                <p className=' font-bold text-lg my-10'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
        </div>
        <Element name="services" className="services bg-gray-100 py-10">
        </Element>

    </>)
}