"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
})

export function ContactForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I will get back to you shortly.",
    })
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
        <input 
          type="text"
          {...form.register("name")}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
          placeholder="Your Name"
        />
        {form.formState.errors.name && <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
        <input 
          type="email"
          {...form.register("email")}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
          placeholder="your.email@example.com"
        />
        {form.formState.errors.email && <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
        <textarea 
          rows={5}
          {...form.register("message")}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
          placeholder="Your message..."
        ></textarea>
        {form.formState.errors.message && <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>}
      </div>
      <button 
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 transform"
      >
        Send Message
      </button>
    </form>
  )
}