import React, {useState} from "react";
import {Switch} from '@headlessui/react'
import PhoneInput from 'react-phone-input-2'
import {useNavigate} from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import {getCountries, getCountryCallingCode} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import de from 'react-phone-number-input/locale/de.json';
import it from 'react-phone-number-input/locale/it.json';
import fr from 'react-phone-number-input/locale/fr.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import DashboardHeader from "components/Other/DashboardHeader";
import {useOutletContext} from "react-router-dom";

import {Controller, useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "react-i18next";
import {useAlertContext} from "../utils/alertUtils";
import {Input} from "../components";
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Contact() {
    const [t] = useTranslation('common');
    const avatar =
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    const [sidebarToggle] = useOutletContext();


    return (
        <>
            <main className="h-full">
                {/* Welcome Header */}
                <DashboardHeader
                    toggle={sidebarToggle}
                    avatar={avatar}
                    user={{name: "Hoki Teguh Oktian"}}
                    // todo: get user
                />
                <div className="mainCard">
                    <div className="isolate bg-white px-6 py-24 sm:py-12 lg:px-8">
                        <div
                            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("contactSales")}</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                Aute magna irure deserunt veniam aliqua magna enim voluptate.
                            </p>
                        </div>
                        <ContactForm/>

                    </div>
                </div>
            </main>
        </>
    )
}

