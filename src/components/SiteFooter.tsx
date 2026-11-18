import { contact } from '@/data'

export function SiteFooter() {
  return (
    <footer className="px-4 py-8 text-sm text-subtle sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} S do Samba · Laranjeiras do Sul (PR)</p>
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="rounded-sm text-soft hover:text-lime">
          {contact.instagramHandle}
        </a>
      </div>
    </footer>
  )
}
