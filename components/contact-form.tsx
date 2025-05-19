"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ContactFormProps {
  simplified?: boolean
  className?: string
}

export function ContactForm({ simplified = false, className = "" }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Symulacja wysyłania formularza (opóźnienie 1 sekunda)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Tutaj można dodać rzeczywistą logikę wysyłania formularza
      console.log({ name, email, subject, message, privacyAccepted })

      // Pokaż popup z potwierdzeniem
      setShowSuccessDialog(true)

      // Resetowanie formularza
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      setPrivacyAccepted(false)
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error)
      // Tutaj można dodać obsługę błędów
    } finally {
      setIsSubmitting(false)
    }
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <label htmlFor="name" className="text-sm font-medium">
          Imię i nazwisko
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Wprowadź swoje imię i nazwisko"
          className="bg-zinc-950 border-zinc-800 focus:border-primary transition-colors duration-300"
          required
          disabled={isSubmitting}
        />
      </motion.div>
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label htmlFor="email" className="text-sm font-medium">
          Adres e-mail
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Wprowadź swój adres e-mail"
          className="bg-zinc-950 border-zinc-800 focus:border-primary transition-colors duration-300"
          required
          disabled={isSubmitting}
        />
      </motion.div>
      {!simplified && (
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label htmlFor="subject" className="text-sm font-medium">
            Temat
          </label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Wprowadź temat wiadomości"
            className="bg-zinc-950 border-zinc-800 focus:border-primary transition-colors duration-300"
            required
            disabled={isSubmitting}
          />
        </motion.div>
      )}
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <label htmlFor="message" className="text-sm font-medium">
          Wiadomość
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Wprowadź treść wiadomości"
          className={`bg-zinc-950 border-zinc-800 focus:border-primary transition-colors duration-300 ${simplified ? "min-h-[100px]" : "min-h-[150px]"}`}
          required
          disabled={isSubmitting}
        />
      </motion.div>
      <motion.div
        className="flex items-start space-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Checkbox
          id="privacy"
          checked={privacyAccepted}
          onCheckedChange={(checked) => setPrivacyAccepted(!!checked)}
          disabled={isSubmitting}
          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="privacy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Wyrażam zgodę na przetwarzanie moich danych osobowych
          </label>
          <p className="text-sm text-zinc-400">
            Zapoznałem/am się z{" "}
            <Link href="/polityka-prywatnosci" className="text-primary hover:underline">
              polityką prywatności
            </Link>{" "}
            i{" "}
            <Link href="/polityka-cookies" className="text-primary hover:underline">
              polityką cookies
            </Link>
            .
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button
          type="submit"
          className="w-full hover:scale-105 transition-transform duration-300"
          disabled={!privacyAccepted || isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Wysyłanie...
            </span>
          ) : (
            "Wyślij wiadomość"
          )}
        </Button>
      </motion.div>

      {/* Dialog z potwierdzeniem wysłania */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center text-xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <CheckCircle className="h-6 w-6 text-primary mr-2" />
              </motion.div>
              Wiadomość wysłana!
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center text-zinc-300">
            Dziękujemy za kontakt. Twoja wiadomość została pomyślnie wysłana. Odpowiemy najszybciej jak to możliwe.
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="w-full hover:scale-105 transition-transform duration-300">Zamknij</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )

  if (simplified) {
    return <div className={className}>{formContent}</div>
  }

  return (
    <Card className={`bg-zinc-900 border-zinc-800 hover:border-primary transition-colors duration-500 ${className}`}>
      <CardContent className="p-6">
        <motion.h2
          className="text-xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Formularz kontaktowy
        </motion.h2>
        {formContent}
      </CardContent>
    </Card>
  )
}
