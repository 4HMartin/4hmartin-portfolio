"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { Turnstile } from '@marsidev/react-turnstile';
import { motion } from "motion/react";
import { fadeUp, flickerVariant } from "@/lib/animations";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";
import { useTranslations } from "next-intl";
import SubmitButton from "../ui/SubmitButton";
import Link from "next/link";
import CornerIcons from "../ui/cornerIcons";
import { CircleDashed, CircleDotDashed } from "lucide-react";

// Shadcn UI components with motion properties
const MotionField = motion.create(Field);
const MotionFieldLabel = motion.create(FieldLabel);

export function ContactForm() {

    const t = useTranslations('contact_section');

    const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

    const formSchema = z.object({
        name: z
            .string()
            .min(2, t('name_short_error'))
            .max(16, t('name_long_error')),
        email: z
            .string()
            .min(1, t('required_email_error'))
            .email(t('invalid_email_error')),
        subject: z
            .string()
            .min(3, t('subject_short_error'))
            .max(36, t('subject_long_error')),
        message: z
            .string()
            .optional(),
        acceptTerms: z
            .boolean(),
        turnstileToken:
            z.string().min(1, "Please complete the verification"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            acceptTerms: false
        },
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {

        // MANUAL DELAY FOR TESTING PURPOSES
        // await new Promise((resolve) => setTimeout(resolve, 4000));

        try {
            const responseSendEmail = await axios.post('/api/send-email', { ...data });

            if (responseSendEmail.status === 200) {
                form.reset();
            }

        } catch (error) {
            console.error(error);
        }
    }

    function BTCornerIcon() {
        return (
            <span className="absolute -bottom-1 left-[97%] xs:left-[98%] md:left-[98.5%] lg:left-[97%] lg:-bottom-1.5 lg:pr-1 lg:w-fit lg:text-lg bg-white dark:bg-gray-950 text-violet-500 dark:text-lime-500">
                ⌟
            </span>
        )
    }

    return (
        <Card className="w-full border-none py-0 px-0 dark:bg-transparent">
            <CardContent className="w-full border-none mb-5.5">
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="border-none overflow-x-visible">
                    <FieldGroup className="overflow-x-visible gap-2.5">
                        {/* NAME CONTROLLER */}
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <MotionFieldLabel
                                        htmlFor="form-name"
                                        className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25"
                                        variants={flickerVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('name_label')}
                                    </MotionFieldLabel>
                                    <Input
                                        {...field}
                                        id="form-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('name_placeholder')}
                                        autoComplete="off"
                                        className="relative rounded-none border-gray-200 dark:border-gray-700 text-xs xs:text-sm dark:bg-gray-950"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    <BTCornerIcon />
                                </MotionField>
                            )}
                        />

                        {/* EMAIL CONTROLLER */}
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.2}
                                >
                                    <MotionFieldLabel
                                        htmlFor="form-email"
                                        className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25"
                                        variants={flickerVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        Email
                                    </MotionFieldLabel>
                                    <Input
                                        {...field}
                                        id="form-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('email_placeholder')}
                                        autoComplete="off"
                                        className="relative rounded-none border-gray-200 dark:border-gray-700 text-xs xs:text-sm dark:bg-gray-95"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    <BTCornerIcon />
                                </MotionField>
                            )}
                        />

                        {/* SUBJECT CONTROLLER */}
                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.4}
                                >
                                    <MotionFieldLabel
                                        htmlFor="form-subject"
                                        className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25"
                                        variants={flickerVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('subject_label')}
                                    </MotionFieldLabel>
                                    <Input
                                        {...field}
                                        id="form-subject"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('subject_placeholder')}
                                        autoComplete="off"
                                        className="relative rounded-none border-gray-200 dark:border-gray-700 text-xs xs:text-sm dark:bg-gray-95"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    <BTCornerIcon />
                                </MotionField>
                            )}
                        />

                        {/* MESSAGE CONTROLLER */}
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.6}
                                >
                                    <MotionFieldLabel
                                        htmlFor="form-message"
                                        className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25"
                                        variants={flickerVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('message_label')}
                                    </MotionFieldLabel>
                                    <InputGroup className="dark:border-gray-700 dark:bg-gray-950">
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-message"
                                            placeholder={t('message_placeholder')}
                                            rows={6}
                                            className="min-h-24 resize-none text-xs xs:text-sm dark:bg-gray-950"
                                            aria-invalid={fieldState.invalid}
                                            maxLength={300}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums text-xs xs:text-sm">
                                                {field.value?.length}/300 {t('characters_label')}
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                    <BTCornerIcon />
                                </MotionField>
                            )}
                        />

                        {/* TERMS & CONDITIONS CHECKBOX */}
                        <Controller
                            name="acceptTerms"
                            control={form.control}
                            render={({ field: { onChange, value }, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    orientation="horizontal"
                                    // className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.8}
                                >

                                    <Checkbox
                                        id="accept-terms"
                                        checked={value}
                                        onCheckedChange={(checked) => onChange(!!checked)}
                                        className={"rounded-none checked:dark:bg-violet-500 cursor-pointer"}
                                    />

                                    <MotionFieldLabel
                                        htmlFor="accept-terms"
                                        className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer relative inline"
                                        variants={flickerVariant}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {t('terms_message_1')}{' '}
                                        <Link href="/privacy-policy" className="text-primary dark:text-lime-500 hover:underline text-nowrap inline-block">
                                            {t('terms_message_2')}
                                        </Link>
                                        {' '}{t('terms_message_3')}{' '}
                                        <Link href="/legal-notice" className="text-primary dark:text-lime-500 hover:underline">
                                            {t('terms_message_4')}
                                        </Link>
                                        .
                                        {/* {t('terms_message_5')} */}
                                    </MotionFieldLabel>
                                </MotionField>
                            )}
                        />

                        {/* CLOUDFLARE TURNSTILE VERIFICATION */}
                        <Controller
                            name="turnstileToken"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <MotionField
                                    data-invalid={fieldState.invalid}
                                    className="relative"
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={0.4}
                                >
                                    <Turnstile 
                                        siteKey={TURNSTILE_SITE_KEY}
                                        onSuccess={(token) => field.onChange(token)}
                                        onError={() => field.onChange('')}
                                        onExpire={() => field.onChange('')}
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </MotionField>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="bg-transparent">
                {form.formState.isSubmitting ?
                    <div className="relative m-1 min-w-46.25 h-12 flex items-center justify-center">
                        <CircleDashed className="w-9 h-9 animate-spin text-violet-500" />
                        <CircleDotDashed className="w-7 h-7 animate-ping text-violet-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                        <CornerIcons />
                    </div>
                    :
                    <MotionField
                        orientation="horizontal"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                    >
                        {/* SUBMIT BUTTON */}
                        <SubmitButton
                            text={t('submit_label')}
                            termsStatus={form.watch('acceptTerms')}
                        />
                    </MotionField>
                }
            </CardFooter>
        </Card>
    )
}
