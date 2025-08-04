"use client"

import * as z from "zod"
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";

// UI COMPONENTS
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { AlertModal } from "@/components/modals/alert-modal";
import { Textarea } from "@/components/ui/textarea";
import TinymceTextEditor from "@/components/tinymce-text-editor";

// ICONS
import { Trash } from "lucide-react";

// PRISMA
import { AboutMe } from "@prisma/client";

// SCHEMA
import { AboutmeFormSchema } from "@/schemas";


type AboutmeFormValues = z.infer<typeof AboutmeFormSchema>

interface IAboutmeFormProps {
    initialData: AboutMe | null;
};


export const AboutmeForm: React.FC<IAboutmeFormProps> = ({ initialData }) => {
    const params = useParams()
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit Content" : "Create Content"
    const description = initialData ? "Edit a content" : "Add a new content"
    const toastMessage = initialData ? "Content updated" : "Content created"
    const action = initialData ? "Save changes" : "Create"



    const form = useForm<AboutmeFormValues>({
        resolver: zodResolver(AboutmeFormSchema),
        defaultValues: initialData || {
            name: '',
            location: '',
            bio: '',
            aboutMeHeader: '',
            aboutMeDescription: '',
            schools: '',
            collages: '',
            overview: '',
            overviewHeader: '',
            learningJourney: '',
            learningJourneyHeader: '',
            linkedinUrl: '',
            githubUrl: '',
            whatsappUrl: '',
            instagramUrl: '',
            facebookUrl: '',
            primaryGmail: '',
            secondaryGmail: '',
            mobileNumber: '',
            anonymousMessageUrl: '',
        }
    });


    const onSubmit = async (data: AboutmeFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/about-me/${params.aboutmeId}`, data);
            } else {
                await axios.post(`/api/about-me`, data);
            }
            router.push(`/admin/about-me`)
            router.refresh();
            toast.success(toastMessage);
        } catch (error: any) {
            toast.error('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`/api/about-me/${params.aboutmeId}`);
            router.push(`/admin/about-me`)
            router.refresh();
            toast.success('Content deleted.');
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setOpen(false);
            setLoading(false);
        }

    }

    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onDelete}
                loading={loading}
            />
            <div className="flex items-center justify-between">
                <Heading
                    title={title}
                    description={description}
                />
                {/* Delete Button */}
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="grid grid-cols-3 gap-8">

                        {/* NAME FILED */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* LOCATION FILED */}
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* BIO FILED */}
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        {/* ABOUTME-HEADER FILED */}
                        <FormField
                            control={form.control}
                            name="aboutMeHeader"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>AboutMe Header</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ABOUTME-DESCRIPTION FILED */}
                        <FormField
                            control={form.control}
                            name="aboutMeDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Aboutme Description</FormLabel>
                                    <FormControl>
                                        <Textarea disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        {/* SCHOOLS FILED OPTIONAL */}
                        <FormField
                            control={form.control}
                            name="schools"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Schools (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Abc, Xyz..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* COLLAGES FILED OPTIONAL */}
                        <FormField
                            control={form.control}
                            name="collages"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Collages (Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Abc, Xyz..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        {/* OVERVIEW HEADER FILED*/}
                        <FormField
                            control={form.control}
                            name="overviewHeader"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Overview Header</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* OVERVIEW FILED  */}
                        {/* <FormField
                            control={form.control}
                            name="overview"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Overview</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            name="overview"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Overview</FormLabel>
                                    <FormControl>
                                        {/* <Input disabled={loading} placeholder="" {...field} /> */}
                                        <TinymceTextEditor initialValue={field.value} onEditorChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        {/* LEARNING JOURNEY HEADER FILED  */}
                        <FormField
                            control={form.control}
                            name="learningJourneyHeader"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Learning Journey Header</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* LEARNING JOURNEY FILED  */}
                        <FormField
                            control={form.control}
                            name="learningJourney"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Learning Journey</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        {/* LINKEDIN URL FILED  */}
                        <FormField
                            control={form.control}
                            name="linkedinUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Linkedin URL</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* GITHUB URL FILED  */}
                        <FormField
                            control={form.control}
                            name="githubUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Github URL</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* WHATSAPP URL FILED  */}
                        <FormField
                            control={form.control}
                            name="whatsappUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>WhatsApp URL</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* INSTAGRAM URL FILED  */}
                        <FormField
                            control={form.control}
                            name="instagramUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Instagram URL</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* FACEBOOK URL FILED  */}
                        <FormField
                            control={form.control}
                            name="facebookUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Facebook URL</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PRIMARY GMAIL FILED  */}
                        <FormField
                            control={form.control}
                            name="primaryGmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Primary Gmail</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* SECONDARY GMAIL FILED OPTIONAL  */}
                        <FormField
                            control={form.control}
                            name="secondaryGmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Secondary Gmail(Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* MOBILE NUMBER FILED  */}
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ANONUMOUS MESSAGE URL FILED OPTIONAL */}
                        <FormField
                            control={form.control}
                            name="anonymousMessageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Anonymous Message URL(Optional)</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <Button
                        disabled={loading}
                        className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
            {/* <Separator /> */}
        </>
    )
}
