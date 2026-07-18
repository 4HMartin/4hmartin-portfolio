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
import { useEffect, useState } from "react"

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

    return (
        <Card className="w-full">
            <CardContent className="w-full">
                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        {/* NAME CONTROLLER */}
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-name">
                                        {t('name_label')}
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('name_placeholder')}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        {/* EMAIL CONTROLLER */}
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-email">
                                        Email
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('email_placeholder')}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        {/* SUBJECT CONTROLLER */}
                        <Controller
                            name="subject"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-subject">
                                        {t('subject_label')}
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-subject"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={t('subject_placeholder')}
                                        autoComplete="off"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />

                        {/* MESSAGE CONTROLLER */}
                        <Controller
                            name="message"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-message">
                                        {t('message_label')}
                                    </FieldLabel>
                                    <InputGroup>
                                        <InputGroupTextarea
                                            {...field}
                                            id="form-message"
                                            placeholder={t('message_placeholder')}
                                            rows={6}
                                            className="min-h-24 resize-none"
                                            aria-invalid={fieldState.invalid}
                                            maxLength={300}
                                        />
                                        <InputGroupAddon align="block-end">
                                            <InputGroupText className="tabular-nums">
                                                {field.value?.length}/300 characters
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
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
                                    />

                                    <FieldLabel htmlFor="accept-terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer relative inline">
                                        {t('terms_message_1')}{' '}
                                        <Link href="/privacy-policy" className="text-primary hover:underline text-nowrap inline-block">
                                            {t('terms_message_2')}
                                        </Link>
                                        {' '}{t('terms_message_3')}{' '}
                                        <Link href="/legal-notice" className="text-primary hover:underline">
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
            <CardFooter>
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
