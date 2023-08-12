import React from "react";
import {Switch} from '@headlessui/react'
import PhoneInput from 'react-phone-input-2'
import {useNavigate} from "react-router-dom";
import 'react-phone-input-2/lib/style.css'
import {getCountries} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import de from 'react-phone-number-input/locale/de.json';
import it from 'react-phone-number-input/locale/it.json';
import fr from 'react-phone-number-input/locale/fr.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";

import {Controller, useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "react-i18next";
import {useAlertContext} from "utils/alertUtils";
import {Input} from "components";

import {SMTPClient, Message} from "emailjs";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Contact() {
    const [t] = useTranslation('common');

    return (
        <>
            <main className="h-full">
                {/* Welcome Header */}
                <div className="mainCard">
                    <div className="isolate bg-white px-6 py-24 sm:py-12 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t("apply")}</h2>

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

        // const client = new SMTPClient({
        //     user: 'user',
        //     password: 'password',
        //     host: 'smtp-mail.outlook.com',
        //     tls: {
        //         ciphers: 'SSLv3',
        //     },
        // });
        //
        // const message = new Message({
        //     text: 'i hope this works',
        //     from: 'you <username@outlook.com>',
        //     to: 'someone <someone@your-email.com>, another <another@your-email.com>',
        //     cc: 'else <else@your-email.com>',
        //     subject: 'testing emailjs',
        //     attachment: [
        //         { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
        //         { path: 'path/to/file.zip', type: 'application/zip', name: 'renamed.zip' },
        //     ],
        // });
        //
        // // send the message and get a callback with an error or details of the message that was sent
        // client.send(message, (err, message) => {
        //     console.log(err || message);
        // });
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
        fullName: yup.string().required(t("firstName") + " " + t("isRequired")),
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
        <form onSubmit={handleSubmit(submitHandle)} className="mx-auto mt-8 sm:mt-20 max-w-3xl">
            <div className="block grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {/*name*/}
                <div className="flex flex-col">
                    <Controller
                        name="fullName"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <Input
                                {...register("fullName")}
                                name="fullName"
                                value={field.value}
                                label={t("fullName") + "*"}
                                onChange={field.onChange}
                                type="text"
                                error={errors.fullName?.message}
                                customClass={"text-sm placeholder-gray-500 pr-4 rounded-lg border border-gray-400 w-full md:py-2 py-3 focus:outline-none focus:border-indigo-600  mt-1"}
                            />
                        )}/>
                </div>
                {/*email*/}
                <div className="flex flex-col">
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
                </div>
                {/*country*/}
                <div className="flex flex-col">
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
                {/*phone*/}
                <div className="flex flex-col">
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
                                    containerClass={"placeholder-gray-500 rounded-lg border border-gray-400 focus:outline-none focus:border-indigo-600 mt-1"}
                                    inputStyle={{
                                        width: "inherit",
                                        height: "inherit",
                                        border: "inherit",
                                        borderColor: "transparent"
                                    }}
                                    buttonStyle={{
                                        height: 'inherit'
                                    }}
                                />
                                {errors.phone?.message && <div
                                    className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.phone?.message}</div>}
                            </>
                        )}/>
                </div>
                {/*message*/}
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
                {/*file*/}
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
                {/*agree*/}
                <div className="flex flex-col">
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
