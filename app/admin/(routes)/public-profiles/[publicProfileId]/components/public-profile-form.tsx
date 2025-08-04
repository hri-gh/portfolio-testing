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
import ImageUpload from "@/components/image-upload";

// ICON
import { Trash } from "lucide-react";

// PRISMA
import { PublicProfile } from "@prisma/client";

// SCHEMA
import { PublicProfileFormSchema } from "@/schemas";


type PublicProfileFormValues = z.infer<typeof PublicProfileFormSchema>

interface ICertificateFormProps {
    initialData: PublicProfile | null;
};


export const PublicProfileForm: React.FC<ICertificateFormProps> = ({ initialData }) => {
    const params = useParams()
    const router = useRouter()

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const title = initialData ? "Edit public profile" : "Create public profile"
    const description = initialData ? "Edit a public profile" : "Add a new public profile"
    const toastMessage = initialData ? "Public profile updated" : "Public profile created"
    const action = initialData ? "Save changes" : "Create"



    const form = useForm<PublicProfileFormValues>({
        resolver: zodResolver(PublicProfileFormSchema),
        defaultValues: initialData || {
            imageUrl: '',
            publicProfileName:'',
            publicProfileLink:''
        },
    });

    const onSubmit = async (data: PublicProfileFormValues) => {

        try {
            setLoading(true);
            if (initialData) {
                await axios.patch(`/api/public-profiles/${params.publicProfileId}`, data);
            } else {
                await axios.post(`/api/public-profiles`, data);
            }
            router.push(`/admin/public-profiles`)
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
            await axios.delete(`/api/public-profiles/${params.publicProfileId}`);
            router.push(`/admin/public-profiles`)
            router.refresh();
            toast.success('Public profiles deleted.');
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

                        {/*PUBLIC PROFILE IMAGE FIELD */}
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Public Profile Image</FormLabel>
                                    <FormControl>
                                        <ImageUpload
                                            value={field.value ? [field.value] : []}
                                            disabled={loading}
                                            onChange={(url) => field.onChange(url)}
                                            onRemove={() => field.onChange("")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        {/* PUBLIC PROFILE NAME FIELD */}
                        <FormField
                            control={form.control}
                            name="publicProfileName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Public profile name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* PUBLIC PROFILE LINK FIELD */}
                        <FormField
                            control={form.control}
                            name="publicProfileLink"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Link</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Public profile link" {...field} />
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
        </>
    )
}
