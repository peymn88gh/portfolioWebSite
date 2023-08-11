import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {Controller, useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Input} from "components";
import {useTranslation} from "react-i18next";
import {useAlertContext} from "../../../utils/alertUtils";


function RegisterIndex() {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation('common');

    const registerImage = "/images/login.cc0578413db10119a7ff.png";

    return (
        <div className="flex min-h-screen">
            <div className="flex w-full flex-col md:flex-row">
                {/* Image */}
                <div className="md:bg-emerald-500 md:min-h-screen flex flex-wrap md:w-1/2">
                    <div className="items-center text-center flex flex-col relative justify-center mx-auto">
                        <img
                            src={registerImage}
                            alt="Logo"
                            className="md:w-72 w-48 mx-auto"
                        />
                        <div className="md:block hidden text-slate-100">
                            <h1 className="font-semibold text-2xl pb-2">
                                {t('register')+' ' +t('anAccount')}
                            </h1>
                            <span className="text-sm">
                                  TaraSystem
                            </span>
                        </div>
                    </div>
                </div>
                {/* Register Section */}
                <div className="flex flex-col md:flex-1 items-center justify-center">
                    <div className="loginWrapper flex flex-col w-full lg:px-36 md:px-8 px-8 md:py-8">
                        {/* Login Header Text */}
                        <div className="hidden md:block font-medium self-center text-xl sm:text-3xl text-gray-800">
                            {t("createAccount")}
                        </div>

                        {/* Separator */}
                        <div className="hidden md:block relative mt-10 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                  <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                                    {t("registerYourAccountNow")+". "+t("itsFree")+'!'}
                                  </span>
                            </div>
                        </div>


                        {/* Register Form */}
                        <RegisterForm loading={loading} setLoading={setLoading}/>

                        {/* Separator */}
                        <div className="relative mt-6 h-px bg-gray-300">
                            <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                                        {t("or")}
                                    </span>
                            </div>
                        </div>

                        {/* Social Button */}
                        <div className="flex justify-between w-full mt-6">
                            <button
                                type="submit"
                                className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                            >
                                <FontAwesomeIcon icon={faGoogle}/>
                                <span className="mr-2 flex-1">{t('loginWith')+' Google'}</span>
                            </button>

                            {/* todo: implement react oauth google*/}
                        </div>
                        <div className="flex justify-between w-full mt-2">
                            <button
                                disabled={loading}
                                type="submit"
                                className="flex items-center justify-center focus:outline-none text-slate-500 text-sm bg-slate-200 rounded-lg md:rounded md:py-2 px-3 py-3 w-full transition duration-150 ease-in"
                            >
                                <FontAwesomeIcon icon={faFacebook}/>
                                <span className="mr-2 flex-1">{t('loginWith')+ ' Facebook'}</span>
                            </button>
                        </div>
                        {/* End Social Button */}

                        {/* Login Link */}
                        <div className="flex justify-center items-center my-6 md:mb-0">
                            <Link
                                to="/auth/login"
                                className="inline-flex items-center font-bold text-emerald-500 hover:text-emerald-700 text-xs text-center"
                            >
                              <span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                  <path
                                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                              </span>
                                <span className="ml-2">{t('alreadyHaveAnAccount')+'?'}</span>
                            </Link>
                        </div>
                        {/* End Login Link */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function RegisterForm({loading, setLoading}) {
    const { t } = useTranslation('common');
    const { showAlert } = useAlertContext();
    const schema = yup.object().shape({
        eMail: yup.string().email(t('emailIsNotValid')).required(t("eMailAddress") +" " +t("isRequired")),
        fullName: yup.string().required(t("yourName")+" "+t("isRequired")),
        password: yup.string().required(t("password")+" "+t("isRequired")).min(8, t('passwordMustBeAtLeast8Characters')),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], t("passwordsMustMatch")).required(t("passwordConfirmation")+" "+t("isRequired")).min(8, t('passwordMustBeAtLeast8Characters'))
    });
    const navigate = useNavigate();
    const {
        register, handleSubmit, control, formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitHandle = async (data) => {
        setLoading(true);
        showAlert('loading', t("processing"))
        const emailCheck = (tkn) => {
            const getUserByEmailApi = process.env.REACT_APP_BASE_URL + '/User/GetActiveByEMail/';
            const cHead = new Headers();
            cHead.append("Authorization", "Bearer " + tkn);
            cHead.append("Content-Type", "application/json");
            const emailRequestOptions = {
                method: 'GET', headers: cHead,
            };
            return (fetch(getUserByEmailApi + '/' + data['eMail'], emailRequestOptions)
                .then(response => response.text())
                .then(result => result)
                .catch(error => error));
        }

        const userRegister = (tkn) => {
            const userApi = process.env.REACT_APP_BASE_URL + '/user';
            const fullName = data.fullName.split(" ");
            const formData = {
                "firstName": fullName[0],
                "lastName": fullName.slice(1).join(" "),
                "eMail": data.eMail,
                "password": data.password,
                "status": 0,
                "isAdminRole": false,
                'userName': data.eMail
                // "roles": [
                // ],
            }
            const uHead = new Headers();
            uHead.append("Authorization", "Bearer " + tkn);
            uHead.append("Content-Type", "application/json");

            const userRequestOptions = {
                method: 'POST', headers: uHead, body: JSON.stringify(formData),
            };

            return (fetch(userApi, userRequestOptions)
                .then(response => response.text())
                .then(result => result)
                .catch(error => error));
        }

        const tkn = localStorage.getItem('token');
        console.log(tkn);
        if (tkn === null) {
            setLoading(false);
            showAlert('failed', t('anErrorOccurred')+". "+t('pleaseTryAgain')+'.');
            return;
        }
        const emC = await emailCheck(tkn);
        if (emC !== '[]') {
            setLoading(false);
            showAlert('failed',t('thereIsAlreadyAnAccountRegisteredUsingThisEmailAddress')+'.');
            return;
        }
        const s = Number(await userRegister(tkn));
        if (isNaN(s)) {
            setLoading(false);
            showAlert('failed',t('registration')+" "+t('failed') +". "+ t('pleaseTryAgain')+'.');
            return;
        }

        setLoading(false);
        showAlert('success', t('registration') + ' ' +t('successful')+'!');
        navigate('/');
        // todo: navigate to confirmation page

    }

    return (<div className="md:mt-10 mt-4">
        <form onSubmit={handleSubmit(submitHandle)}>
            <Controller
                name="eMail"
                control={control}
                defaultValue=""
                render={({field}) => (
                    <Input
                        {...register("eMail")}
                        name="eMail"
                        value={field.value}
                        onChange={field.onChange}
                        type="text"
                        placeholder={t("eMailAddress")}
                        error={errors.eMail?.message}
                        icon={<FontAwesomeIcon icon={faEnvelope}/>}
                    />
                )}/>


            {/*full Name*/}
            <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({field}) => (
                    <Input
                        {...register("fullName")}
                        type="text"
                        name="fullName"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={t("fullName")}
                        error={errors.fullName?.message}
                        icon={<FontAwesomeIcon icon={faUser}/>}
                    />
                )}
            />

            {/* Password */}
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({field}) => (
                    <Input
                        {...register("password")}
                        type="password"
                        name="password"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={t("password")}
                        error={errors.password?.message}
                        icon={<FontAwesomeIcon icon={faLock}/>}
                    />
                )}
            />

            {/* Confirm Password */}
            <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({field}) => (
                    <Input
                        {...register("confirmPassword")}
                        type="password"
                        name="confirmPassword"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={t("confirmPassword")}
                        error={errors.confirmPassword?.message}
                        icon={<FontAwesomeIcon icon={faLock}/>}
                    />
                )}
            />

            <span className="flex items-center font-medium tracking-wide text-orange-400 text-xs mt-1 ml-1 mb-6">
            </span>

            {/* Forgot Password Link */}
            <div className="flex items-center mb-6 -mt-6 md:-mt-4">
                <div className="flex ml-auto">
                    <Link
                        to=""
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        className="inline-flex font-semibold text-xs sm:text-sm text-emerald-500 hover:text-emerald-700"
                    >
                        {t("forgotPassword")+'?'}
                    </Link>
                </div>
            </div>

            {/* Button Register */}
            <div className="flex w-full">
                <button
                    disabled={loading}
                    type="submit"
                    className="flex items-center justify-center focus:outline-none text-white text-sm bg-emerald-500 hover:bg-emerald-700 rounded-lg md:rounded md:py-2 py-3 w-full transition duration-150 ease-in"
                >
                    <span className="mr-2 md:uppercase">
                        {loading ? t("processing") : t("register")}
                    </span>
                </button>
            </div>
        </form>
    </div>)
}

export default RegisterIndex;
