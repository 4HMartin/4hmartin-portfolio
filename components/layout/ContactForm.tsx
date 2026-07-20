"use client"
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { useTranslations } from "next-intl"
import SubmitButton from "../ui/SubmitButton"
import Link from "next/link"
import CornerIcons from "../ui/cornerIcons"

export function ContactForm() {

    const t = useTranslations('contact_section');

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
            .max(26, t('subject_long_error')),
        message: z
            .string()
            .optional(),
        acceptTerms: z
            .boolean()
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

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("You submitted the following values:", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
            classNames: {
                content: "flex flex-col gap-2",
            },
            style: {
                "--border-radius": "calc(var(--radius)  + 4px)",
            } as React.CSSProperties,
        })
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
                    <FieldGroup className="overflow-x-visible">
                        {/* NAME CONTROLLER */}
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="relative">
                                    <FieldLabel htmlFor="form-name" className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25">
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('name_label')}
                                    </FieldLabel>
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
                                </Field>
                            )}
                        />

                        {/* EMAIL CONTROLLER */}
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="relative">
                                    <FieldLabel htmlFor="form-email" className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25">
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        Email
                                    </FieldLabel>
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
                                </Field>
                            )}
                        />

                        {/* SUBJECT CONTROLLER */}
                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="relative">
                                    <FieldLabel htmlFor="form-subject" className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25">
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('subject_label')}
                                    </FieldLabel>
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
                                </Field>
                            )}
                        />

                        {/* MESSAGE CONTROLLER */}
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} className="relative">
                                    <FieldLabel htmlFor="form-message" className="max-w-fit z-10 pr-2 text-xs xs:text-sm uppercase text-violet-500 dark:text-lime-500 tracking-wider bg-white dark:bg-gray-950 translate-y-4.25">
                                        <span className="translate-y-1 text-violet-500 dark:text-lime-500">⌜</span>
                                        {t('message_label')}
                                    </FieldLabel>
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
                                </Field>
                            )}
                        />

                        {/* TERMS & CONDITIONS CHECKBOX */}
                        <Controller
                            name="acceptTerms"
                            control={form.control}
                            render={({ field: { onChange, value }, fieldState }) => (
                                <Field data-invalid={fieldState.invalid} orientation="horizontal">

                                    <Checkbox
                                        id="accept-terms"
                                        checked={value}
                                        onCheckedChange={(checked) => onChange(!!checked)}
                                        className={"rounded-none checked:dark:bg-violet-500"}
                                    />

                                    <FieldLabel htmlFor="accept-terms" className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 leading-relaxed cursor-pointer relative inline">
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
                                    </FieldLabel>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="bg-transparent">
                <Field orientation="horizontal">
                    {/* SUBMIT BUTTON */}
                    <SubmitButton
                        text={t('submit_label')}
                        termsStatus={form.watch('acceptTerms')}
                    />
                </Field>
            </CardFooter>
        </Card>
    )
}
