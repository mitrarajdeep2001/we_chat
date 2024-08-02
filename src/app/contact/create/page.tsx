import ContactForm from "@/components/ContactForm"
import Header from "@/components/Header"

function page() {
  return (
    <main>
        <Header title="New contact" description="" searchEnabled={false} />
        <ContactForm />
    </main>
  )
}

export default page