function ContactForm() {
    const navigate = useNavigate();

    const submitHandle = (data) => {
        const infoEmail = process.env.REACT_APP_INFO_EMAIL;
        if (!infoEmail) {
            showAlert('failed', t("failed" + "!"))
            return;
        }
        const emailData = {
            "ToEmail": infoEmail,
            "Body": data.message,
            "UserId": localStorage.getItem('id'),
            "Subject": data.email,
            "Attachments": data.file,
        }
        if (localStorage.getItem("token")) {
            const emailApi = process.env.REACT_APP_BASE_URL + '/EMail/send';
            const tHead = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
            const tokenRequestOptions = {
                method: 'POST',
                headers: tHead,
                body: JSON.stringify(emailData),
                url: emailApi,
            };
            axios(tokenRequestOptions)
                .then(r => {
                    showAlert('success', t("messageSentSuccessfully"));
                    navigate("/auth/login")
                })
                .catch(error => {
                    if (error?.response?.status === 401)
                        showAlert('failed', t("needToLogin"))
                    else
                        showAlert('failed', t("failedToSendMessage" + "!"))
                })
        } else {
            showAlert('failed', t("needToLogin"))
        }
    };
    const CountrySelect = ({value, onChange, labels, ...rest}) => (
        <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
            <option value="">{labels.ZZ}</option>
            {getCountries().map((country) => (
                <option key={country} value={country}>
                    {/* {labels[country]} +{getCountryCallingCode(country)} */}
                    {labels[country]}
                </option>
            ))}
        </select>
    );

    const {t} = useTranslation('common');
    const {showAlert} = useAlertContext();
    const schema = yup.object().shape({
        firstName: yup.string().required(t("firstName") + " " + t("isRequired")),
        lastName: yup.string().required(t("lastName") + " " + t("isRequired")),
        // company: yup.string().required(t("company")+" "+t("isRequired")),
        email: yup.string().email(t('emailIsNotValid')).required(t("eMailAddress") + " " + t("isRequired")),
        phone: yup.string().min(10, t("phoneNumber") + " " + t("isRequired")),
        agree: yup.bool().oneOf([true], t("youShouldAgreeWithTheTerms")),
        message: yup.string().min(10, t("message") + " " + t("IsTooShort")),
    });
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit(submitHandle)} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="block grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/*name*/}
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <Input
                            {...register("firstName")}
                            name="firstName"
                            value={field.value}
                            label={t("firstName") + "*"}
                            onChange={field.onChange}
                            type="text"
                            error={errors.firstName?.message}
                            customClass={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600  mt-1"}
                        />
                    )}/>
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <Input
                            {...register("lastName")}
                            name="lastName"
                            value={field.value}
                            label={t("lastName") + "*"}
                            onChange={field.onChange}
                            type="text"
                            error={errors.lastName?.message}
                            customClass={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600  mt-1"}
                        />
                    )}/>
                {/*comp*/}
                <Controller
                    name="company"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <Input
                            {...register("company")}
                            name="company"
                            value={field.value}
                            label={t("company")}
                            onChange={field.onChange}
                            type="text"
                            error={errors.company?.message}
                            customClass={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600 mt-1"}
                        />
                    )}/>
                {/*email*/}
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <Input
                            {...register("email")}
                            name="email"
                            value={field.value}
                            label={t("eMailAddress") + "*"}
                            onChange={field.onChange}
                            type="text"
                            error={errors.email?.message}
                            customClass={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600  mt-1"}
                        />
                    )}/>
                {/*country*/}
                <div className="flex flex-col mb-3">
                    <Controller
                        name="country"
                        control={control}
                        defaultValue="DE"
                        render={({field}) => (
                            <>
                                <label htmlFor="message" className="text-sm text-gray-600">{t("country")}</label>
                                <CountrySelect
                                    {...register("country")}
                                    labels={t("en") === "de" ? de : (t("en") === "fr" ? fr : t("en") === "it" ? it : en)}
                                    value={field.value}
                                    onChange={field.onChange}
                                    name="country"
                                    className="text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600 mt-1"
                                />
                                {errors.country?.message && <div
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.phone?.message}</div>}
                            </>
                        )}/>
                </div>
                <div className="flex flex-col mb-3">
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <>
                                <label htmlFor="message"
                                       className="text-sm text-gray-600">{t("phoneNumber") + "*"}</label>
                                <PhoneInput
                                    {...register("phone")}
                                    disableDropdown
                                    name="phone"
                                    value={field.value}
                                    onChange={field.onChange}
                                    country={watch('country') ? watch('country').toLowerCase() : "de"}
                                    containerClass={"mt-1"}
                                    className={null}
                                />
                                {errors.phone?.message && <div
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.phone?.message}</div>}
                            </>
                        )}/>
                </div>


                <div className="sm:col-span-2">
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <>
                                <label htmlFor="message" className="text-sm text-gray-600">{t("message") + "*"}</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600  mt-1"}
                                    defaultValue={''}
                                    placeholder={t("message")}
                                />
                                {errors.message?.message && <div
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.message?.message}</div>}
                            </>

                        )}/>
                </div>

                <div className="sm:col-span-2">

                    <Controller
                        name="file"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <Input
                                ref={register}
                                name="file"
                                value={field.value}
                                label={t("document")}
                                onChange={field.onChange}
                                type="file"
                                error={errors.file?.message}
                            />
                        )}/>
                </div>


                <Controller
                    name="agree"
                    control={control}
                    defaultValue={false}
                    render={({field}) => (
                        <>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        {...register("agree")}
                                        checked={field.value}
                                        onChange={field.onChange}
                                        className={classNames(
                                            watch('agree') ? 'bg-indigo-600' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies?</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                watch('agree') ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-gray-600">
                                    {t("bySelectingThis,YouAgreeToOur")}{' '}
                                    <a href="#" className="font-semibold text-indigo-600">
                                        {t("privacy")}&nbsp;{t("policy")}
                                    </a>
                                    .
                                    {errors.agree?.message && <div
                                        className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.agree?.message}</div>}
                                </Switch.Label>
                            </Switch.Group>

                        </>
                    )}/>
            </div>

            <div className="mt-10">
                <button
                    // disabled={formData.loading || !formData.agreed}
                    title="send"
                    type="submit"
                    // className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    className="block w-full bg-emerald-600 border-emerald-600 text-gray-100 px-3.5 py-2.5 rounded-lg shadow-lg text-sm text-center gap-2 items-center hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                    <div>
                        <FontAwesomeIcon icon={faPlayCircle}/>
                        &nbsp;{t("send")}
                    </div>
                </button>
            </div>
        </form>
    )
}
